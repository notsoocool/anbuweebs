import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { projects } from '../../constants/constants';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Circle } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Div1>
    <Div2>Home</Div2>
    <Div2> About</Div2>
    <Div2> Help</Div2>
    <Div2>Class</Div2>
          
      <Circle background-color= 'white'></Circle>
    </Div1>
  </div>
);

export default Header;
