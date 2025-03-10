import React, { useState } from 'react';
import CycleList from './CycleList';
import BenchpressList from './BenchpressList';
import TreadmillList from './TreadmillList';
import Bike from '../../assets/bike.jpg';

function MachineList({ machineType }) {
  const [specs, setSpecs] = useState([]);

  const onSaveSpecification = (machineNum, param1, param2, img) => {
    const updatedSpecs = [...specs];
    const existingSpec = updatedSpecs.find((spec) => spec.machineNum === machineNum);
    if (existingSpec) {
      existingSpec.param1 = param1;
      existingSpec.param2 = param2;
      existingSpec.img = img;
    } else {
      updatedSpecs.push({ machineType, machineNum, param1, param2, img });
    }
    setSpecs(updatedSpecs);
  };

  const onDeleteSpecification = (machineNum) => {
    const updatedSpecs = specs.filter((spec) => spec.machineNum !== machineNum);
    setSpecs(updatedSpecs);
  };

  if (machineType === 'cycle') {
    return (
      <>
        <h2 className='list-title'>Cycle Machines</h2>
        <div className='cyclelist-container'>
          <CycleList
            machineType={machineType}
            specs={specs}
            onSaveSpecification={onSaveSpecification}
            onDeleteSpecification={onDeleteSpecification}
          />
        </div>
      </>
    );
  } else if (machineType === 'bench') {
    return (
      <>
        <h2 className='list-title'>Benchpress Machines</h2>
        <div className='cyclelist-container'>
          <BenchpressList
            machineType={machineType}
            specs={specs}
            onSaveSpecification={onSaveSpecification}
            onDeleteSpecification={onDeleteSpecification}
          />
        </div>
      </>
    );
  } else if (machineType === 'tread') {
    return (
      <>
        <h2 className='list-title'>Treadmill Machines</h2>
        <div className='cyclelist-container'>
          <TreadmillList
            machineType={machineType}
            specs={specs}
            onSaveSpecification={onSaveSpecification}
            onDeleteSpecification={onDeleteSpecification}
          />
        </div>
      </>
    );
  }
}

export default MachineList;
