import React from 'react'

function DocketComponents({ alan, baslik, tweetsayisi }) {
    return (
        <div className='docketcomponents'>
            <h6 className='docketcomponentsh6'>{alan}</h6>
            <h5 className='docketcomponentsbaslik'>{baslik}</h5>
            <h6 className='docketcomponentsh6'>{tweetsayisi}</h6>
        </div>
    )
}

export default DocketComponents