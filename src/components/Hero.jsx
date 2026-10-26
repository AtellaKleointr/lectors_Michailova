import React from 'react';
import '../styles/hero.css';
import heroImage from '../data/images/1.png';

function Hero({ onNavigate }) {
    return (
        <section className="hero-section">
            {/* Левая часть - Картинка */}
            <div className="hero-image">
                <img src={heroImage} alt="Лектор ведёт занятие" />
            </div>

            {/* Правая часть - Продающий контент */}
            <div className="hero-content">
                {/* Маленький бейдж, цепляющий взгляд */}
                <div className="hero-badge">🚀 Более 5000 довольных студентов</div>

                <h1 className="hero-title">
                    Наши лекторы — признанные специалисты в своих областях,
                    готовые делиться опытом и знаниями.
                </h1>

                <p className="hero-subtitle">
                    Получите практические навыки от экспертов из МФТИ, МГУ и ВШЭ.
                    Индивидуальный подход, реальные кейсы и помощь в трудоустройстве.
                </p>

                <div className="hero-actions">
                    <button
                        className="hero-cta-button"
                        onClick={() => onNavigate && onNavigate('lecturers')}
                    >
                        Выбрать лектора
                    </button>

                    {/* Текст, который снимает возражения */}
                    <span className="hero-guarantee">
                        ✓ Первое занятие — бесплатно
                    </span>
                </div>
            </div>

            {/* Бегущая строка */}
            <div className="hero-marquee-container">
                <div className="hero-marquee">
                    <span>Ведущие компании доверяют нам: ICL • ТАТНЕФТЬ • Сбер • Яндекс • VK • МТС • Ростелеком •</span>
                    <span>Ведущие компании доверяют нам: ICL • ТАТНЕФТЬ • Сбер • Яндекс • VK • МТС • Ростелеком •</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;