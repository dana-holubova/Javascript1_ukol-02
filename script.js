
//vstup by mel byt v budoucnu osetreny, aby bylo mozne zadat jen cele kladne cislo a horni limit (zasoby tricek budou omezene)
let pocetKusu = Number(prompt("Zadejte počet kusů: "))
let celkovaCena = 0


if (pocetKusu >= 0 && pocetKusu < 50) {
    celkovaCena = 300 * pocetKusu
}

else if (pocetKusu >= 50 && pocetKusu < 200) {
    celkovaCena = 250 * pocetKusu
}

else if (pocetKusu >= 200 && pocetKusu < 500) {
    celkovaCena = 200 * pocetKusu
}

else if (pocetKusu >= 500 && pocetKusu < 1000) {
    celkovaCena = 150 * pocetKusu
}

else if (pocetKusu >= 1000) {
    celkovaCena = 120 * pocetKusu
}

else { celkovaCena = 'nelze spočítat' }

console.log('Celková cena: ' + celkovaCena)

document.body.innerHTML += `Ceková cena je: ${celkovaCena} Kč`



