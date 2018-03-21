$(() => {
	let storage = firebase.storage();
	let database = firebase.database();
	$("input").attr("autocomplete", "off");

	// Dish constructor
	function Dish(name, price, ingredients) {
		this.name = name;
		this.price = price;
		this.ingredients = ingredients;
	}

	database.ref("menu/").on("value", (snapshot) => {
		let data = snapshot.val();
		$(".menu").empty();

		if(!data){
			data = {
				main: 0,
				starters: 0,
				desserts: 0,
				drinks: 0
			}
		}


		$("#add-dish").off("submit").on("submit", (event) => {
			event.preventDefault();

			/* this is a mess of turnary operators that shouldn't exist yet im
			also kinda proud of it */
			let menu = ($("#main-button").prop("checked")) ? "main" : 
				($("#starters-button").prop("checked")) ? "starters" : 
				($("#desserts-button").prop("checked")) ? "desserts" : "drinks";

			if(!data[menu]){
				data[menu] = {
					name: "",
					price: "",
					ingredients: []
				}
			}

			data[menu].push(
				new Dish($("#name-input").val(),
					$("#price-input").val(),
					$("#ingredients-input").val().split("+")
				)
			);

			$("input").val("");
		})
		
		database.ref("menu/").set(data);
	})
});