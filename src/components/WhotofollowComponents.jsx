import React from 'react'

function WhotofollowComponents({ img, mahlas, email }) {
    return (
        <div className='whotofollowComponents'>
            <div className='wotofollnamediv'>
                <img src={img} alt="" style={{ width: 50, height: 50, borderRadius: 50 }} />
                <div>
                    <h4 className='whotofollowComponentsh4'>{mahlas}</h4>
                    <h6 className='whotofollowComponentsh6'>{email}</h6>
                </div>
            </div>


            <button className='wotofollowbtn'>Takip Et</button>
        </div>
    )
}

export default WhotofollowComponents