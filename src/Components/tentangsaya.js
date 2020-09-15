import React from 'react';
import './components.css';

class TentangSaya extends React.Component{
    render(){
        return(
            <div className="text-light">
            <selection className="tentangsaya">
                <div className="heading">
                    <h2>About Me</h2>
                </div>
                <div className="content">
                    <div className="contentBx">
                    <h3>Short Introduction</h3>
                    <p>
                        Perkenalkan saya Kharisma Amalia Putri biasa dipanggil Risma. Saya
                        berumur 17 tahun. Saya anak pertama dari tiga bersaudara dan saya 
                        perempuan sendiriHobby saya memasak dan bersepeda. Saya berasal dari 
                        Kota Tulungagung. Saya dari jurusan Rekayasa Perangkat Lunak. Saya 
                        lulusan dari Madrasah Tsanawiyah Negeri 3 Tulungagung. 
                        <br/><br/>
                        Makanan favorit saya adalah nasi goreng krengsengan. Saya suka pedas dan
                        manis. Saya suka travelling ke jogja karena dijogja biaya nya murah. Saya 
                        juga suka makan dan minum yang berbau coklat. Saya termasuk orang yang penyabar,
                        penakut, dan saling membantu.        
                    </p>
                    <div>
                        <img src></img>
                    </div>
                    </div>
                    </div>
                    
                </selection>
            </div>
        );
    }
}

export default TentangSaya;