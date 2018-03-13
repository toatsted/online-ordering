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
			$(".menu").empty();
			for (let key in Menu) {
				if(Array.isArray(Menu[key])){
					Menu[key].forEach((value) => {
						let list = $("<ul>").addClass("item").append($("<h3>").text(value.name))
							.append($("<li>").text("price: $" + value.price))
							.append($("<li>").text("ingredients: " + value.ingredients.join(", ")));
						$("#" + key).append(list)
					})
				}
			}
		},
	}

	$("form").on("submit", (event) => {
		event.preventDefault();
		
		let key = ($("#main-button").prop("checked")) ? "main" : 
			($("#starters-button").prop("checked")) ? "starters" : 
			($("#desserts-button").prop("checked")) ? "desserts" : "drinks";

		Menu[key].push(new Dish(
			$("#name-input").val(),
			parseFloat($("#price-input").val()),
			$("#ingredients-input").val().split("+")
		));

		$("input").val("");
		Menu.display();	
	})

	Menu.drinks.push(new Dish(
		"coke",
		1.00,
		["coke", "ice"]
	));

	Menu.drinks.push(new Dish(
		"pepsi",
		.75,
		["pepsi", "ice"]
	));

	Menu.starters.push(new Dish(
		"kemchi fries",
		2.00,
		["kemchi", "fries"]
	));

	Menu.main.push(new Dish(
		"hamburger",
		6.00,
		["buns", "beef", "lettuce", "tomato"]
	));

	Menu.display();
});