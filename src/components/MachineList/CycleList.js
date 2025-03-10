import React from 'react'
import { useState } from 'react'
// import Bike from '../../assets/bike.jpg'
import MachineSpecs from './MachineSpecs'
import Bike from '../../assets/C-1.webp'
import Bike2 from '../../assets/C-2.webp'
import Bike3 from '../../assets/C-5.webp'
import Bike1 from '../../assets/C-4.webp'

function CycleList({ machineType, specs, onSaveSpecification, onDeleteSpecification }) {
  const [settingsActive, setSettingsActive] = useState(false);
  const [machineNum, setMachineNum] = useState(1);
  const [img, setImg] = useState(Bike);

  const handleClick1 = () => {
    setSettingsActive(true);
    setMachineNum(1);
    setImg(Bike);
  };

  const handleClick2 = () => {
    setSettingsActive(true);
    setMachineNum(2);
    setImg(Bike1);
  };

  const handleClick3 = () => {
    setSettingsActive(true);
    setMachineNum(3);
    setImg(Bike2);
  };

  const handleClick4 = () => {
    setSettingsActive(true);
    setMachineNum(4);
    setImg(Bike3);
  };

  return (
    <>
      {!settingsActive ? (
        <>
          <div className='cyclemachine'>
            <img className='pic' src={Bike} alt='Cycle' />
            <p>Machine #1</p>
            <button className='edit-button' onClick={handleClick1}>Edit specs</button>
          </div>
          <div className='cyclemachine'>
            <img className='pic' src={Bike1} alt='Cycle' />
            <p>Machine #2</p>
            <button className='edit-button' onClick={handleClick2}>Edit specs</button>
          </div>
          <div className='cyclemachine'>
            <img className='pic' src={Bike2} alt='Cycle' />
            <p>Machine #3</p>
            <button className='edit-button' onClick={handleClick3}>Edit specs</button>
          </div>
          <div className='cyclemachine'>
            <img className='pic' src={Bike3} alt='Cycle' />
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

export default CycleList;