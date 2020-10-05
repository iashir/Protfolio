import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import reactIcon from '@iconify/icons-logos/react';
import htmlIcon from '@iconify/icons-logos/html-5';
import cssIcon from '@iconify/icons-logos/css-3';
import handlebarsIcon from '@iconify/icons-logos/handlebars';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import expressIcon from '@iconify/icons-logos/express';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import materialuiIcon from '@iconify/icons-logos/material-ui';
import materializecssIcon from '@iconify/icons-logos/materializecss';
import reduxIcon from '@iconify/icons-logos/redux';
import gitIcon from '@iconify/icons-logos/git-icon';
import githubIcon from '@iconify/icons-logos/github';
import jqueryIcon from '@iconify/icons-logos/jquery';
import herokuIcon from '@iconify/icons-logos/heroku-icon';
import awsIcon from '@iconify/icons-logos/aws';
import netlifyIcon from '@iconify/icons-logos/netlify';
import cplusIcon from '@iconify/icons-logos/c-plusplus';
import javaIcon from '@iconify/icons-logos/java';
import cSharpIcon from '@iconify/icons-logos/c-sharp';
import angularIcon from '@iconify/icons-logos/angular';
import vueIcon from '@iconify/icons-logos/vue';
import graphqlIcon from '@iconify/icons-logos/graphql';
import Title from '../Title/Title';
import IconsMap from './Icons';

const Skills = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [frontEnd] = useState([
    { icon: reduxIcon, name: 'Redux' },
    { icon: reactIcon, name: 'React' },
    { icon: htmlIcon, name: 'HTML' },
    { icon: cssIcon, name: 'CSS' },
    { icon: materializecssIcon, name: 'MaterializeCSS' },
    { icon: materialuiIcon, name: 'Material-UI' },
    { icon: handlebarsIcon, name: 'Handlebars' },
    { icon: bootstrapIcon, name: 'Bootstrap' },
    { icon: jqueryIcon, name: 'JQuery' },
  ]);
  const [backEnd] = useState([
    { icon: mongodbIcon, name: 'MongoDB' },
    { icon: postgresqlIcon, name: 'PostgreSQL' },
    { icon: nodejsIcon, name: 'Node.js' },
    { icon: expressIcon, name: 'Express.js' },
  ]);
  const [otherSkills] = useState([
    { icon: herokuIcon, name: 'Heroku' },
    { icon: awsIcon, name: 'AWS' },
    { icon: netlifyIcon, name: 'Netlify' },
    { icon: cplusIcon, name: 'C++' },
    { icon: gitIcon, name: 'Git' },
    { icon: githubIcon, name: 'GitHub' },
  ]);
  const [futureSkills] = useState([
    { icon: javaIcon, name: 'Java' },
    { icon: cSharpIcon, name: 'C#' },
    { icon: angularIcon, name: 'Angular' },
    { icon: vueIcon, name: 'Vue' },
    { icon: graphqlIcon, name: 'GraplQL' },
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
          <IconsMap icons={backEnd} isDesktop={isDesktop} title="Back-End" />
          <IconsMap icons={otherSkills} isDesktop={isDesktop} title="Other" />
          <IconsMap icons={futureSkills} isDesktop={isDesktop} title="I'd love to learn" />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
