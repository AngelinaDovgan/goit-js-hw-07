const findUl = document.querySelectorAll('ul#categories li.item');

let countUl = 0;
findUl.forEach(function(item) {
    countUl++;
});
console.log('Number of categories: ' + countUl);


const categoryName = document.querySelectorAll("ul#categories li.item");
categoryName.forEach(function (el) {
const title = el.querySelector('h2').textContent;
const mainTitle = el.querySelectorAll('ul li');
    console.log('Category: ' + title);
    console.log('Elements: ' + mainTitle.length);
});

