import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">Sharanya M</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Sharanya Marupaka</span>
          </h1>
          <p className="hero-subtitle">
            I'm a <span className="role">Full Stack Developer</span> passionate about 
            creating digital experiences that make a difference.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-placeholder">👩‍💻</div>
        </div>
      </div>
    </header>
  )
}

export default Header