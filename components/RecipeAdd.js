import React from 'react';
import IngredientList from './IngredientList'
import {Button, Modal} from 'react-bootstrap';

class RecipeAdd extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
		}
	}

	render() {

		<div>
			<Button
				bsStyle="primary" 
				bsSize="large" 
				onClick={this.open}
				id="show"
			>
				Add Recipe
			</Button>
			<Modal show={this.state.showModal} onHide={this.close}>
				<Modal.Header closeButton>
					<Modal.Title id="modalTitle">Add a Recipe</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<Input type="text" label="Recipe" placeholder="Recipe Name" id="title" />
						<Input type="textarea" label="Ingredients" placeholder="Enter Ingredients Separated By Commas" id="ingredients"/>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.add} bsStyle="primary" id="addButton">Add Recipe</Button>
					<Button onClick={this.close}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	}
}



export default RecipeAdd;