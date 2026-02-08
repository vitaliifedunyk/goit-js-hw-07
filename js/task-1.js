const categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`);

const categoryElements = categories.forEach(category => {
    const textCategory = category.querySelector('h2').textContent
    const countElements = category.querySelector('ul').children.length
    console.log(`Category: ${textCategory}`);
    console.log(`Elements: ${countElements}`);
}
)