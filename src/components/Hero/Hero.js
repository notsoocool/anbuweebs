import React from 'react';
import { motion, Variants } from "framer-motion"
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { animes } from '../../constants/constants';
import { LeftSection,Bigc, Animeage, Animeage2, Name, Des, SizeDes, Rec } from './HeroStyles';

const animedown = {
  initial:{
      y: 300,
      opacity: 0,
  },
  animate: {
      y:0,
      opacity: 1,

      transition: {
          duration: 2,
          ease: "easeInOut",
      }
  }
};
const animeup = {
  initial:{
      y: -300,
      opacity: 0,
  },
  animate: {
      y:0,
      opacity: 1,

      transition: {
          duration: 2,
          ease: "easeInOut",
      }
  }
};



const Hero = (props) => (
  <div>
    <motion.div variants={animedown} initial="initial" animate="animate">
        <Animeage src={animes[0].image}/>
    </motion.div>
  
          <Bigc src={animes[0].rc}/>
  
        <Animeage2 src={animes[0].image}/> 

        <Name>DEMON SLAYER</Name>
       
          <Des>Demon Slayer: Kimetsu no Yaiba is a Japanese anime television series based on the manga series of the<br/> same name written and illustrated by Koyoharu Gotouge. The anime television series adaptation by Ufotable<br/> was announced in Weekly Shōnen Jump on June 4, 2018. The series aired from April 6 to September 28, 2019,<br/> on Tokyo MX, GTV, GYT, and BS11.</Des>
          <Rec src={animes[0].recb} />
  </div>
);

export default Hero;