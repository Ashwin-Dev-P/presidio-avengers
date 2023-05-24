"use strict";

fetch("./infinity_stones.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error("HTTP error " + response.status);
		}
		return response.json();
	})
	.then((json) => {
		console.log(json);
		const { stones } = json;

		let infinity_stones_ul = document.createElement("ul");
		infinity_stones_ul.className = "infinity-stones-ul my-text-center";

		for (const stone of stones) {
			console.log(stone);
			const { name, color } = stone;

			const infinity_stone_list_item = document.createElement("li");
			infinity_stone_list_item.innerText = name;
			infinity_stone_list_item.style.backgroundColor = color;

			console.log(infinity_stone_list_item);
			infinity_stones_ul.appendChild(infinity_stone_list_item);
		}

		console.log(infinity_stones_ul);

		const mainTag = document.querySelector("main");
		console.log(mainTag);

		mainTag.appendChild(infinity_stones_ul);
	})
	.catch(function (error) {
		console.error("error", error);
	});
