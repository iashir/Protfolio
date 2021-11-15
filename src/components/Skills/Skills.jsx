import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import reactIcon from '@iconify/icons-logos/react';
import htmlIcon from '@iconify/icons-logos/html-5';
import cssIcon from '@iconify/icons-logos/css-3';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import expressIcon from '@iconify/icons-logos/express';
import reduxIcon from '@iconify/icons-logos/redux';
import gitIcon from '@iconify/icons-logos/git-icon';
import githubIcon from '@iconify/icons-logos/github';
import mySql from '@iconify/icons-logos/mysql';
import herokuIcon from '@iconify/icons-logos/heroku-icon';
import netlifyIcon from '@iconify/icons-logos/netlify';
import javaIcon from '@iconify/icons-logos/java';
import angularIcon from '@iconify/icons-logos/angular';
import vueIcon from '@iconify/icons-logos/vue';
import javaScript from '@iconify/icons-logos/javascript';
import typeScript from '@iconify/icons-logos/typescript-icon';
import sass from '@iconify/icons-logos/sass';

import Title from '../Title/Title';
import IconsMap from './Icons';

const Skills = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [frontEnd] = useState([
    { icon: htmlIcon, name: 'HTML' },
    { icon: cssIcon, name: 'CSS' },
    { icon: sass, name: 'SASS' },
    { icon: reduxIcon, name: 'Redux' },
    { icon: reactIcon, name: 'React' },
    { icon: javaScript, name: 'JavaScript' },
    { icon: typeScript, name: 'TypeScript' },
  ]);
  const [backEnd] = useState([
    { icon: nodejsIcon, name: 'Node.js' },
    { icon: expressIcon, name: 'Express.js' },
    { icon: mongodbIcon, name: 'MongoDB' },
    { icon: postgresqlIcon, name: 'PostgreSQL' },
    { icon: mySql, name: 'MySQL' },
  ]);
  const [otherSkills] = useState([
    { icon: herokuIcon, name: 'Heroku' },
    { icon: netlifyIcon, name: 'Netlify' },
    { icon: gitIcon, name: 'Git' },
    { icon: githubIcon, name: 'GitHub' },
  ]);
  const [futureSkills] = useState([
    { icon: javaIcon, name: 'Java' },
    { icon: angularIcon, name: 'Angular' },
    { icon: vueIcon, name: 'Vue' },
  ]);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Skills" />
          <IconsMap icons={frontEnd} isDesktop={isDesktop} title="Front-End" />
          <IconsMap icons={backEnd} isDesktop={isDesktop} title="Back-End and Databases" />
          <IconsMap icons={otherSkills} isDesktop={isDesktop} title="Other" />
          <IconsMap icons={futureSkills} isDesktop={isDesktop} title="I'd love to learn" />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
