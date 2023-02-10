import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

function Header() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  return (
    <div className='header-container'>
      <div className='header'>
        <h1>Shashank Chandel</h1>
        <h2>Software Engineer - Full Stack</h2>

        <div>
          <h3>Skills</h3>
          <a href='https://github.com/shashankch'>
            <img
              className='skill-icons'
              src='src/assets/html5.svg'
              alt='html5'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img className='skill-icons' src='src/assets/css3.svg' alt='css3' />
          </a>

          <a href='https://github.com/shashankch'>
            <img
              className='skill-icons'
              src='src/assets/javascript.svg'
              alt='Javascript'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img
              className='skill-icons'
              src='src/assets/typescript.svg'
              alt='typescript'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img
              className='skill-icons'
              src='src/assets/react.svg'
              alt='React'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img
              className='skill-icons'
              src='src/assets/reactquery.svg'
              alt='Tanstack/React Query'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img className='skill-icons' src='src/assets/mui.svg' alt='mui' />
          </a>
          <a href='https://github.com/shashankch'>
            <img
              className='skill-icons'
              src='src/assets/springboot.svg'
              alt='spring boot microservices'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img
              className='skill-icons'
              src='src/assets/mysql.svg'
              alt='mysql'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img
              className='skill-icons'
              src='src/assets/mongodb.svg'
              alt='mongodb'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img
              className='skill-icons'
              src='src/assets/linux.svg'
              alt='linux'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img
              className='skill-icons'
              src='src/assets/docker.svg'
              alt='docker'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img
              className='skill-icons'
              src='src/assets/kubernetes.svg'
              alt='kubernetes'
            />
          </a>
        </div>
        <div>
          <h3>Connect</h3>
          <a href='https://www.linkedin.com/in/shashank0705/'>
            <img
              className='profile-icons'
              src='src/assets/linkedin.svg'
              alt='Linkedin Profile'
            />
          </a>
          <a href='https://twitter.com/shchande0705'>
            <img
              className='profile-icons'
              src='src/assets/twitter.svg'
              alt='Twitter Profile'
            />
          </a>
          <a href='mailto:shashakchandel@gmail.com'>
            <img
              className='profile-icons'
              src='src/assets/gmail.svg'
              alt='Gmail'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img
              className='profile-icons'
              src='src/assets/github.svg'
              alt='Github'
            />
          </a>
        </div>
      </div>
      <div>
      <a href='https://www.linkedin.com/in/shashank0705/'> 
        <StyledBadge
          overlap='circular'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant='dot'
        >
          <Avatar
            alt='Shashank Chandel'
            src='src/assets/profile.jpeg'
            sx={{ width: 56, height: 56 }}
          />
           
          
        </StyledBadge>
        </a>
      </div>
    </div>
  );
}

export default Header;
