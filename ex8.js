function sommePairs(tab) {
    let som = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 === 0) {
            som += tab[i];
        }
    }
    return som;
}
console.log(sommePairs([1, 2, 3, 4])); // Résultat attendu : 6
