import { useState } from 'react'
import './Skills.css'

function Skills() {
  const [activeTab, setActiveTab] = useState('All')
  
  const skills = [
    { name: 'JavaScript', icon: '🟨', category: 'Frontend' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'HTML/CSS', icon: '🎨', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', category: 'Backend' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Backend' },
    { name: 'Git', icon: '📝', category: 'DevOps' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS', icon: '☁️', category: 'DevOps' },
    { name: 'Slack', icon: '💬', category: 'Collaboration' },
    { name: 'Figma', icon: '🎯', category: 'Collaboration' }
  ]
  
  const tabs = ['All', 'Frontend', 'Backend', 'DevOps', 'Collaboration']
  
  const filteredSkills = activeTab === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        
        <div className="skill-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills