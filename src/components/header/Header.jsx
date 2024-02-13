import React from 'react'
import "./Header.scss"
import { useState, useRef, useEffect } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

function Header() {
	const [show, setShow] = useState(false)
	const [active, setActive] = useState(true)

	function myFunction() {
		setActive(!active)
		setShow(!show)
	}

	let menuRef = useRef()
	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setShow(false)
				setActive(true)
			}
		}
		document.addEventListener("mousedown", handler)
	})

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<header id='header'  ref={menuRef}>
			<ul className='header__cont'>
				<li className='header__cont--logo'><NavLink to="*" onClick={scrollToTheTop}><div className='insd-logo'></div></NavLink></li>
				<li className='li-mob-pc'><NavLink to="*" onClick={scrollToTheTop}>Главная</NavLink></li>
				<li className='li-mob-pc'><NavLink to="Technology" onClick={scrollToTheTop}>Технология</NavLink></li>
				<li className='li-mob-pc'><NavLink to="Flightplan" onClick={scrollToTheTop}>График полётов</NavLink></li>
				<li className='li-mob-pc'><NavLink to="Guarantees" onClick={scrollToTheTop}>Гарантии</NavLink></li>
				<li className='li-mob-pc'><NavLink to="About" onClick={scrollToTheTop}>О компании</NavLink></li>
				<li className='li-mob-pc'><NavLink to="Contacts" onClick={scrollToTheTop}>Контакты</NavLink></li>
			</ul>

			<div className='header__hamb' onClick={() => myFunction()}>
				{active ? <RxHamburgerMenu /> : < RxCross1 />}
			</div>

			{show && <ul className='header__drdwn'  >
				<li className='li-drpdwn'><NavLink to="*" onClick={scrollToTheTop}>Главная</NavLink></li>
				<li className='li-drpdwn'><NavLink to="Technology" onClick={scrollToTheTop}>Технология</NavLink></li>
				<li className='li-drpdwn'><NavLink to="Flightplan" onClick={scrollToTheTop}>График полётов</NavLink></li>
				<li className='li-drpdwn'><NavLink to="Guarantees" onClick={scrollToTheTop}>Гарантии</NavLink></li>
				<li className='li-drpdwn'><NavLink to="About" onClick={scrollToTheTop}>О компании</NavLink></li>
				<li className='li-drpdwn'><NavLink to="Contacts" onClick={scrollToTheTop}>Контакты</NavLink></li>
			</ul>}

		</header>
	)
}

export default Header