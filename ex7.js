function moyenne(tab) {
	let som = 0;
	for (let i = 0; i < tab.length; i++) {
		som += tab[i];
	}
	return som / tab.length;
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6
