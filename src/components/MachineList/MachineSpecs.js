import React, { useState, useEffect } from 'react'
import '../../styles/MachineList.css'
import Bike from '../../assets/bike.jpg'
import Benchpress from '../../assets/benchpress.jpeg'
import Treadmill from '../../assets/treadmill.jpeg'

function MachineSpecs({ machineType, machineNum, img, specs, onSaveSpecification, onDeleteSpecification }) {

    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');

    useEffect(() => {
        if (machineType === 'cycle') {
            setP1('Pedal resistance');
            setP2('timer');
        } else if (machineType === 'bench') {
            setP1('weight');
            setP2('incline degree');
        } else if (machineType === 'tread') {
            setP1('Speed');
            setP2('timer');
        }
    }, [machineType]);

    const [param1, setParam1] = useState('');
    const [param2, setParam2] = useState('');

    useEffect(() => {
        const currentSpec = specs.find((spec) => spec.machineNum === machineNum);
        if (currentSpec) {
            setParam1(currentSpec.param1);
            setParam2(currentSpec.param2);
        }
    }, [machineNum, specs]);

    const handleSaveClick = () => {
        onSaveSpecification(machineNum, param1, param2, img);
    };

    const handleDeleteClick = () => {
        onDeleteSpecification(machineNum);
    };

    return (
        <>
            <div className='settings-items'>
                <h2> Machine #{machineNum}</h2>
                <img className='pic-settings' src={img} alt={`Machine ${machineNum}`} />
                <input
                    className='machine-input'
                    type='text'
                    value={param1}
                    onChange={(e) => setParam1(e.target.value)}
                    placeholder={p1}
                />
                <input
                    className='machine-input'
                    type='text'
                    value={param2}
                    onChange={(e) => setParam2(e.target.value)}
                    placeholder={p2}
                />
                <button className='update-button' onClick={handleSaveClick}>Update specs</button>
                <button className='delete-button' onClick={handleDeleteClick}>Delete specs</button>
            </div>
        </>
    );
}

export default MachineSpecs;