var queryURL = "https://www.vegguide.org/search/by-lat-long/30.2672,-97.7431/filter/category_id=1;veg_level=2"
		
$.ajaxSetup({
  beforeSend: function(request) {
    request.setRequestHeader("User-Agent","greenapp/v1.0");
  }
});
				
$.ajax({
  type: "GET",
  url: queryURL,
  success: function(res) {
  	cuisines = [];
  	console.log(res);
  	for (let i in res.entries) {
			for (let j in res.entries[i].cuisines){
				cuisines.push(res.entries[i].cuisines[j]);
			}
			cuisines = $.unique(cuisines);
	}

	var restaurants = [];
	for (let r in res.entries){
		for(let c in cuisines){
			if(!(cuisines[c] in restaurants)){
				restaurants[cuisines[c]] = [];
			}

			if(res.entries[r].cuisines.includes(cuisines[c])){
				restaurants[cuisines[c]].push(res.entries[r]);
				// restaurants[cuisines[c]].push(r);
			}
			else{
			}
		} 
	}

	for(let cuisine in restaurants){
		let restDiv = $("<div>");

		restDiv.append("<h2>")
			.find("h2")
			.text(cuisine);

		}.append($("<ul>"));

		restaurants[cuisine].forEach((value, index) => {
			restDiv
				.find("ul")
				.append($("<p>").text(value.name + ", " + value.address1));
		})

		$(".container").append(restDiv);
	}
 
  }
});
