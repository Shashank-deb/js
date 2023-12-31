const Shashank={
    firstName:"Shashank",
    age:21,
    isMale:true,
    balance:100.32,
    dob:new Date(2000,1,28).toJSON(),
    
    toString:function(){
    return `Name:${this.firstName} Age:${this.age}`
    },
    deleteMe:true
    
};


const address={
    city:"London",
    postCode:"SW9"
};


// const person={
//     firstName:Shashank.firstName,
//     address:{
//         city:address.city,
//         postCode:address.postCode
//     }
// };


const person={
    ...Shashank,
    address:{...address}
}


console.log(person);

