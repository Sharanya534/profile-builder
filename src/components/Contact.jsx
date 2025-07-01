import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>I'm always open to discussing new opportunities and interesting projects.</p>
          <div className="contact-links">
            <a href="mailto:sharanya.2527@gmail.com" className="contact-link">
              📧 sharanya.2527@gmail.com
            </a>
            <a href="www.linkedin.com/in/sharanya-maru" className="contact-link">
              💼 LinkedIn
            </a>
            <a href="https://github.com/Sharanya534" className="contact-link">
              🐙 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact