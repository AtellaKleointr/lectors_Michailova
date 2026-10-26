import React, { useState } from 'react';
import '../styles/modal.css';

function BookingModal({ teacher, onClose }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && phone) {
            // Здесь в будущем можно отправить данные на сервер
            setIsSuccess(true);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                {isSuccess ? (
                    <div className="modal-success">
                        <h2>Заявка отправлена! 🎉</h2>
                        <p>Мы свяжемся с вами в ближайшее время для подтверждения записи к лектору <strong>{teacher.name}</strong>.</p>
                        <button className="btn-primary" onClick={onClose}>Отлично</button>
                    </div>
                ) : (
                    <>
                        <h2 className="modal-title">Запись на занятие</h2>
                        <p className="modal-subtitle">Вы записываетесь к лектору: <br /><strong>{teacher.name}</strong></p>

                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="form-group">
                                <label>Ваше имя</label>
                                <input
                                    type="text"
                                    placeholder="Иван Иванов"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Телефон или Email</label>
                                <input
                                    type="text"
                                    placeholder="+7 (999) 123-45-67"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-primary">Отправить заявку</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default BookingModal;