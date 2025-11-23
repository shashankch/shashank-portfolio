import { useEffect, useState } from 'react';
import Repo from './Repo';
import { useQuery } from '@tanstack/react-query';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Projects from '../assets/data.json';
import CircularProgress from '@mui/material/CircularProgress';
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
function Content() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const { isLoading,isFetching, error, data } = useQuery({
    queryKey: ['shashankGitRepoData'],
    queryFn: () =>
      fetch('https://api.github.com/users/shashankch/repos').then((res) =>
        res.json()
      ),
  });

  if (isLoading || isFetching)
    return (
      <div>
      <div>
        <CircularProgress color='secondary' />
      </div>
    Loading...
      </div>

    );

  if (error) return <div>{'Oh no! Something went wrong. '} 
  <a
  href='https://shashankch.github.io/shashankch/'
  style={{ color: 'blue' }}
>
  Go To Old Site
</a></div>;
  return (
    <>
      <div className='projHeading'>
        <h3>Checkout my past personal projects...</h3>
      </div>
      <div>
        <Accordion expanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Selected Projects</Typography>
          </AccordionSummary>
          <AccordionDetails className='content'>
            <Box sx={{ width: '100%' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor='inherit'
                indicatorColor='secondary'
                variant='scrollable'
                scrollButtons='auto'
                aria-label='projects tabs'
              >
                <Tab
                  label='MERN-Apps'
                  {...a11yProps(0)}
                  className='accordion-details'
                />
                <Tab label='Data-Structures-&-Algorithms' {...a11yProps(7)} />
                <Tab label='React/Redux' {...a11yProps(1)} />
                <Tab label='VanillaJS-&-Node/Express' {...a11yProps(2)} />
                <Tab label='Pure-HTML5/CSS3 ' {...a11yProps(3)} />
                <Tab
                  label='Deep-Learning-Python/Django'
                  {...a11yProps(5)}
                />
                <Tab label='Android-App-Development' {...a11yProps(6)} />

              </Tabs>
              <TabPanel value={value} index={0}>
                <div className='content'>
                  {Projects.map(
                    (proj: any) =>
                      proj.type === 'MERN' && (
                        <Repo key={proj.id} project={proj} />
                      )
                  )}
                </div>
              </TabPanel>
              <TabPanel value={value} index={6}>
                <div className='content'>
                  {Projects.map(
                    (proj: any) =>
                      proj.type === 'DSA' && (
                        <Repo key={proj.id} project={proj} />
                      )
                  )}
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className='content'>
                  {Projects.map(
                    (proj: any) =>
                      proj.type === 'REACT-REDUX' && (
                        <Repo key={proj.id} project={proj} />
                      )
                  )}
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className='content'>
                  {Projects.map(
                    (proj: any) =>
                      proj.type === 'NODE' && (
                        <Repo key={proj.id} project={proj} />
                      )
                  )}
                </div>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <div className='content'>
                  {Projects.map(
                    (proj: any) =>
                      proj.type === 'HTML' && (
                        <Repo key={proj.id} project={proj} />
                      )
                  )}
                </div>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <div className='content'>
                  {Projects.map(
                    (proj: any) =>
                      proj.type === 'ML' && (
                        <Repo key={proj.id} project={proj} />
                      )
                  )}
                </div>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <div className='content'>
                  {Projects.map(
                    (proj: any) =>
                      proj.type === 'Android' && (
                        <Repo key={proj.id} project={proj} />
                      )
                  )}
                </div>
              </TabPanel>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'
          >
            <Typography>My Github Repos</Typography>
          </AccordionSummary>
          <AccordionDetails className='content'>
            {data.map((proj: any) => (
              <Repo key={proj.id} project={proj} />
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default Content;
