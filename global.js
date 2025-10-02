// console.log("IT’S ALIVE!");

// function $$ (selector, context = document) {
// 	return Array.from(context.querySelectorAll(selector));
// }

// let navLinks = $$("nav a"); 
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)

// if (currentLink) { // or if (currentLink !== undefined)
// 	currentLink.classList.add("current");
// }

let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "My Projects"},
	{url: "contact/", title: "Contact Me"},
	{url: "https://github.com/ryannuqui10", title: "My Github Profile"}
	// add the rest of your pages here
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
	const ARE_WE_HOME = document.documentElement.classList.contains("home");
	let url = p.url
	url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;
	let title = p.title 

	let a = document.createElement("a");
	a.href = url;
	a.textContent = title;
	if (a.host === location.host && a.pathname === location.pathname) {
		a.classList.add("current");
	}
	if (a.host !== location.host) {
		a.target = "_blank";
	}
	nav.append(a);
}

document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select id="select">
			<option>light dark</option>
			<option>light</option>
			<option>dark</option>			
		</select>
	</label>`
);

if ("colorScheme" in localStorage) {
	select.value = localStorage.colorScheme;
	document.documentElement.style.setProperty("color-scheme", select.value);
}

select.addEventListener("input", function (event) {
	document.documentElement.style.setProperty("color-scheme", event.target.value);
	localStorage.colorScheme = event.target.value;
});