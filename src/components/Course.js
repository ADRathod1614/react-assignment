import React from 'react'
import '../CSS/style.css';
// Shared Tailwind CSS classes
const buttonClasses = 'text-purple-600'
const iconClasses = 'h-6 w-6'
const cardClasses = 'bg-white p-4 rounded-lg shadow-md'
const progressBarClasses = 'bg-purple-200 h-2 rounded-full'
const progressBarFillClasses = 'bg-purple-500 h-2 rounded-full'

const CourseCard = () => {
  return (
    <div className={cardClasses}>
      <h3 className="text-sm font-bold">Chapter 1</h3>
      <p className="text-lg font-bold">Getting started with ML</p>
      <div className={progressBarClasses}>
        <div className={progressBarFillClasses + ' w-1/2'}></div>
      </div>
    </div>
  )
}

const Sidebar = () => {
  return (
    <aside className="w-64 bg-purple-100 p-4 space-y-4">
      <div className={cardClasses}>
        <div className="bg-purple-500 text-white p-4 rounded-lg">
          {/* Module 3 */}
          <h2 className="text-lg font-bold">Tech101: Starting in Tech</h2>
          {/* Course details */}
          <div className="flex items-center justify-between mt-4">
            {/* Grade and Credits */}
            <div className="flex items-center space-x-2">
              <div>
                <p className="text-sm">
                  Grade <span className="font-bold">47%</span>
                </p>
                <p className="text-sm">
                  Credits <span className="font-bold">4/12</span>
                </p>
              </div>
            </div>
            <img src="https://placehold.co/32x32" alt="Calendar Icon" className="h-8 w-8" />
          </div>
          {/* Buttons */}
          <div className="flex space-x-2 mt-4">
            <button className="flex-1 bg-white text-purple-500 p-2 rounded-lg">Insights</button>
            <button className="flex-1 bg-white text-purple-500 p-2 rounded-lg">Roadmap</button>
          </div>
        </div>
        {/* Course chapters */}
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </aside>
  )
}

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center space-x-2">
        <img src="https://placehold.co/40x40" alt="Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-purple-600">wiZe</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className={buttonClasses}>
          <img src="https://placehold.co/24x24" alt="Bell Icon" className={iconClasses} />
        </button>
        <button className={buttonClasses}>
          <img src="https://placehold.co/24x24" alt="Account Icon" className={iconClasses} />
        </button>
        <button className={buttonClasses}>
          <img src="https://placehold.co/24x24" alt="Menu Icon" className={iconClasses} />
        </button>
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="flex justify-between bg-white p-4 shadow-md">
      <button className="bg-purple-500 text-white p-2 rounded-lg">Previous</button>
      <button className="bg-purple-500 text-white p-2 rounded-lg">Next</button>
    </footer>
  )
}

const CoursePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-zinc-100 p-4">
          <div className="flex items-center space-x-2 mb-4">
            <button className={buttonClasses}>
              <img src="https://placehold.co/24x24" alt="Menu Icon" className={iconClasses} />
            </button>
            <span className="text-lg font-bold">Course</span>
            <span className="text-lg font-bold">Tech101</span>
          </div>
          <div className={cardClasses}></div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default CoursePage