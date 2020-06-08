import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                <img src={logo} alt="Recycle"/>
                </header>
                <main>
                    <h1>Seu markeplace de recolha.</h1>
                    <p>Ajudamos pessoas a encontrar os pontos de recolha.</p>

                    <Link to="/create-point">
                        <span><FiLogIn/></span>
                        <strong>Registe um ponto de recolha</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;