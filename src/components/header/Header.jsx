import React from 'react'
import "./Header.scss"
import { useState,useRef, useEffect } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';

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

	return (
		<header id='header'>
			<ul className='header__cont'>
				<li className='header__cont--logo'><div className='insd-logo
				'></div></li>
				<li className='li-mob-pc'>Главная</li>
				<li className='li-mob-pc'>Технология</li>
				<li className='li-mob-pc'>График полётов</li>
				<li className='li-mob-pc'>Гарантии</li>
				<li className='li-mob-pc'>О компании</li>
				<li className='li-mob-pc'>Контакты</li>
			</ul>

			<div className='header__hamb' ref={menuRef} onClick={() => myFunction()} >
				{active ? <RxHamburgerMenu /> : < RxCross1 />}
			</div>

			{show && <ul className='header__drdwn'>
				<li className='li-drpdwn'>Главная</li>
				<li className='li-drpdwn'>Технология</li>
				<li className='li-drpdwn'>График полётов</li>
				<li className='li-drpdwn'>Гарантии</li>
				<li className='li-drpdwn'>О компании</li>
				<li className='li-drpdwn'>Контакты</li>
			</ul>}

		</header>
	)
}

export default Header