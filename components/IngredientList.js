import React from 'react';
// import Recipe from './Recipe'
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class IngredientList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log(this.props.ingredients);
		const ingredients = this.props.ingredients.map((ingredient) => {
			return(
				<ListGroupItem>
					{ingredient}
				</ListGroupItem>
			);
		});
		
		return(
			<ListGroup>
				{ingredients}
			</ListGroup>
		);
	}
}



export default IngredientList;