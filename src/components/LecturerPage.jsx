import React, { useState } from 'react';
import BookingModal from './BookingModal';
import '../styles/lecturerPage.css';

function LecturerPage({ teacher, onBack }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!teacher) return null;

    return (
        <div className="lecturer-page">
            <button className="back-btn" onClick={onBack}>← Назад к списку</button>

            <div className="lecturer-profile">
                {/* Левая колонка: Фото и основная инфа */}
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

                {/* Правая колонка: Программы и тарифы */}
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

            {/* Модальное окно */}
            {isModalOpen && (
                <BookingModal
                    teacher={teacher}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default LecturerPage;