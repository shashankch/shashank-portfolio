import { useEffect, useState } from 'react'
import Repo from './Repo';
import {
  useQuery,
} from '@tanstack/react-query'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
function Content() {
  
  const { isLoading, error, data } = useQuery({
    queryKey: ['shashankGitRepoData'],
    queryFn: () =>
      fetch('https://api.github.com/users/shashankch/repos').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{'An error has occurred: ' + error}</div>
  return (
    <div>
    <div className="projHeading"><h3>Checkout my past personal projects...</h3></div>

    <div className="content">
     {data.map((proj: any)=><Repo key={proj.id} project={proj}/>)} 
    </div>
    </div>
  )
}

export default Content;