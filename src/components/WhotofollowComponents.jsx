import React from 'react'

function WhotofollowComponents({ img, mahlas, email }) {

    const follow = (e) => {
        if (e.target.innerText == 'Takip Et') {
            e.target.innerText = 'Takip Ediliyor';
            e.target.style.backgroundColor = 'rgb(29, 155, 240)'
            e.target.style.width = '90px'
        }
        else if (e.target.innerText == 'Takip Ediliyor') {
            e.target.innerText = 'Takip Et';
            e.target.style.backgroundColor = 'black'
            e.target.style.width = '80px'
        }

    }

    return (
        <div className='whotofollowComponents'>
            <div className='wotofollnamediv'>
                <img src={img} alt="" style={{ width: 50, height: 50, borderRadius: 50 }} />
                <div>
                    <h4 className='whotofollowComponentsh4'>{mahlas}</h4>
                    <h6 className='whotofollowComponentsh6'>{email}</h6>
                </div>
            </div>


            <button className='wotofollowbtn' onClick={follow}>Takip Et</button>
        </div>
    )
}

export default WhotofollowComponents