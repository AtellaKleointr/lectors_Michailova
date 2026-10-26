import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Partners from './components/Partners.jsx';
import Lecturers from './components/Lecturers.jsx';
import LecturerPage from './components/LecturerPage.jsx'; // Импортируем новую страницу
import './App.css';

function App() {
    const [page, setPage] = useState('main');
    // 👇 Храним выбранного лектора
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    // Функция для перехода на страницу лектора
    const handleOpenLecturer = (teacher) => {
        setSelectedTeacher(teacher);
        setPage('lecturer-detail');
    };

    const renderPage = () => {
        switch (page) {
            case 'main':
                return (
                    <div className="page-stack">
                        <Hero onNavigate={setPage} />
                        <About />
                        <Partners />
                        {/* Передаем функцию открытия лектора */}
                        <Lecturers onOpenLecturer={handleOpenLecturer} />
                    </div>
                );
            case 'about':
                return <About />;
            case 'partners':
                return <Partners />;
            case 'lecturers':
                return <Lecturers onOpenLecturer={handleOpenLecturer} />;
            // 👇 Страница конкретного лектора
            case 'lecturer-detail':
                return (
                    <LecturerPage
                        teacher={selectedTeacher}
                        onBack={() => setPage('lecturers')}
                    />
                );
            default:
                return <Hero onNavigate={setPage} />;
        }
    };

    return (
        <div className="app">
            <Header currentPage={page} onNavigate={setPage} />
            <main className="app-main">{renderPage()}</main>
            <Footer />
        </div>
    );
}

export default App;