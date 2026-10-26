import React, { useState } from 'react';

function LecturerDetail({ teacher, onClose }) {
    const [openCourse, setOpenCourse] = useState(null);

    if (!teacher) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button style={styles.closeBtn} onClick={onClose}>✕</button>

                <div style={styles.header}>
                    <img
                        src={teacher.photo}
                        alt={teacher.name}
                        style={styles.photo}
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div>
                        <h2 style={styles.name}>{teacher.name}</h2>
                        <p style={styles.meta}>{teacher.education}</p>
                        <p style={styles.meta}>Стаж: {teacher.experience} лет</p>
                        <p style={styles.degree}>{teacher.degree}</p>
                    </div>
                </div>

                <h3 style={styles.sectionTitle}>Преподаваемые дисциплины</h3>
                {teacher.courses.map((course, idx) => (
                    <div key={idx} style={styles.courseBlock}>
                        <div
                            style={styles.courseHeader}
                            onClick={() => setOpenCourse(openCourse === idx ? null : idx)}
                        >
                            <strong>{course.title}</strong>
                            <span>{openCourse === idx ? '▲' : '▼'}</span>
                        </div>
                        <p style={styles.courseDesc}>{course.description}</p>
                        {openCourse === idx && (
                            <ol style={styles.topicsList}>
                                {course.topics.map((t, i) => (
                                    <li key={i} style={styles.topicItem}>{t}</li>
                                ))}
                            </ol>
                        )}
                    </div>
                ))}

                <h3 style={styles.sectionTitle}>Тарифы</h3>
                <div style={styles.tariffs}>
                    {teacher.tariffs.map((t, i) => (
                        <div key={i} style={styles.tariffItem}>
                            <span>{t.name}</span>
                            <strong style={{ color: '#2563eb' }}>{t.price}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '20px',
    },
    modal: {
        background: '#fff',
        borderRadius: '16px',
        maxWidth: '800px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '32px',
        position: 'relative',
    },
    closeBtn: {
        position: 'absolute',
        top: '16px',
        right: '16px',
        border: 'none',
        background: '#f1f5f9',
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        cursor: 'pointer',
        fontSize: '18px',
    },
    header: {
        display: 'flex',
        gap: '20px',
        marginBottom: '24px',
        alignItems: 'flex-start',
    },
    photo: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        background: '#e2e8f0',
    },
    name: {
        fontSize: '24px',
        margin: '0 0 8px',
        color: '#1a1a2e',
    },
    meta: {
        fontSize: '14px',
        color: '#555',
        margin: '4px 0',
    },
    degree: {
        fontSize: '14px',
        color: '#2563eb',
        fontWeight: '600',
        margin: '4px 0',
    },
    sectionTitle: {
        fontSize: '18px',
        margin: '20px 0 12px',
        color: '#1a1a2e',
    },
    courseBlock: {
        border: '1px solid #e2e8f0',
        borderRadius: '10px',
        padding: '16px',
        marginBottom: '12px',
    },
    courseHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer',
        fontSize: '15px',
        color: '#1a1a2e',
    },
    courseDesc: {
        fontSize: '13px',
        color: '#777',
        margin: '6px 0 0',
    },
    topicsList: {
        margin: '12px 0 0',
        paddingLeft: '20px',
    },
    topicItem: {
        fontSize: '13px',
        color: '#444',
        marginBottom: '6px',
        lineHeight: 1.5,
    },
    tariffs: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    tariffItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 16px',
        background: '#f8fafc',
        borderRadius: '8px',
        fontSize: '14px',
    },
};

export default LecturerDetail;