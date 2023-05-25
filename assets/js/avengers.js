"use strict";
// stones image source: https://opensea.io/collection/infinity-stones
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

		// To append multiple children
		// var documentFragment = document.createDocumentFragment();
		// documentFragment.appendChild(infinity_stones_ul);

		var infinity_stones_ul = document.createElement("ul");
		infinity_stones_ul.className =
			"infinity-stones-ul stones-flex-container my-text-center";

		for (const stone of stones) {
			const { name, color } = stone;

			const infinity_stone_list_item = document.createElement("li");

			const image_div = document.createElement("div");

			const stone_img = document.createElement("img");

			stone_img.src = `./assets/images/stones/${name}.webp`;
			stone_img.alt = `${name} stone`;
			stone_img.width = "100%";

			image_div.appendChild(stone_img);
			infinity_stone_list_item.appendChild(image_div);

			//const text_div = document.createTextNode(name);
			const text_div = document.createElement("div");
			text_div.innerHTML = name;
			text_div.style.color = color;

			infinity_stone_list_item.appendChild(text_div);

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
