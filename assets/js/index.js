
$(() => {
	$("input").attr("autocomplete", "off");

	function Dish(menu, name, price, ingredients) {

		this.menu = menu;
		this.name = name;
		this.price = price;
		this.ingredients = ingredients;
		Menu[this.menu].push(this);
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
						$("#" + key).append($("<ul>").addClass("dish")
							.append($("<h3>").addClass("dish-name").text(value.name))
							.append($("<li>").text("price: $" + value.price))
							.append($("<li>").text("ingredients: " + value.ingredients.join(", ")))) ;
					})
				}
			}
		}
	}

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
	new Dish("starters", "kemchi fries", 3, ["kemchi", "fries"]);
	new Dish("main", "hamburger", 5.50, ["beef", "buns", "lettuce", "tomato"]);

	Menu.display();
});