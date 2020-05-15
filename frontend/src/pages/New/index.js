import React, { useState } from 'react';
import api from '../../services/api';

import './style.css';

export default function New({ history}) {
    const [img, setImg] = useState(null);
    const [area, setArea] = useState('');
    const [functions, setFunctions] = useState('');
    const [price, setPrice] = useState('');

    async function handleSubmit(event) {

        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('img', img);
        data.append('area', area);
        data.append('functions', functions);
        data.append('price', price);


        await api.post('/perfils', data, {
            headers: {user_id}
        });

        history.push('/profile');
    }

    return (
        <form onSubmit={handleSubmit}>

        <label id="img">
            <input type="file" onChange={event =>setImg(event.target.files[0])}>

            </input>
        </label>

            <label htmlFor="area" >Area </label>
            <input id='area' placeholder="Sua area musical"
                value={area}
                onChange={event => setArea(event.target.value)} />


            <label htmlFor='functions'>Musicas <span>Separadas por ( , ) </span></label>
            <input id="functions"
                placeholder="Digite pelo menos 2 musicas principais"
                value={functions}
                onChange={event => setFunctions(event.target.value)} />

            <label htmlFor='price'>Preço <span>Em branco para gratuito </span></label>
            <input id="price"
                placeholder="Digite o valor do CD"
                value={price}
                onChange={event => setPrice(event.target.value)} />

            <button type="submit" className='btn' >Cadastrar</button>

        </form>
    )
}