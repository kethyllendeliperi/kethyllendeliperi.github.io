import { useLayoutEffect } from 'react'
import * as S from './styles'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutMe = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.infos', { opacity: 0, scale: 0.8 })

    gsap.to('.infos', {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.infos',
        once: true
      },
    })

    return () => {
      gsap.killTweensOf('.infos')
    }
  }, [])

  return (
    <S.Container>
      <div className='infos'>
        <S.Name className='gradient'>Kethyllen Deliperi</S.Name>
        <S.JobTitle>Desenvolvedora Front-End</S.JobTitle>
      </div>
    </S.Container>
  )
}

export default AboutMe
