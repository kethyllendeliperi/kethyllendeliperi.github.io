import { useLayoutEffect } from 'react'
import * as S from './styles'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Skills = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.skill', { opacity: 0, y: 60 })

    gsap.to('.skill', {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 100',
        end: 'bottom bottom',
        scrub: 10
      },
    })

    return () => {
      gsap.killTweensOf('.skill')
    };
  }, []);

  return (
    <S.SkillsWrapper className='timeLine' id='skills'>
        <h3 className='gradient'>Skills</h3>
      <S.Card>
        <S.Container>
          <div className="skills">
            <p className='skill'>HTML</p>
            <p className='skill'>CSS</p>
            <p className='skill'>JavaScript</p>
            <p className='skill'>React</p>
            <p className='skill'>TypeScript</p>
            <p className='skill'>Vue.js</p>
            <p className='skill'>Styled-components</p>
            <p className='skill'>SASS</p>
            <p className='skill'>SCSS</p>
            <p className='skill'>Bootstrap</p>
            <p className='skill'>jQuery</p>
            <p className='skill'>Grunt.js</p>
            <p className='skill'>Gulp.js</p>
            <p className='skill'>Vite</p>
            <p className='skill'>Figma</p>
            <p className='skill'>Git</p>
            <p className='skill'>GitHub</p>
            <p className='skill'>APIs</p>
            <p className='skill'>Cypress</p>
            <p className='skill'>React Testing Library</p>
          </div>
        </S.Container>
      </S.Card>
    </S.SkillsWrapper>
  )
}

export default Skills
