import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; 
import BookingModal from './BookingModal';
import '../styles/lecturerPage.css';

function LecturerPage({ teacher, onClose }) { 
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    if (!teacher) return null;

    
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    
    return createPortal(
        <div className="modal-overlay" onClick={handleOverlayClick} style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start', 
            zIndex: 1000,
            padding: '40px 20px',
            overflowY: 'auto' 
        }}>
            
            <div className="lecturer-page" style={{
                position: 'relative',
                background: '#fff', 
                borderRadius: '24px',
                width: '100%',
                maxWidth: '1200px',
                padding: '40px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}>
                
                <button 
                    onClick={onClose} 
                    style={{
                        position: 'absolute', top: '20px', right: '20px',
                        border: 'none', background: '#f1f5f9', borderRadius: '50%',
                        width: '40px', height: '40px', cursor: 'pointer', 
                        fontSize: '20px', zIndex: 10, display: 'flex', 
                        alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    ✕
                </button>

                <button className="back-btn" onClick={onClose} style={{ marginBottom: '20px' }}>
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
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </div>,
        document.getElementById('modal-root') 
    );
}

export default LecturerPage;