import React from 'react';
import IngredientList from './IngredientList'
import {ButtonToolbar, Button} from 'react-bootstrap';

class Recipe extends React.Component {
	constructor(props) {
		super(props);

	}

	// edit() {
	// 	// edit the recipe
	// }

	// remove() {
	// 	// remove the recipe
	// }

	render() {
		// const ingredList = 
		// console.log(this.props.ingredients);
		return(
			<div>
				<h4 className="text-center">Ingredients</h4>
				<IngredientList ingredients={this.props.ingredients}/>
				<ButtonToolbar>
					<Button bsStyle="default" id={'btn-edit' + this.props.index} onClick={(i) => this.props.edit(i)}>Edit</Button>
					<Button class="delete" bsStyle="danger" id={'btn-del' + this.props.index} onClick={(i) => this.props.delete(i)}>
					Delete
					</Button>
				</ButtonToolbar>
			</div>
		);
	}
}



export default Recipe;