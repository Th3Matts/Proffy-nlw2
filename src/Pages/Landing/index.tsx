import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landinImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';	
import { format } from 'path';

function Landing(){
  return (
    <div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={logoImg} alt="Proffy" />
					<h2>Sua plataforma de estudos online.</h2>
				</div>

				<img 
					src={landinImg}
					alt="Plataforma de Estudos"
					className="hero-image" 
				/>

				<div className="buttons-container">
					<Link to="study" className="study">
						<img src={studyIcon} alt="Dar Aulas"/>
						Estudar
					</Link>

					<Link to="/give-classes" className="give-classes">
						<img src={giveClassIcon} alt="Dar Aulas"/>
						Dar Aulas
					</Link>
				</div> 

				<span className="total-connections">
					Total de 200 conexões ja realizadas	<img src={purpleHeartIcon} alt="Coração roxo"/>
				</span>
			</div>
    </div>
  )  
}

export default Landing;