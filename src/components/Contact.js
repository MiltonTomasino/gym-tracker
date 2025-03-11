import React, { useEffect, useState } from 'react';

//we need to add proper links to our names when we get to it.

function ContactComp() {
    return (
        <>
            <form className='form1'>
            <ul>
                <h1>Contact the developers.</h1>
                <div className='form-element1'>
                    <label>Yiru chen</label>
                </div>

                <div className='form-element1'>
                    <label>Stanislav Shaposhnikov</label>
                </div>

                <div className='form-element1'>
                    <label>Milton Tomasino</label>
                </div>

                <div className='form-element1'>
                    <label>Emanuel Francis</label>
                </div>

                <div className='form-element1'>
                    <label>Kripa Pokhrel</label>
                </div>

                <div className='form-element1'>
                    <label>Jyotsna Koirala</label>
                </div>
                </ul>
            </form>
            <br/>
        </>
    );
};

export default ContactComp;
