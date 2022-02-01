import React from 'react';
import { motion, Variants } from "framer-motion"
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { animes } from '../../constants/constants';
import { LeftSection,Bigc, Animeage, Animeage2 } from './HeroStyles';

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

        
       
  </div>
);

export default Hero;