"use strict";

const mainTag = document.querySelector("main");

fetch("./infinity_stones.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error("HTTP error " + response.status);
		}
		return response.json();
	})
	.then((json) => {
		const { stones } = json;

		let infinity_stones_ul = document.createElement("ul");
		infinity_stones_ul.className = "infinity-stones-ul my-text-center";

		for (const stone of stones) {
			const { name, color } = stone;

			const infinity_stone_list_item = document.createElement("li");
			infinity_stone_list_item.innerText = name;
			infinity_stone_list_item.style.backgroundColor = color;

			infinity_stones_ul.appendChild(infinity_stone_list_item);
		}

		mainTag.appendChild(infinity_stones_ul);
	})
	.catch(function (error) {
		console.error("error", error);
		const errorDialogP = document.createElement("dialog");
		errorDialogP.className = "my-danger  my-text-center";
		errorDialogP.innerText = "Unable to get the stone details";
		errorDialogP.setAttribute("open", true);

		mainTag.appendChild(errorDialogP);
	});
