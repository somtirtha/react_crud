import React from 'react';
import RecipeBook from './RecipeBook';
import RecipeAdd from './RecipeAdd';

// defining list of recipes
var _recipes = (typeof localStorage["recipeBook"] != "undefined") ? JSON.parse(localStorage["recipeBook"]) : [
  {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 
  {title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}, 
  {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]} ]




class App extends React.Component {

	constructor() {
		super();
		this.state = {
			recipes: _recipes,
		};
	}

	// to update reciepList for add, edit or remove operations
	update() {

	}

	edit(i) {

	}

	delete(i) {

	}

	render() {
		// console.log(this.state._recipes);
		// const recipeList = this.state.recipes;
		return(
			<div>
				<RecipeBook recipeList={this.state.recipes} update={this.update}
					onEdit={(i) => this.edit(i)} onDelete={(i) => this.delete(i)}/>
				
			</div>

		);
	}
}

// <RecipeAdd/>

export default App;