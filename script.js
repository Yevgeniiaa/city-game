console.clear();
console.log(
  "https://evrikatour.com.ua/wp-content/uploads/2024/01/120513909_1076052659514921_8882020250047495886_n.jpg".includes(
    "https://evrikatour.com.ua/wp-content/uploads/2024/01/120513909_1076052659514921_8882020250047495886_n.jpg"
  )
);

let cities = [
  [
    "Lviv",
    "https://evrikatour.com.ua/wp-content/uploads/2024/01/120513909_1076052659514921_8882020250047495886_n.jpg"
  ],
  [
    "Kharkiv",
    "https://www.dobovo.com/blog/wp-content/uploads/2017/07/%D0%95%D0%B4%D0%B5%D0%BC-%D0%B2-%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2-%D1%82%D0%BE%D0%BF-10-%D0%BC%D0%B5%D1%81%D1%82.jpg"
  ],
  [
    "Kyiv",
    "https://24tv.ua/resources/photos/news/202301/2230322.jpg?v=1672813947000"
  ],
  [
    "Chernihiv",
    "https://cheline.com.ua/wp-content/uploads/2021/10/chernigiv-pyatnicka-cerkva-2-e1633772373753.jpg"
  ],
  ["Poltava", "https://www.rada-poltava.gov.ua/db/img/159_195ead27.jpg"],
  ["Rivne", "https://dovkola.media/wp-content/uploads/2022/10/i129069.jpeg"],
  [
    "Mukachevo",
    "https://truskavets.ua/wp-content/uploads/2019/11/Mukachevo_Berehovo.jpg"
  ],
  [
    "Kamjanec-Podilsku",
    "https://karpaty.love/uploads/posts/2017-12/1513090759_vyd-na-kamjanec-podilsku-fortecju.jpg"
  ],
  ["Khmelnytskyi", "https://www.khm.gov.ua/sites/default/files/img_3381_0.jpg"]
];

console.log(typeof cities);

/* 
Number , BigInt(великі цілі числа), String (слова), Boolean (логічний true or false), Undefined, Symbol -> примітивні типи даних (прості)

object 
null (не існує об'єкта)

shuffle js (перемішування елементів масиву)
*/

console.log(cities);
cities = cities.sort((a, b) => 0.5 - Math.random());
console.log(cities);

let targets = document.querySelectorAll(".city");

console.log(typeof targets);

for (let i = 0; i < targets.length; i++) {
  console.log(cities[i][1]);
  targets[i].style.backgroundImage = `url(${cities[i][1]})`;
  targets[i].addEventListener("click", check);
  console.log(targets[i]);
}

let randomCity = document.querySelector("span");
let answer = document.querySelector(".footer");
let randomItem = Math.trunc(Math.random() * 9);
randomCity.textContent = cities[randomItem][0];

function check() {
  console.log(`url('${cities[randomItem][1]}')`);
  console.log(this.style.backgroundImage);
  this.style.backgroundImage.includes(cities[randomItem][1])
    ? (answer.textContent = "ПРАВИЛЬНО! ВИ МОЛОДЕЦЬ!")
    : (answer.textContent = "НЕПРАВИЛЬНО! ТРЕНУЄМОСЯ ДАЛІ!");
  setTimeout(function () {
    window.location.reload();
  }, 3000);
}