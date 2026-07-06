function oblicz(tablica) {
  let suma = 0;
  let iloczyn = 1;

  for (let i = 0; i < tablica.length; i++) {
    suma += tablica[i];
    iloczyn *= tablica[i];
  }
  console.log("Suma: " + suma);
  console.log("Iloczyn: " + iloczyn);
}

let liczby = [1, 2, 3, 4, 5, 6];
oblicz(liczby);
