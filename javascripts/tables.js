document$.subscribe(function() {
	var tables = document.querySelectorAll("article table")
	tables.forEach(function(table) {
		new Tablesort(table)
	})
})

window.MathJax = {
	tex: {
		inlineMath: [["\\(", "\\)"]],
		displayMath: [["\\[", "\\]"]],
		processEscapes: true,
		processEnvironments: true
	},
	options: {
		ignoreHtmlClass: ".*|",
		processHtmlClass: "arithmatex"
	}
};
