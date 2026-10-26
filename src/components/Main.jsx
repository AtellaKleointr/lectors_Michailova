import React from 'react';
import '../styles/main.css';

function Main({ onNavigate }) {
    return (
        <section className="main-section">
            <h1>Учебная платформа</h1>
            <p>
                Онлайн и оффлайн обучение для физических и юридических лиц.
                Индивидуальные занятия, корпоративные тренинги, подготовка к экзаменам.
            </p>
            <button className="cta-button" onClick={() => onNavigate('lecturers')}>
                Выбрать лектора
            </button>
        </section>
    );
}

export default Main;