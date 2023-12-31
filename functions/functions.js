//Functions

// const getBrand=function(brand){
//     return{
//         brand:brand,
//         website:`www.${brand}.com`
//     }
// }



// const getBrand=(brand)=>{
//     return{
//                 brand:brand,
//                 website:`www.${brand}.com`
//         }
// }


// const getBrand=brand=>{
//     return {
//           brand:brand,
//           website:`www.${brand}.com`
//     }
// }



// const getBrand=brand=>({
//     brand:brand,
//     website:`www.${brand}.com`
// }
// )



const getBrand=brand=>({
    brand:brand,
    website:`www.${brand.toLowerCase()}.com`
})


const add=(a,b)=>a+b;


const calculate=(a,b,sign)=>{
    switch(sign){
        case '+':
            return a+b;
        case '-':
            return a-b;
        default:
            // throw error 
    }
}

const answer=calculate(7,3,'-');
console.log(answer);

const brand=getBrand("Nike");
console.log(JSON.stringify(brand,null,1));


