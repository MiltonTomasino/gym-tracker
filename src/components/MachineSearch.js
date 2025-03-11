import React, { useRef, useEffect, useState } from 'react'
import "../styles/SearchBar.css"

export const MachineSearch = ({ searchResults, setSearchResults, onAddMachine }) => {

    const [searchTerm, setSearchTerm] = useState('');
    //const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [filter, setFilter] = useState('');
    const [searchMessage, setSearchMessage] = useState('');

    React.useEffect(() => {
        if(filter) {
          filterSearch();
        } else {
         setFilteredResults(searchResults);
        }
    }, [filter])

    const selectRef = useRef('');

    const handleReset = () => {
        selectRef.current.value = ''; // Reset the value to an empty string
        setFilter();
    };

    // Takes in searchTerm and uses as query param to fetch SQL search
    async function getSearchResults() {
        if (searchTerm) {
            const result = await fetch('/api/machines/search?q=' + searchTerm);
            const apiRes = await result.json();
            //console.log(apiRes);
            if (apiRes.status) {
                setSearchMessage();
                let results = await getMuscles(apiRes.data);
                console.log(results);
                setSearchResults(results); 
                setFilteredResults(results);
            } else {
                setSearchResults();
                setFilteredResults();
                getRecommendedResults(); 
                //setSearchMessage(apiRes.message);
            }
        }
    }

    // Hard coded search to get example recommendations
    // Change later to search for machines based on popularity
    async function getRecommendedResults() {
        const result = await fetch('/api/machines/search?q=a');
        const apiRes = await result.json();
        //console.log(apiRes);
        setSearchMessage("No search results found. Check out some popular recommendations:");
        let results = await getMuscles(apiRes.data);
        setSearchResults(results); 
        setFilteredResults(results);
    }

    // get all targeted muscles for each machine
    async function getMuscles(machineArray) {
        let count = 0;
        for (const machine of machineArray) {
            const result = await fetch('/api/machines/getMuscle?q=' + machine.machineId);
            const apiRes = await result.json();

            machineArray[count].muscle = apiRes.data;
            count += 1;
        }
        return machineArray;
    }

    // Filter search results
    async function filterSearch() {
        let count = 0;
        var filtered = JSON.parse(JSON.stringify(searchResults));
        //console.log(filtered);
        for (const machine of searchResults) {
            let present = false;
            for (const muscle of machine.muscle) {
                if (muscle.muscleName === filter) present = true;
                //console.log(count + muscle.muscleName);
                //console.log(count + filter)
            }
            if (!present) {
                delete filtered[count];
                //console.log(filtered);
            }
            count += 1;
        }
        setFilteredResults(filtered);
    }

  return (
    <div className="search-wrapper">
        <div className="input-wrapper">
            <input
                placeholder="Type to search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
            />
            <button onClick={(e) => {
                getSearchResults();
                handleReset();}}>Search</button>
        </div>

      <div id="search-results">
        {searchResults ? (
            <>
            <div id="search-results-header">
                <strong>Search Results:</strong>
                <select ref={selectRef} value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="">Filter your results</option>
                    {Object.keys(searchResults).length > 1 ? (
                        <>
                        <option value="Triceps">Triceps</option>
                        <option value="Chest">Chest</option>
                        <option value="Biceps">Biceps</option>
                        </>
                    ) : (
                        <></>
                    )}
                </select>
            </div>
            <br></br>
            <i>{searchMessage}</i>
            <ul>
                {filteredResults.map((machine) => (
                    <li className='search-result-card' key={machine.machineId}>
                        <p className='search-result-title'>{machine.name}:</p>
                        <p className='search-result-description'>{machine.description}</p>
                        <p className='search-result-muscles'>
                        Target Muscles: {
                            machine.muscle.map((muscle, index) => (
                                <i key={muscle.muscleId}>{ (index ? ', ' : '') + muscle.muscleName}</i>
                            ))
                        }
                        </p>
                        <button onClick={() => onAddMachine(machine.machineId)}>Add to Plan</button>
                    </li>
                ))}
            </ul>
            </>
        ) : (
            <div id="search-message">{searchMessage}</div>
        )}

        </div>
    </div>
  )
}
