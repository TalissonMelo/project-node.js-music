import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Profile() {

    const [perfils, setProfile] = useState([]);

    useEffect(() => {
        async function loadSpots() {

            const user_id = localStorage.getItem('user');
            const response = await api.get('/profile', {
                headers: { user_id }
            });

            setProfile(response.data);
        }

        loadSpots();

    }, []);

    return (
        <>
            <ul className="list">
                {perfils.map(perfil => (
                    <li key={perfil._id}>
                        <header style={{ backgroundImage: `url(${perfil.img_url})`}} />
                        <strong>{perfil.area}</strong>
                        <span>{perfil.price ?  `R$ ${perfil.price}`: 'Gratuito' }</span>
                    </li>
                ))}
            </ul>
            <Link to="/new">
               <button className="btn">Cadastrar</button>  
            </Link>
        </>
    )
}