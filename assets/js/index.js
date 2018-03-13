$(() => {

	function Dish(name, price, ingredients) {
		this.name = name;
		this.price = price;
		this.ingredients = ingredients;
	}

	let Menu = {
		main: [],
		starters: [],
		desserts: [],
		drinks: [],

		display() {
			for (let key in Menu) {
				Menu[key].forEach((value) => {
					let list = $("<ul>").append($("<h3>").text(value.name))
						.append($("<li>").text("price: $" + value.price))
						.append($("<li>").text("ingredients: " + value.ingredients));
					$("#" + key).append(list)
				})
			}
		},
	}

	Menu.drinks.push(new Dish(
		"coke",
		"1.00",
		"coke and ice"
	));

	Menu.drinks.push(new Dish(
		"pepsi",
		".75",
		"pepsi and ice"
	));

	Menu.starters.push(new Dish(
		"kemchi fries",
		"2.00",
		"kemchi and fries"
	));

	Menu.display();
});