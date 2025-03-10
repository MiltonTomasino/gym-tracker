import React, {useState} from 'react';
import '../../styles/Profile.css';
import Settings from './DashboardComponents/Settings';
import Workoutplan from './DashboardComponents/Workoutplan';
import MachineList from '../MachineList/MachineList';
import '../../styles/MachineList.css'
import BarChart from '../Dashboard/DashboardComponents/BarChart'
import CycleList from '../MachineList/CycleList';
import BenchpressList from '../MachineList/BenchpressList';
import TreadmillList from '../MachineList/TreadmillList';

function Dashboard({profileDesc, setProfileDesc, setIsLoggedIn}) {

    const [activeComponent, setActiveComponent] = useState('FirstComponent');

  return (
    <div>
        <div className='dashboard-navbar'>
            <ul>
                <li onClick={ () => setActiveComponent("settings")}>Settings</li>
                <li onClick={ () => setActiveComponent("workoutplan")}>Workout Plan</li>
                {/* <li onClick={ () => setActiveComponent("machinelist")}>Available Machines</li> */}
                <div class = "menu">
                    <li>Machine List</li>
                        <div class = "sub-menu">
                            <a id = "menu-link" onClick={() => setActiveComponent('cyclelist')}>Cycle</a>
                            <a id = "menu-link" onClick={() => setActiveComponent('benchpress')}>Bench Press</a>
                            <a id = "menu-link" onClick={() => setActiveComponent('treadmill')}>Treadmill</a>
                        </div>
			    </div>
                <li onClick={ () => setActiveComponent("graph")}>Progress</li>
            </ul>
        </div>

        <div className='dashboard-components'>
            {activeComponent === "settings" && (<Settings profileDesc={profileDesc} setProfileDesc={setProfileDesc} setIsLoggedIn={setIsLoggedIn}/>)}
            {activeComponent === "workoutplan" && (<Workoutplan />)}
            {activeComponent === 'cyclelist' && (<MachineList machineType={'cycle'}/>)}
            {activeComponent === 'benchpress' && (<MachineList machineType={'bench'} />)}
            {activeComponent === 'treadmill' && (<MachineList machineType={'tread'} />)}
            <div className='progress-chart'>
                {activeComponent === 'graph' && (<BarChart />)}
            </div>
            

        </div>
    </div>
  )
}

export default Dashboard