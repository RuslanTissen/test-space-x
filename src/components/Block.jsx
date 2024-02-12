import React from 'react'
import "./Block.scss"

function Block(props) {
	let { info_1, info_2, info_3, info_2_1 } = props

	return (
		<section>
			<p className='info_1'>{info_1}</p>
			<p className='info_2'>{info_2} <span className="info_2_1">{info_2_1}</span></p>
			<p className='info_3'>{info_3}</p>
		</section>
	)
}

export default Block