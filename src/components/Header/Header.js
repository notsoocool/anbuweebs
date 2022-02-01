import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { animes } from '../../constants/constants';
import { Container, Div1, Div2,Rec, Div3, NavLink, SocialIcons, Circle, Circle2 } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Rec/>
   {/*  <Circle2 src={animes[0].rc}/> */}
    <Div1>
    <Circle2 src={animes[0].rc}/>
    <Div2>HOME</Div2>
    <Div2> ABOUT</Div2>
    <Div2> HELP</Div2>
    <Div2>CLASS</Div2>
        <Circle src={animes[0].rc}/>
    </Div1>
  </div>
);

export default Header;
