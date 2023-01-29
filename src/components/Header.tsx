import { useEffect, useState } from 'react'


function Header() {
  
  return (
    <div className="header">
     <h1>Shashank Chandel</h1> 
     <h2>Software Engineer - Full Stack</h2>
    <div>
    <h3>Skills</h3>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/html5.svg" alt="html5" /></a>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/css3.svg" alt="css3" /></a>

    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/javascript.svg" alt="Javascript" /></a>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/typescript.svg" alt="typescript" /></a>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/react.svg" alt="React" /></a>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/reactquery.svg" alt="Tanstack/React Query" /></a>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/mui.svg" alt="mui" /></a>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/springboot.svg" alt="spring boot microservices" /></a>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/mysql.svg" alt="mysql" /></a>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/mongodb.svg" alt="mongodb" /></a>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/linux.svg" alt="linux" /></a>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/docker.svg" alt="docker" /></a>
    <a href="https://github.com/shashankch"><img className='skill-icons' src="src/assets/kubernetes.svg" alt="kubernetes" /></a>
</div>
<div>
    <h3>Connect</h3>
    <a href="https://www.linkedin.com/in/shashank0705/"><img className='profile-icons' src="src/assets/linkedin.svg" alt="Linkedin Profile" /></a>
    <a href="https://twitter.com/shchande0705"><img className='profile-icons' src="src/assets/twitter.svg" alt="Twitter Profile" /></a>
    <a href="mailto:shashakchandel@gmail.com"><img className='profile-icons' src="src/assets/gmail.svg" alt="Gmail" /></a>
    <a href="https://github.com/shashankch"><img className='profile-icons' src="src/assets/github.svg" alt="Github" /></a>
    </div>
    </div>

  )
}

export default Header;