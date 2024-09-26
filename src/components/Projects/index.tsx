import { useLayoutEffect } from 'react';
import * as S from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import project_one from '../../assets/images/project_one.png';
import project_two from '../../assets/images/project_two.png';
import project_tree from '../../assets/images/project_tree.png';
import project_four from '../../assets/images/project_four.png';
import project_five from '../../assets/images/project_five.png';
import project_six from '../../assets/images/project_six.png';
import project_seven from '../../assets/images/project_seven.png';
import project_eight from '../../assets/images/project_eight.png';
import project_nine from '../../assets/images/project_nine.png';
import project_ten from '../../assets/images/project_ten.png';

const Projects = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      gsap.to('.projectsTop', {
        x: -180,
        scrollTrigger: {
          trigger: '.projectsTop',
          start: 'top 400px',
          end: '+=1000',
          scrub: 4,
        },
      });

      gsap.to('.projectsBottom', {
        x: 180,
        scrollTrigger: {
          trigger: '.projectsBottom',
          start: 'top 600px',
          end: '+=1000',
          scrub: 4,
        },
      });
    });

    return () => {
      gsap.killTweensOf('.projectsTop');
      gsap.killTweensOf('.projectsBottom');
    };
  }, []);

  return (
    <div id='projects'>
      <S.ProjectsWrapper className='projectsTop'>
        <div><a href="https://clone-disneyplus-flax.vercel.app/"><img src={project_one} alt="Projeto Clone Disney+" /></a></div>
        <div><a href="https://efood-delta-ruby.vercel.app/"><img src={project_two} alt="Projeto Efood" /></a></div>
        <div><a href="https://eplay-bice.vercel.app/"><img src={project_tree} alt="Projeto Eplay" /></a></div>
        <div><a href="https://minhas-tarefas-jet.vercel.app/"><img src={project_four} alt="Projeto Tarefas" /></a></div>
        <div><a href="https://calculadora-imc-one-beryl.vercel.app/"><img src={project_five} alt="Projeto Calculadora de IMC" /></a></div>
      </S.ProjectsWrapper>
      <S.ProjectsWrapper className='projectsBottom'>
        <div><a href="https://calculadora-vuejs-livid.vercel.app/"><img src={project_six} alt="Projeto Calculadora com Vue" /></a></div>
        <div><a href="https://costs-gray.vercel.app/"><img src={project_seven} alt="Projeto Costs" /></a></div>
        <div><a href="https://tech-talks-kappa.vercel.app/"><img src={project_eight} alt="Projeto Tech Talks" /></a></div>
        <div><a href="https://lista-de-contatos-virid.vercel.app/"><img src={project_nine} alt="Projeto Lista de Contatos" /></a></div>
        <div><a href="https://to-do-vue-beryl.vercel.app/"><img src={project_ten} alt="Projeto To-do List" /></a></div>
      </S.ProjectsWrapper>
    </div>
  );
}

export default Projects;
