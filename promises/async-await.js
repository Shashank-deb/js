// Async Await 

const customers
=new Promise((resolve,reject)=>{
    return Promise.resolve().then(()=>{
        let i=0;
        while(i< 5_000_000_000) i++
        resolve([
            {name:'Shashank',id:1},
            {name:'Chirag',id:2}
        ])
    })
});


const addresses=new Promise((resolve,reject)=>{
    return Promise.resolve().then(()=>{
        let i=0;
        while(i<5_000_000_000)i++
        resolve([
            {customerId:1,address:"London"},
            {customerId:2,address:"USA"}
        ])
    })
});



// const fetchData=()=>{

//     customers.then(c=>{
//         addresses.then(a=>{
//             console.log(c);
//             console.log(a);
//         }).catch(error=>{
//             console.log(error);
//         })
//     }).catch(error=>{
//         console.log(error);
//     })
    
// }





// async await function
// const fetchData=async()=>{
//     try{
//         const c=await customers;
//         const a=await addresses;
//         console.log(c);
//         console.log(a);
//     }
//     catch(error){
//         console.log(error);
//     }
   
// }






// First promise use 
// const fetchData=async()=>{
   
//         Promise.all([customers,addresses]).then(values=>{
//             console.log(values);
//         }).catch(err=>{
//             console.log(err);
//         })
   
// }





// Second promise use
// const fetchData=async()=>{
//   Promise.all([customers,addresses]).then(values=>{
//     const[c,a]=values;
//     console.log(c);
//     console.log(a);
//   }).catch(err=>{
//     console.log(err);
//   })
// };



// Third Promise use
const fetchData=async()=>{
    try{
       const values=await Promise.all([customers,addresses]);
       const [c,a]=values;
       console.log(c);
       console.log(a);
    }
    catch(error){
        console.log(error);
    }
}




fetchData();

