import React from 'react'
import Treadmill from '../../assets/T-1.jpg'
import Treadmill1 from '../../assets/T-2.jpg'
import Treadmill2 from '../../assets/T-3.jpg'
import Treadmill3 from '../../assets/T-5.webp'
import { useState } from 'react';
// import Treadmill from '../../assets/treadmill.jpeg'
import MachineSpecs from './MachineSpecs';

function TreadmillList({ machineType, specs, onSaveSpecification, onDeleteSpecification }) {
  const [settingsActive, setSettingsActive] = useState(false);
  const [machineNum, setMachineNum] = useState(1);
  const [img, setImg] = useState(Treadmill);

  const handleClick1 = () => {
    setSettingsActive(true);
    setMachineNum(1);
    setImg(Treadmill);
  };

  const handleClick2 = () => {
    setSettingsActive(true);
    setMachineNum(2);
    setImg(Treadmill1);
  };

  const handleClick3 = () => {
    setSettingsActive(true);
    setMachineNum(3);
    setImg(Treadmill2);
  };

  const handleClick4 = () => {
    setSettingsActive(true);
    setMachineNum(4);
    setImg(Treadmill3);
  };

  return (
    <>
      {!settingsActive ? (
        <>
          <div className='cyclemachine'>
            <img className='pic' src={Treadmill} alt='Treadmill' />
            <p>Machine #1</p>
            <button className='edit-button' onClick={handleClick1}>Edit specs</button>
          </div>
          <div className='cyclemachine'>
            <img className='pic' src={Treadmill1} alt='Treadmill' />
            <p>Machine #2</p>
            <button className='edit-button' onClick={handleClick2}>Edit specs</button>
          </div>
          <div className='cyclemachine'>
            <img className='pic' src={Treadmill2} alt='Treadmill' />
            <p>Machine #3</p>
            <button className='edit-button' onClick={handleClick3}>Edit specs</button>
          </div>
          <div className='cyclemachine'>
            <img className='pic' src={Treadmill3} alt='Treadmill' />
            <p>Machine #4</p>
            <button className='edit-button' onClick={handleClick4}>Edit specs</button>
          </div>
        </>
      ) : (
        <>
          <div className='machine-settings'>
            <div onClick={() => setSettingsActive(false)} className='settings-arrow'>&#x2190;</div>
            <MachineSpecs
              machineType={machineType}
              machineNum={machineNum}
              img={img}
              specs={specs}
              onSaveSpecification={onSaveSpecification}
              onDeleteSpecification={onDeleteSpecification}
            />
          </div>
        </>
      )}
    </>
  );
}

export default TreadmillList;