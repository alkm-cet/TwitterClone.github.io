import React from 'react'
import DocketComponents from '../components/DocketComponents'

function Docket() {
    return (
        <div className='docketcontainer'>
            <h3 className='docketcontainerh3'>İlgini çekebilecek gündemler</h3>

            <DocketComponents
                alan={'Haberler'}
                baslik={'#SONDAKİKA'}
                tweetsayisi={'6,258 Tweet'} />

            <DocketComponents
                alan={'Gündemdekiler'}
                baslik={'#Doğum'}
                tweetsayisi={'30B Tweet'} />

            <DocketComponents
                alan={'İş Dünyası'}
                baslik={'#NASDAQ'}
                tweetsayisi={'3,221 Tweet'} />

            <DocketComponents
                alan={'Türkiye'}
                baslik={'#İlber'}
                tweetsayisi={'588 Tweet'} />

            <DocketComponents
                alan={'Gündemdekiler'}
                baslik={'#Bedelli Askerlik'}
                tweetsayisi={'1.798 Tweet'} />

            <DocketComponents
                alan={'İş Dünyası'}
                baslik={'#NASDAQ'}
                tweetsayisi={'3,221 Tweet'} />

            <DocketComponents
                alan={'Haberler'}
                baslik={'#SONDAKİKA'}
                tweetsayisi={'6,258 Tweet'} />

            <a href="#" style={{ textDecoration: 'none' }}>
                <span style={{ color: 'rgb(29, 155, 240)' }}>Daha fazla göster</span>
            </a>

        </div>
    )
}

export default Docket