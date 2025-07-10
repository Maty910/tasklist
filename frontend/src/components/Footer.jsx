function Footer () {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div>
          <h4>Sobre mí</h4>
          <p>Matías Chacón</p>
          <p>Desarrollador Web Full Stack</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <h4>Contacto</h4>
          <a 
            href="https://github.com/Maty910" target="_blank" 
            rel="noreferrer"
          >
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="white" 
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          >
            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.45 7.84 10.98.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.19.7-3.87-1.39-3.87-1.39-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.3 1.17-3.12-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.19a10.93 10.93 0 0 1 2.87-.39c.98 0 1.96.13 2.87.39 2.18-1.5 3.14-1.19 3.14-1.19.62 1.58.23 2.75.11 3.04.73.82 1.17 1.86 1.17 3.12 0 4.42-2.69 5.39-5.25 5.67.42.36.77 1.09.77 2.2 0 1.59-.01 2.88-.01 3.27 0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z"/>
          </svg>
          GitHub
          </a>
          <a 

            href="https://www.linkedin.com/in/tu-perfil" 
            target="_blank" 
            rel="noreferrer"
          >
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="white" 
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            >
              <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5s-2-.9-2-2 .9-2 2-2 2 .9 2 2ZM.5 8.25h5V24h-5V8.25ZM9.5 8.25h4.7v2.13h.07c.65-1.24 2.23-2.54 4.6-2.54 4.92 0 5.83 3.23 5.83 7.43V24h-5v-7.5c0-1.78-.03-4.07-2.47-4.07-2.47 0-2.85 1.93-2.85 3.93V24h-5V8.25Z"/>
            </svg>
              LinkedIn
          </a>
          <a
            href="mailto:matychacong@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'white'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 512 512"
              fill="white"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            >
              <path d="M502.3 190.8l-58.1-43.5v-89.3c0-9.5-7.7-17.2-17.2-17.2H372c-9.5 0-17.2 7.7-17.2 17.2v44.2l-98.8 74.1L157.2 102.2V58c0-9.5-7.7-17.2-17.2-17.2H85c-9.5 0-17.2 7.7-17.2 17.2v89.3L9.7 190.8c-5.3 4-8.4 10.2-8.4 16.8v227.5c0 12 9.7 21.7 21.7 21.7h476c12 0 21.7-9.7 21.7-21.7V207.6c.1-6.6-3.1-12.8-8.4-16.8zM439.6 151l39.3 29.4-39.3 29.4V151zm-83.4-60.4h33.8v49.5l-33.8 25.4V90.6zM88.5 90.6h33.8v49.5l-33.8 25.4V90.6zm-49.6 90l39.3-29.4v58.9L38.9 180.6zM473 426.7H39V229l217 162.7c3 2.2 6.5 3.3 10 3.3s7-1.1 10-3.3L473 229v197.7z"/>
            </svg>
            Gmail
          </a>
        </div>
        <div>
          <h4>Proyecto</h4>
          <p>Tasks List v1.0.0</p>
          <p>Hecho con React y Node.js</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Matías Chacón. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer