$(() => {
	
	function Dish(name, price, ingredients){
		this.name = name;
		this.price = price;
		this.ingredients = ingredients;
	}

	let Menu = {
		main: [],
		appetizers: [],
		desserts: [],
		drinks: []
	}
	
	Menu.drinks.push(new Dish(
		name = "coke",
		price = "1.00",
		ingredients = "coke ingredients"
	));

	Menu.drinks.forEach((value, index) => {
		console.log(value.name);
		console.log(value.price);
		console.log(ingredients);
	})

});