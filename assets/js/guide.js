$(document).ready(() => {
	// var queryURL = "https://www.vegguide.org/search/by-lat-long/30.2672,-97.7431/filter/category_id=1;veg_level=2"

	// $.ajaxSetup({
	//   beforeSend: function(request) {
	//     request.setRequestHeader("User-Agent","greenapp/v1.0");
	//   }
	// });
					
	// $.ajax({
	//   type: "GET",
	//   url: queryURL,
	//   success: function(res) {
	//  //  	cuisines = [];
	//  //  	console.log(res);
	//  //  	for (let i in res.entries) {
	// 	// 	for (let j in res.entries[i].cuisines){
	// 	// 		cuisines.push(res.entries[i].cuisines[j]);
	// 	// 	}
	// 	// 	cuisines = $.unique(cuisines);
	// 	// }

	// 	// var restaurants = [];
	// 	// for (let r in res.entries){
	// 	// 	for(let c in cuisines){
	// 	// 		if(!(cuisines[c] in restaurants)){
	// 	// 			restaurants[cuisines[c]] = [];
	// 	// 		}

	// 	// 		if(res.entries[r].cuisines.includes(cuisines[c])){
	// 	// 			restaurants[cuisines[c]].push(res.entries[r]);

	// 	// 			// restaurants[cuisines[c]].push(r);
	// 	// 			$(".carousel").append(createCard(cuisines[c], restaurants));
	// 	// 		}

	// 	// 	} 
	// 	// }

	// });

	let cardHTML = '<a class="carousel-item responsive-img" id="asian">' +
                            '<div class="card">' +
                                '<img src="../assets/images/asian1.jpg" style="width: 100%">' +
                                '<ul class="collapsible" data-collapsible="accordion">' +
                                    '<li>' +
                                        '<div class="collapsible-header">' +
                                            '<i class="material-icons">description</i>Asian Cuisine</div>' +
                                        '<div class="collapsible-body">' +
                                            '<p> Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat.</p>' +
                                        '</div>' +
                                    '</li>' +
                                '</ul>' +
                            '</div>' +
                        '</a>';


    let cardElem = $.parseHTML(cardHTML);
    $("#carousel-div").append($("<div>").addClass("carousel"));
    $(".carousel").append(cardElem);
});
