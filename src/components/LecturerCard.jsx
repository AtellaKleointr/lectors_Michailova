import React from 'react';

function LecturerCard({ teacher, onClick }) {
    return (
         <div className="lecturer-card" onClick={onClick}>
            <img
                className="lecturer-photo"
                src={teacher.photo}
                alt={teacher.name}
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.querySelector('.photo-placeholder')?.style?.setProperty('display', 'flex');
                }}
            />
            <div className="lecturer-info">
                <div className="lecturer-name">{teacher.name}</div>
                <div className="lecturer-degree">{teacher.degree}</div>
                <div className="lecturer-exp">Стаж: {teacher.experience} лет</div>
                <div className="lecturer-courses">
                    {teacher.courses.map((c) => c.title).join(' · ')}
                </div>
            </div>
        </div>
    );
}

export default LecturerCard;