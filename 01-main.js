function nahodnyLetopocet(argPrvniCislo, argDreheCislo) {
    let pocetMeziCisel = argDreheCislo - argPrvniCislo;
    let vysledek = (Math.floor(Math.random() * pocetMeziCisel) + argPrvniCislo);

    return vysledek;
}