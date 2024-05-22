
import React from 'react';
import '../CSS/Learn.css';
const BUTTON_CLASS = 'bg-purple-500 text-white px-4 py-2 rounded-full';
const TEXT_CLASS = 'text-zinc-700';
const CARD_CLASS = 'bg-purple-100 p-4 rounded-lg';
const STATUS_BUTTON_CLASS = 'mt-2 px-3 py-1 rounded-full';

const LessonCard = ({ title, status }) => {
    let statusColor = '';
    switch (status) {
        case 'Completed':
            statusColor = 'bg-green-500';
            break;
        case 'Revise':
            statusColor = 'bg-yellow-500';
            break;
        case 'Try Again':
            statusColor = 'bg-red-500';
            break;
        case 'Not started':
            statusColor = 'bg-blue-500';
            break;
        default:
            break;
    }

    return (
        <div className={CARD_CLASS}>
            <h3 className="font-semibold">{title}</h3>
            <button className={`${STATUS_BUTTON_CLASS} ${statusColor} text-white`}>{status}!</button>
        </div>
    );
};

const ReactComponent = () => {
    return (
        <div className="min-h-screen bg-zinc-100 p-4">
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <div className="text-purple-600 font-bold text-lg">wiZe</div>
                <div className="space-x-4">
                    <button className={BUTTON_CLASS}>Account</button>
                    <button className={BUTTON_CLASS}>Menu</button>
                </div>
            </header>
            
            <div className="flex mt-6">
                <div className='space'>
                <div className="w-64 p-4 shadow mr-4">
                    <ul className="space-y-2">
                        <li><a href="/" className={`flex items-center space-x-2 ${TEXT_CLASS}`}><span>🏠</span><span>Home</span></a></li>
                        <li><a href="./App.jsx" className={`flex items-center space-x-2 ${TEXT_CLASS}`}><span>🔍</span><span>Explore</span></a></li>
                        <li><a href="./learn.jsx" className={`flex items-center space-x-2 ${TEXT_CLASS}`}><span>📖</span><span>Learn</span></a></li>
                        <li><a href="/" className={`flex items-center space-x-2 ${TEXT_CLASS}`}><span>🏆</span><span>Achieve</span></a></li>
                        <li><a href="/" className={`flex items-center space-x-2 ${TEXT_CLASS}`}><span>🛠️</span><span>Projects</span></a></li>
                        <li><a href="/" className={`flex items-center space-x-2 ${TEXT_CLASS}`}><span>🚀</span><span>Career</span></a></li>
                        <li><a href="/" className={`flex items-center space-x-2 ${TEXT_CLASS}`}><span>👥</span><span>Mentorship</span></a></li>
                        <li><a href="/" className={`flex items-center space-x-2 ${TEXT_CLASS}`}><span>📝</span><span>Blogs</span></a></li>
                        <li><a href="/" className={`flex items-center space-x-2 ${TEXT_CLASS}`}><span>👫</span><span>Community</span></a></li>
                    </ul>
                </div>
               </div>
                <div className="flex-1">
                    <div className="bg-white p-4 shadow mb-4">
                        <h2 className="text-lg font-semibold text-zinc-800 mb-4">Lessons</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <LessonCard title="Language of ML: Python" status="Completed" />
                            <LessonCard title="Supervised Learning: Regression" status="Revise" />
                            <LessonCard title="Assessment: Python" status="Try Again" />
                            <LessonCard title="Hands on: ML" status="Not started" />
                            <LessonCard title="ML: Interact with data" status="Not started" />
                        </div>
                    </div>

                    <div className="bg-white p-4 shadow">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-zinc-800">Capstone Project</h2>
                            <button className="text-purple-600">View Guidelines</button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img className="w-20 h-20 rounded-full" src="https://placehold.co/100x100" alt="Capstone Project" />
                            <div>
                                <h3 className="text-xl font-semibold">Avengers & Silicon Valley</h3>
                                <p className="text-zinc-600">Avengers: Harness Python to conquer challenges in this Silicon Valley-inspired project. Learn Python and machine learning as you emerge as a tech hero!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactComponent;
