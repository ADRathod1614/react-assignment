import React from 'react'

const TW_CLASSES = {
  // Shared Tailwind CSS classes
  flex: 'flex',
  itemsCenter: 'items-center',
  spaceX2: 'space-x-2',
  spaceY4: 'space-y-4',
  spaceY2: 'space-y-2',
  bgZinc100: 'bg-zinc-100',
  bgZinc200: 'bg-zinc-200',
  bgPurple100: 'bg-purple-100',
  bgPurple200: 'bg-purple-200',
  bgPurple500: 'bg-purple-500',
  bgWhite: 'bg-white',
  textZinc500: 'text-zinc-500',
  textPurple600: 'text-purple-600',
  textZinc800: 'text-zinc-800',
  textWhite: 'text-white',
  textSm: 'text-sm',
  textLg: 'text-lg',
  fontBold: 'font-bold',
  shadow: 'shadow',
  roundedLg: 'rounded-lg',
  roundedFull: 'rounded-full',
  w10: 'w-10',
  h10: 'h-10',
  w24: 'w-24',
  h24: 'h-24',
  w40: 'w-40',
  h40: 'h-40',
  w1_2: 'w-1/2',
  flex1: 'flex-1',
  mlAuto: 'ml-auto',
  mb4: 'mb-4',
  h96: 'h-96',
  wFull: 'w-full',
  border: 'border',
  borderPurple500: 'border-purple-500',
  p2: 'p-2',
  p4: 'p-4',
  p10: 'p-10',
  spaceX4: 'space-x-4',
  spaceY4: 'space-y-4',
}

const Header = () => {
  return (
    <header
      className={`${TW_CLASSES.bgWhite} ${TW_CLASSES.shadow} ${TW_CLASSES.p4} ${TW_CLASSES.flex} ${TW_CLASSES.justifyBetween} ${TW_CLASSES.itemsCenter}`}>
      <div className={`${TW_CLASSES.flex} ${TW_CLASSES.itemsCenter} ${TW_CLASSES.spaceX4}`}>
        <img
          src="https://placehold.co/40x40"
          alt="logo"
          className={`${TW_CLASSES.w10} ${TW_CLASSES.h10}`}
        />
        <span className={`${TW_CLASSES.textXl} ${TW_CLASSES.fontBold} ${TW_CLASSES.textPurple600}`}>
          wiZe
        </span>
      </div>
      <div className={`${TW_CLASSES.flex} ${TW_CLASSES.itemsCenter} ${TW_CLASSES.spaceX4}`}>
        <button className={TW_CLASSES.textZinc600}>
          <img src="https://placehold.co/24x24" alt="bell icon" />
        </button>
        <button className={TW_CLASSES.textZinc600}>Account</button>
        <button className={TW_CLASSES.textZinc600}>
          <img src="https://placehold.co/24x24" alt="menu icon" />
        </button>
      </div>
    </header>
  )
}

const Sidebar = () => {
  return (
    <aside
      className={`${TW_CLASSES.w1_4} ${TW_CLASSES.bgPurple100} ${TW_CLASSES.p4} ${TW_CLASSES.spaceY4}`}>
      {/* Sidebar content */}
    </aside>
  )
}

const MainContent = () => {
  return (
    <main className={`${TW_CLASSES.flex1} ${TW_CLASSES.bgWhite} ${TW_CLASSES.p4}`}>
      {/* Main content */}
    </main>
  )
}

const Footer = () => {
  return (
    <footer
      className={`${TW_CLASSES.bgWhite} ${TW_CLASSES.shadow} ${TW_CLASSES.p4} ${TW_CLASSES.flex} ${TW_CLASSES.justifyBetween} ${TW_CLASSES.itemsCenter}`}>
      <button
        className={`${TW_CLASSES.bgPurple500} ${TW_CLASSES.textWhite} ${TW_CLASSES.p2} ${TW_CLASSES.roundedLg}`}>
        Previous
      </button>
      <button
        className={`${TW_CLASSES.bgPurple500} ${TW_CLASSES.textWhite} ${TW_CLASSES.p2} ${TW_CLASSES.roundedLg}`}>
        Next
      </button>
    </footer>
  )
}

const App = () => {
  return (
    <div
      className={`${TW_CLASSES.minHScreen} ${TW_CLASSES.bgZinc100} ${TW_CLASSES.flex} ${TW_CLASSES.flexCol}`}>
      <Header />
      <div className={`${TW_CLASSES.flex} ${TW_CLASSES.flex1}`}>
        <Sidebar />
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App
