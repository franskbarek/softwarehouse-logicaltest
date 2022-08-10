//CASE NO.1
function letter(e) {
  const words = e
    .toLowerCase() // for better compare and sort
    .split("") // convert string to array
    .filter((el) => el !== " "); // remove spaces
  console.log("words: ", words);

  const vowel = words
    .filter((el) =>
      "aiueo" // to find vowel letters
        .split("") // to create vowel letter array
        .includes(el)
    )
    .sort(
      (a, b) => a.localeCompare(b) // sort from a to z. you can replace a with b and b with a for reverse sorting
    )
    .join(""); // to convert array to string
  console.log("vowel: ", vowel);
  const consonant = words
    .filter((el) => !"aiueo".split("").includes(el))
    .sort((a, b) => a.localeCompare(b))
    .join("");
  console.log("consonant: ", consonant);
  return { vowel, consonant };
}
// test case
console.log("result after sortby char: ", letter("Frans Ferdinand"));

// ======================================================

// CASE NO. 2
function calculateBus(countOfFamily, familyMembers) {
  // konversi jadi array of number
  const arrOfFamilyMembers = familyMembers.split(" ").map((d) => Number(d));

  // validasi kalau total familyMembers tidak sama dengan countOfFamily
  if (arrOfFamilyMembers.length !== Number(countOfFamily)) {
    console.log("Input must be equal with count of family");
    return;
  }

  // limit 4 ini sesuai soal
  const LIMIT = 4;

  // ini hasil akhir nya nanti (TOTAL BUS yang dibutuhkan)
  let totalBusRequired = 0;

  // sorting dari besar ke kecil
  const sorted = arrOfFamilyMembers.sort((a, b) => b - a);

  // lastItemCheck untuk mengingat index dari item terakhir yang mau dijumlahkan dengan perulangan saat ini (kalau item saat tidak sama dengan LIMIT)
  let lastItemCheck = sorted.length - 1;

  // looping...
  sorted.forEach((d, i) => {
    if (i <= lastItemCheck) {
      // kalau item saat ini sama dengan LIMIT (4), langsung saja total BUS yang dibutuhkan ditambah 1
      if (d === LIMIT) {
        totalBusRequired++;
      }

      // kalau item saat ini tidak sama dengan LIMIT (4), cek item yang terkecil, yang mana yang paling belakang, kemudian dijumlahkan.
      // kalau hasilnya sama dengan LIMIT (4), makan total BUS yang dibutuhkan ditambah 1
      // kalai tidak SKIP
      else if (d + sorted[lastItemCheck] === LIMIT) {
        totalBusRequired++;
        lastItemCheck--;
      }

      // langsung total BUS yang dibutuhkan ditambah 1
      // karena tidak ada kondisi yang cocok untuk penuhi syarat item sekarang masuk BUS
      else {
        totalBusRequired++;
      }
    }
  });

  // console.log("countOfFamily:", countOfFamily, "| familyMembers:", familyMembers, "| totalBusRequired:", totalBusRequired);
  console.log(totalBusRequired);
}

/* test case */
calculateBus(5, "1 2 4 3 3"); // 4
calculateBus(8, "2 3 4 4 2 1 3 1"); // 5
calculateBus(5, "1 5"); // error

/*
#### 1. Problem : Sort Character (50 Poin) (NDL010)

Input :
One line of words (S). / Satu baris kata (S).

Output :
Contains vowel and consonant characters that has been sorted according to the following rules. / Berisi karakter vokal dan konsonan yang telah diurutkan menurut aturan berikut.

● Sort the letters according to the order they came out / Urutkan huruf-huruf sesuai dengan urutan mereka keluar
● Separate between vowels and consonants. / Pisahkan antara vokal dan konsonan.
● Process as lowercase letters (whitespaces are ignored) / Proses sebagai huruf kecil (spasi diabaikan)
*/

// ==========================================

/*
#### 2. PSBB ( Pembatasan Sosial Berskala Besar ) (60 Poin) (NDL011)
Galih and Ratna married during the COVID 19 period and only invited the families of both
partners. they rented a number of minibuses to pick up all of their families to go to the wedding.
But during COVID 19, the government held a PSBB program to reduce the impact of the spread
of the virus. Each mini bus can only carry at most 4 passengers.
What a minimum number of buses will they need to rent if all members of each family should
ride in the same Busses. (one bus can't take more than two family)

Input
The first line contains integer n — the number of families.
The second line contains a sequence of integers. The integers are separated by a space, each
integer is the number of members in the family.

Output
Print the single number — the minimum number of buses necessary to drive all family to the
Wedding.
Print “Input must be equal with count of family” if input number of family is not equal with count
of family.
*/
