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
        <h3>Software Engineer - FullStack(Backend-Heavy) </h3>

        <div>
          <h4>Tech Skills</h4>
            <a href='https://shashankch.github.io/shashankch/'>
            <img
              className='skill-icons'
              src='/static/images/springboot.svg'
              alt='spring boot microservices'
            />
            </a>   
           <a href='https://shashankch.github.io/shashankch/'>
            <img
              className='skill-icons'
              src='/static/images/mysql.svg'
              alt='mysql'
            />
          </a>
          <a href='https://shashankch.github.io/shashankch/'>
            <img
              className='skill-icons'
              src='/static/images/mongodb.svg'
              alt='mongodb'
            />
          </a>
          <a href='https://shashankch.github.io/shashankch/'>
            <img
              className='skill-icons'
              src='/static/images/docker.svg'
              alt='docker'
            />
          </a>
          <a href='https://shashankch.github.io/shashankch/'>
            <img
              className='skill-icons'
              src='/static/images/kubernetes.svg'
              alt='kubernetes'
            />
          </a> 
          <a href='https://shashankch.github.io/shashankch/'>
            <img
              className='skill-icons'
              src='/static/images/linux.svg'
              alt='linux'
            />
          </a>
          <a href='https://shashankch.github.io/shashankch/'>
            <img
              className='skill-icons'
              src='/static/images/javascript.svg'
              alt='Javascript'
            />
          </a>
          <a href='https://shashankch.github.io/shashankch/'>
            <img
              className='skill-icons'
              src='/static/images/typescript.svg'
              alt='typescript'
            />
          </a>
          <a href='https://shashankch.github.io/shashankch/'>
            <img
              className='skill-icons'
              src='/static/images/react.svg'
              alt='React'
            />
          </a>
          <a href='https://shashankch.github.io/shashankch/'>
            <img
              className='skill-icons'
              src='/static/images/reactquery.svg'
              alt='Tanstack/React Query'
            />
          </a>
          <a href='https://shashankch.github.io/shashankch/'>
            <img
              className='skill-icons'
              src='/static/images/mui.svg'
              alt='mui'
            />
          </a>
        </div>
        
        <div>
          <h4>Connect</h4>
          <a href='https://www.linkedin.com/in/shashank0705/'>
            <img
              className='profile-icons'
              src='/static/images/linkedin.svg'
              alt='Linkedin Profile'
            />
          </a>
          <a href='mailto:shashankchandel0705@gmail.com'>
            <img
              className='profile-icons'
              src='/static/images/gmail.svg'
              alt='Gmail'
            />
          </a>
          <a href='https://github.com/shashankch'>
            <img
              className='profile-icons'
              src='/static/images/github.svg'
              alt='Github'
            />
          </a>
          <a href='https://x.com/shchande0705'>
            <img
              className='profile-icons'
              src='/static/images/twitter.svg'
              alt='X Profile'
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
              src='/static/images/profile.jpeg'
              sx={{ width: 56, height: 56 }}
            />
          </StyledBadge>
        </a>
      </div>
    </div>
  );
}

export default Header;
