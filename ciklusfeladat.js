// 1. Feladat.

let sorokSzama = 6
let betu = "*"
for (let i = 0; i < array.length; i++) {
    console.log[betu.repeat(i)];
    
}

// 3.
// for (let i= 99; i > 0; i--) {
//     if (i % 3 === 0) {
//         console.log(i);
//    }
//}

//4. HF

//5.
let N = 5
let osszeg = 0


for (let i = 99; i < 0; i++) {
    console.log(i);
}

console.log(`Az első ${N} természetes szám összege ${osszeg}`)

// 6.

// 8.

let N2 = 6

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${N2} = ${i*N2}`);
}

// 11.

let dobasszam = 0
let dobasokOsszege = 0

while(true) {
    let dobas = Math.floor(Math.random() * 6) + 1
    console.log(dobas)

    dobasszam++
    dobasokOsszege += dobas

    if (dobas === 6) {
        break;
    }
}

let dobasokAtlaga = dobasokOsszege / dobasszam
console.log(`A dobások átlaga ${dobasokAtlaga}`)

//14.

while (true) {
    let szam = parseInt(prompt("kérlek adj meg egy számot (0-val kilépsz)"));

    if (isNaN(szam)){
        console.log("Érvénytelen bevitel kérlek adj meg egy számot")
    }

    if (szam === 0){
        break;
    }

    if (szam % 2 === 0) {
        voltParos = true;
    }
}

if (voltParos) {
    console.log("Volt páros")
} else{
    console.log("Nem volt páros")
}