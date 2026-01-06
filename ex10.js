function filtrerNegatifs(tab) {
	return tab.filter(function (nomb) {
		return nomb > 0;
	});
}

console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]
