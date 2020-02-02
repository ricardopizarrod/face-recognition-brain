import React from 'react';
import './ImageLinkForm';


const ImageLinkForm = () => {
    return(
        <div>
            <p className='f3'>
                {'Este Brillante Cerebro puede detectar los rostros de tus imágenes ¡Detectalos!'}
            </p>
                <div className='center'>
                    <div className='center pa4 br3 shadow-5'>
                        <input className='f4 pa2 w-70 center' type='tex'/>
                        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detectar</button>
                    </div>
                </div>
             </div>
    );
}

export default ImageLinkForm;