/* MENU */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Pays */

"use strict";

var pays = ["France", "Allemagne", "Espagne"];

var selectionPays = function selectionPays() {
	var res = "<select>";
	var codePays = [];
	var mapping = pays.map(function (p) {

		return "<option>" + p + "</option>";
	});
	res += mapping + "</select>";
	return res;
};

(function () {
	document.getElementById("selectionPays").innerHTML = selectionPays();
})();
console.log(selectionPays());