import React, { useState } from 'react';
import { teachers } from '../data/teachers';
import LecturerCard from './LecturerCard';
import LecturerDetail from './LecturerDetail';
import '../styles/lecturers.css';

function Lecturers({ onOpenLecturer }) {
    const [filter, setFilter] = useState('all');
    const [selected, setSelected] = useState(null);

    const filtered =
        filter === 'all' ? teachers : teachers.filter((t) => t.gender === filter);

    return (
        <section className="lecturers-section">
            <p className="lecturers-label">Лекторы</p>

            {/* Фильтр */}
            <div className="lecturers-filters" style={{ marginTop: 32 }}>
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                >
                    Все
                </button>
                <button
                    className={filter === 'male' ? 'active' : ''}
                    onClick={() => setFilter('male')}
                >
                    Мужчины
                </button>
                <button
                    className={filter === 'female' ? 'active' : ''}
                    onClick={() => setFilter('female')}
                >
                    Женщины
                </button>
            </div>

            {/* Реальные карточки лекторов */}
            <div className="lecturers-grid">
                {filtered.map((t) => (
                    <LecturerCard key={t.id} teacher={t} onClick={() => onOpenLecturer(t)} />
                ))}
            </div>

            {selected && (
                <LecturerDetail teacher={selected} onClose={() => setSelected(null)} />
            )}
        </section>
    );
}

export default Lecturers;