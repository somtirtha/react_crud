import React from 'react';
import Recipe from './Recipe'
import {Accordion, Panel} from 'react-bootstrap';

class RecipeBook extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// const recipeList = '';
		// console.log(this.props.recipeList);
		const recipeList = this.props.recipeList.map(function(r, i) {
			return (<Panel header={r.title} eventKey={i} bsStyle="success">
						<Recipe title={r.title} ingredients={r.ingredients} 
						index={i} onEdit={(i) => this.props.edit(i)} 
						onDelete={(i) => this.props.delete(i)}/>
					</Panel>

			);

			// return (<Panel header={r.title} eventKey={i} bsStyle="success">
			// 			{r.title}
			// 		</Panel>

			// );

		});
		// console.log(recipeList);

		return(
			<div>
				<Accordion>
					{recipeList}
				</Accordion>
			</div>
		);
	}
}



export default RecipeBook;