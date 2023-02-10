import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
type cardProps = { project: any };

function Repo(props: cardProps) {
  const { project } = props;
  console.log(project);
  return (
    <div className='card'>
      <Card sx={{ width: 300, height: 300 }}>
        <CardMedia
          component='img'
          alt='project peek'
          height='80'
          image='/static/images/allpurpose.jpg'
        />
        <CardContent>
          <h3>{project.name}</h3>
          <p>{project.description}</p>

          {/* create new components */}
          {/* <strong>{project.languages_url}</strong>
        <strong>{project.tags_url}</strong> */}
        </CardContent>
        <CardActions>
          <a href={project.html_url}>Github Link</a>
          <a href={project.homepage}>Deployment</a>
        </CardActions>
      </Card>
    </div>
  );
}

export default Repo;
