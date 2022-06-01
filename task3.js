const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(Element => alert('New Price on product id-' + Element.id + ' is ' + (Element.price - (Element.price/100*15)) + 'USD'))