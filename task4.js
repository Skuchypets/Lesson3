const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const resultPhoto = products.filter(Element => "photos" in Element && Element.photos.length >= 0)

console.log(resultPhoto);

let resultPrice = products.sort(function(a, b) {
    return a.price - b.price
})

console.log(resultPrice)


//    Вопрос !!!! 
// Почему не полкчается сделать вот так :


// function resultDownUp(a,b) {
// return a.price - b.price
// } 

// let resultPrice = products.sort(resultDownUp(a, b))
// console.log(resultPrice)