$(() => {
	let storage = firebase.storage();
	let database = firebase.database();
	$("input").attr("autocomplete", "off");

	database.ref("menu/").remove();

	// Dish constructor
	function Dish(menu, name, price, ingredients) {
		this.menu = menu;
		this.name = name;
		this.price = price;
		this.ingredients = ingredients;
	}

	 
	database.ref("menu/").on("value", (snapshot) => {
		let data = snapshot.val();

		if(!data){
			data = {
				main: [],
				starters: [],
				desserts: [],
				drinks: []
			}
		}

		$(".menu").empty();
		for(key in data){
			data[key].forEach((value, index) => {
				$("#" + key).append($("<div>").addClass("dish").attr("data-index", index).attr("data-menu", value.menu)
					.append($("<ul>"))
					.append($("<h3>").addClass("dish-name").text(value.name))
					.append($("<li>").text("price: $" + value.price))
					.append($("<li>").text("ingredients: " + value.ingredients.join(", "))));
			})
		}

		$("#add-dish").off("submit").on("submit", (event) => {
			event.preventDefault();

			let menu = ($("#main-button").prop("checked")) ? "main" : 
				($("#starters-button").prop("checked")) ? "starters" : 
				($("#desserts-button").prop("checked")) ? "desserts" : "drinks";

			if(!data[menu]){
				data[menu] = [];
			}

			data[menu].push(
				new Dish(menu, $("#name-input").val(),
					$("#price-input").val(),
					$("#ingredients-input").val().split("+")
				)
			);

			database.ref("menu/").set(data);
		})

		$(".menu").off("click").on("click", ".dish", function(event) {
			let btn = $(this);
			
			database.ref("menu/" + btn.attr("data-menu") + "/" + btn.attr("data-index")).remove();

			for(key in data){
				data[key].forEach((value, index) => {
					$("#" + key).find("div").attr("data-index", index);
				}) 
			}
			
		})

	})
});