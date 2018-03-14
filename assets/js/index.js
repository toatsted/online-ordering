
$(() => {
	$("input").attr("autocomplete", "off");

	// Dish constructor
	function Dish(menu, name, price, ingredients) {

		this.menu = menu;
		this.name = name;
		this.price = price;
		this.ingredients = ingredients;
		// add this Dish to the propper menu
		Menu[this.menu].push(this);
	}

	// Menu object
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
						$("#" + key).append($("<ul>").addClass("dish")
							.append($("<h3>").addClass("dish-name").text(value.name))
							.append($("<li>").text("price: $" + value.price))
							.append($("<li>").text("ingredients: " + value.ingredients.join(", ")))) ;
					})
				}
			}
		}
	}

	// Add a Dish form handler
	$("form").on("submit", (event) => {
		event.preventDefault();
		
		let menu = ($("#main-button").prop("checked")) ? "main" : 
			($("#starters-button").prop("checked")) ? "starters" : 
			($("#desserts-button").prop("checked")) ? "desserts" : "drinks";

		new Dish(menu, $("#name-input").val(),
			$("#price-input").val(),
			$("#ingredients-input").val().split("+"));

		$("input").val("");
		Menu.display(); 
	})

	new Dish("drinks", "coke", 1.50, ["coke", "ice"]);
	new Dish("starters", "kimchi fries", 3, ["kimchi", "fries"]);
	new Dish("main", "hamburger", 5.50, ["beef", "buns", "lettuce", "tomato"]);

	Menu.display();
});