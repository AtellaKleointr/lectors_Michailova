import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import BookingModal from './BookingModal';
import '../styles/lecturerPage.css';

function LecturerPage({ teacher, onClose }) { //OneClose - Отслеживание кликов
    const [isModalOpen, setIsModalOpen] = useState(false); //Отслеживание открытия модалки

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isModalOpen) return; //если открыта модалка, то возвращаемся на станичку лектора, чтобы не закрывать ее вместе с esc
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose, isModalOpen]); //Отслеживание состояние OneClose

    if (!teacher) return null;

    const handleOverlayClick = (e) => { //Функция закрытия модалки при нажатии на фон родителя
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div className="portal-overlay" onClick={handleOverlayClick}> 
            <div className="portal-window">
                <button className="portal-close-btn" onClick={onClose}>✕</button>
                
                <div className="lecturer-page" style={{ width: '100%', margin: 0 }}>
                    <button className="back-btn" onClick={onClose}>
                        ← Назад к списку
                    </button>

                    <div className="lecturer-profile">
                        <div className="profile-sidebar">
                            <img
                                src={teacher.photo}
                                alt={teacher.name}
                                className="profile-photo"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/200x200?text=Фото'; }}
                            />
                            <h1 className="profile-name">{teacher.name}</h1>
                            <p className="profile-degree">{teacher.degree}</p>

                            <div className="profile-details">
                                <p><strong>Стаж:</strong> {teacher.experience} лет</p>
                                <p><strong>Образование:</strong> {teacher.education}</p>
                            </div>

                            <button
                                className="book-btn-large"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Записаться на занятие
                            </button>
                        </div>

                        <div className="profile-content">
                            <h2>Преподаваемые дисциплины</h2>
                            <div className="courses-list">
                                {teacher.courses.map((course, idx) => (
                                    <div key={idx} className="course-item">
                                        <h3>{course.title}</h3>
                                        <p>{course.description}</p>
                                        <ul>
                                            {course.topics.map((topic, i) => (
                                                <li key={i}>{topic}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <h2>Тарифы</h2>
                            <div className="tariffs-list">
                                {teacher.tariffs.map((tariff, idx) => (
                                    <div key={idx} className="tariff-item">
                                        <span>{tariff.name}</span>
                                        <strong>{tariff.price}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {isModalOpen && (
                        <BookingModal
                            teacher={teacher}
                            onClose={() => setIsModalOpen(false)} //генерируем BookingModal если открыта модалка
                        />
                    )}
                </div>
            </div>
        </div>,
        document.getElementById('modal-root') //вставка в modal-root
    );
}

export default LecturerPage;