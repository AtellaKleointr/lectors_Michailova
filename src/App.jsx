import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Partners from './components/Partners.jsx';
import Lecturers from './components/Lecturers.jsx';
import LecturerPage from './components/LecturerPage.jsx';
import './App.css';

function App() {
    const [page, setPage] = useState('main');
   
    const [selectedTeacher, setSelectedTeacher] = useState(null);

   
    const handleOpenLecturer = (teacher) => {
        setSelectedTeacher(teacher);
    };

    const renderPage = () => {
        switch (page) {
            case 'main':
                return (
                    <div className="page-stack">
                        <Hero onNavigate={setPage} />
                        <About />
                        <Partners />
                        <Lecturers onOpenLecturer={handleOpenLecturer} />
    
                        {selectedTeacher && (
                            <LecturerPage
                                teacher={selectedTeacher}
                                onClose={() => setSelectedTeacher(null)}
                            />
                        )}
                    </div>
                );
            case 'about':
                return <About />;
            case 'partners':
                return <Partners />;
            case 'lecturers':
                return (
                    <div className="page-stack">
                        <Lecturers onOpenLecturer={handleOpenLecturer} />
                        {/* Модалка рендерится поверх списка лекторов */}
                        {selectedTeacher && (
                            <LecturerPage
                                teacher={selectedTeacher}
                                onClose={() => setSelectedTeacher(null)}
                            />
                        )}
                    </div>
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