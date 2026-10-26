import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© Учебная платформа. Все права защищены.</p>
            <p style={{ marginTop: 6 }}>
                Контакты: info@edu-platform.ru | +7 (999) 123-45-67
            </p>
        </footer>
    );
}

const styles = {
    footer: {
        width: '1170px',
        margin: '0 auto',
        padding: '30px 0',
        textAlign: 'center',
        fontSize: '14px',
        color: '#888',
        borderTop: '1px solid #e2e8f0',
        marginTop: '40px',
    },
};

export default Footer;