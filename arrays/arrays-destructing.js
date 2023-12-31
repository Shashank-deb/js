// Arrays Destructing


const names=[
    "James",
    "Mariam",
    "Jamal",
    "Aisha",
    "Alex"
];


// const james=names[0];
// const mariam=names[1];
// const jamal=names[2];

const [j,mariam,jamal,...rest]=names;
console.log(j);
console.log(mariam);
console.log(jamal);
console.log(rest);