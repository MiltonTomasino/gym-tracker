import React from 'react'
import Benchpress from '../../assets/B-1.webp'
import Benchpress1 from '../../assets/B-2.webp'
import Benchpress2 from '../../assets/B-3.webp'
import Benchpress3 from '../../assets/B-4.webp'
import { useState } from 'react';
// import Benchpress from '../../assets/benchpress.jpeg'
import '../../styles/MachineList.css'
import MachineSpecs from './MachineSpecs';


function BenchpressList({ machineType, specs, onSaveSpecification, onDeleteSpecification }) {
  const [settingsActive, setSettingsActive] = useState(false);
  const [machineNum, setMachineNum] = useState(1);
  const [img, setImg] = useState(Benchpress);

  const handleClick1 = () => {
    setSettingsActive(true);
    setMachineNum(1);
    setImg(Benchpress);
  };

  const handleClick2 = () => {
    setSettingsActive(true);
    setMachineNum(2);
    setImg(Benchpress1);
  };

  const handleClick3 = () => {
    setSettingsActive(true);
    setMachineNum(3);
    setImg(Benchpress2);
  };

  const handleClick4 = () => {
    setSettingsActive(true);
    setMachineNum(4);
    setImg(Benchpress3);
  };

  return (
    <>
      {!settingsActive ? (
        <>
          <div className='cyclemachine'>
            <img className='pic' src={Benchpress} alt='Benchpress' />
            <p>Machine #1</p>
            <button className='edit-button' onClick={handleClick1}>Edit specs</button>
          </div>
          <div className='cyclemachine'>
            <img className='pic' src={Benchpress1} alt='Benchpress' />
            <p>Machine #2</p>
            <button className='edit-button' onClick={handleClick2}>Edit specs</button>
          </div>
          <div className='cyclemachine'>
            <img className='pic' src={Benchpress2} alt='Benchpress' />
            <p>Machine #3</p>
            <button className='edit-button' onClick={handleClick3}>Edit specs</button>
          </div>
          <div className='cyclemachine'>
            <img className='pic' src={Benchpress3} alt='Benchpress' />
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

export default BenchpressList;