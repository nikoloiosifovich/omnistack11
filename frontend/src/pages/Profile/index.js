import React from 'react';
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={ logoImg } alt="logo: Be The Hero"/>
        <span>Bem vinda, APAD</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={ 18 } color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do caso</p>

          <strong>VALOR:</strong>
          <p>R$ 1.200,00</p>

          <button type="button">
            <FiTrash2 size={ 20 } color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do caso</p>

          <strong>VALOR:</strong>
          <p>R$ 1.200,00</p>

          <button type="button">
            <FiTrash2 size={ 20 } color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do caso</p>

          <strong>VALOR:</strong>
          <p>R$ 1.200,00</p>

          <button type="button">
            <FiTrash2 size={ 20 } color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do caso</p>

          <strong>VALOR:</strong>
          <p>R$ 1.200,00</p>

          <button type="button">
            <FiTrash2 size={ 20 } color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
