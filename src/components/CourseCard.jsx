import React from 'react';

function CourseCard({ title, description, topics }) {
    return (
        <div style={styles.card}>
            <h4 style={styles.title}>{title}</h4>
            <p style={styles.desc}>{description}</p>
            <ul style={styles.list}>
                {topics.slice(0, 3).map((t, i) => (
                    <li key={i} style={styles.item}>{t}</li>
                ))}
            </ul>
            <span style={styles.more}>+{topics.length - 3} тем</span>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #e2e8f0',
        borderRadius: '10px',
        padding: '16px',
        background: '#fff',
        marginBottom: '12px',
    },
    title: {
        fontSize: '16px',
        margin: '0 0 6px',
        color: '#1a1a2e',
    },
    desc: {
        fontSize: '13px',
        color: '#777',
        margin: '0 0 10px',
    },
    list: {
        margin: 0,
        paddingLeft: '18px',
    },
    item: {
        fontSize: '12px',
        color: '#444',
        marginBottom: '4px',
    },
    more: {
        fontSize: '12px',
        color: '#2563eb',
        fontWeight: '600',
        display: 'block',
        marginTop: '8px',
    },
};

export default CourseCard;