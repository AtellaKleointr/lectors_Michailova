import React from 'react';
import '../styles/header.css';

function Header({ currentPage, onNavigate }) {
    const items = [
        { key: 'main', label: 'Главная' },
        { key: 'partners', label: 'Партнёры' },
        { key: 'about', label: 'О нас' },
        { key: 'lecturers', label: 'Лекторы' },
    ];

    return (
        <header className="site-header">
            <nav className="site-nav">
                {items.map((item) => (
                    <button
                        key={item.key}
                        className={
                            'nav-link' + (currentPage === item.key ? ' nav-link--active' : '')
                        }
                        onClick={() => onNavigate(item.key)}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </header>
    );
}

export default Header;