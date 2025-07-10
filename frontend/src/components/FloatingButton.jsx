function FloatingButton () {
  return (
    <button 
      className='floating-button'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </button>
  )
}

export default FloatingButton