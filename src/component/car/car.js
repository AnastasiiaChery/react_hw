
import './car.css';
import React, {Component} from 'react';

class Car extends Component {

	constructor(props) {
		super(props);
		let {car} = this.props;
		this.state = {car};
	}

	change = () => {
		let {car} = this.state;
		car.status = !car.status;
		this.setState({car});
	};

	render() {
		return (
			<div className={this.state.car.name}>
				{this.state.car.name} -
				{this.state.car.year} -
				{this.state.car.status.toString()}
                <br></br>
				<button onClick={this.change}>CHANGE</button>
                <hr></hr>
			</div>
		);
	}
}

export default Car;