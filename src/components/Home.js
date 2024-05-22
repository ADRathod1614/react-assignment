import React from 'react';
import '../CSS/home.css';
const BUTTON_CLASS = 'bg-purple-500 text-white px-4 py-2 rounded-full';
const SIDEBAR_CLASS = 'bg-purple-500 text-white px-4 py-2';
const APP = () => {
    return (
        <div>
         <header className="bg-white shadow p-4 flex justify-between items-center">
                <div className="text-purple-600 font-bold text-lg">wiZe</div>
                <div className="space-x-4">
                    <button className={BUTTON_CLASS}>Account</button>
                    <button className={BUTTON_CLASS}>Menu</button>
                </div>
            </header>
        <div className="container">
            
            <div className={SIDEBAR_CLASS}>
                
                <ul className="menu">
                    <li><a href="/"><span>🏠</span><span>Home</span></a></li>
                    <li><a href="/"><span>🔍</span><span>Explore</span></a></li>
                    <li><a href="/"><span>📚</span><span>Learn</span></a></li>
                    <li><a href="/"><span>🏆</span><span>Achieve</span></a></li>
                    <li><a href="/"><span>🛠️</span><span>Practice</span></a></li>
                    <li><a href="/"><span>📁</span><span>Projects</span></a></li>
                    <li><a href="/"><span>🚀</span><span>Career</span></a></li>
                    <li><a href="/"><span>👥</span><span>Mentorship</span></a></li>
                    <li><a href="/"><span>📝</span><span>Blogs</span></a></li>
                    <li><a href="/"><span>🌐</span><span>Community</span></a></li>
                </ul>
                <div className="social-links">
                    <a href="/"><img src="https://placehold.co/40" alt="Connect with us" /></a>
                    <a href="/"><img src="https://placehold.co/40" alt="Connect with us" /></a>
                    <a href="/"><img src="https://placehold.co/40" alt="Connect with us" /></a>
                    <a href="/"><img src="https://placehold.co/40" alt="Connect with us" /></a>
                </div>
            </div>

            <div className="main-content">
                <div className="header">
                    <h1>Introduction to Machine Learning</h1>
                 
                </div>

                <div className="content-grid">
                    <div className="card large-card">
                        <div className="card-header">
                            <img src="https://placehold.co/100" alt="" className="course-image" />
                            <div>
                                <h2>Module: Data Science</h2>
                                <p>Chapter: Supervised Learning & Applications</p>
                            </div>
                        </div>
                        <div className="card-details">
                            <span className="badge">3 Weeks</span>
                            <span className="badge ml-2">6 Modules</span>
                        </div>
                        <div className="progress-bar bg-gray">
                            <div className="progress bg-purple" style={{ width: '66%' }}></div>
                        </div>
                        <div className="actions">
                            <button className="button">View Insights</button>
                            <button className="button">Resume Learning</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h3>Tech101: Starting in Tech</h3>
                            <p>7 Lessons • 7 Credits</p>
                            <div className="progress-bar bg-gray mt-2">
                                <div className="progress bg-purple" style={{ width: '66%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h3>Tech101: Starting in Tech</h3>
                            <p>7 Lessons • 7 Credits</p>
                            <div className="progress-bar bg-gray mt-2">
                                <div className="progress bg-purple" style={{ width: '66%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default APP;
