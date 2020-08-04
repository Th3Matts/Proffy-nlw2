import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
  return(
    <article className="teacher-item">
		<header>
			<img src="https://avatars2.githubusercontent.com/u/36890610?s=460&u=b0775141b0e149d0a8120a6f272456aba1f59624&v=4" alt="Matheus Rodrigues"/>
			<div>
				<strong> Matheus Rodrigues </strong>
				<span>Fica ao cargo?!</span>
			</div>
		</header>

		<p>
			Nonononononononono
			<br/> <br/>
			Nononononononononononono onon ono non 
		</p>

		<footer>
			<p>
				Preço/hora 
				<strong> R$777,00</strong>
			</p>
			<button type="button">
				<img src={whatsappIcon} alt="Whatsapp"/>
				Entrar em contato
			</button>
		</footer>
	</article>
  )
}

export default TeacherItem;