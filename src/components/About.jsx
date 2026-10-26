import React from 'react';
import '../styles/about.css';

function About() {
    return (
        <section className="about-section">
            <p className="about-label">О нас</p>

            <div className="about-text">
                <p>
                    Наша учебная платформа соединяет компании, образовательные учреждения
                    и НКО с профессиональными лекторами, спикерами и тренерами.
                </p>
                <p>
                    Мы упрощаем процесс подбора, бронирования и организации лекций,
                    помогая находить экспертов, которые не просто делятся знаниями,
                    но и вдохновляют аудиторию.
                </p>
            </div>
        </section>
    );
}

export default About;