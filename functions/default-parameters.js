// Function Default Parameter

const getBrand=(brand="Hello")=>({
    brand:brand,
    website:`www.${brand.toLowerCase()}`
})


const brand=getBrand("Samsung")
console.log(JSON.stringify(brand,null,1));