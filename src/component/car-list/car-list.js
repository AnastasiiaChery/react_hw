import React, {Component} from 'react';
import Car from '../car/car';
import {car} from '../../inform/inform';

class Cars extends Component {

	render() {
		let className = 'target';
		return (
			<div className={className}>
				{
					car.map((item, index) => {
						return (<Car car={item} key={index}/>);
					})
				}
			</div>
		);
	}


}

export default Cars;