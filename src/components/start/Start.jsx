import React from 'react'
import "./Start.scss"
import Block from '../Block.jsx'

function Start() {

	return (
		<div className='start'>
			<div className="start__cont">
				<Block
					className='str__sec--1'
					info_1="мы"
					info_2="1"
					info_3="на рынке"
				/>

				<Block
					className='str__sec--2'
					info_1="гарантируем"
					info_2="50%"
					info_3="безопасность"
				/>

				<Block
					className='str__sec--3'
					info_1="календарик за"
					info_2="2001"
					info_2_1="г."
					info_3="в подарок"
				/>


				<Block
					className='str__sec--4'
					info_1="путешествие"
					info_2="597"
					info_3="дней"
				/>
			</div>
		</div>
	)
}

export default Start