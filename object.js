//tasklar 

// let obj = {
//     name: "Shahlar",
//     age:25,
//     surname: "Abbasov" 
// }


// function addel(x,y,z) {

//     let a = x;

//     obj[a]=y;

//     delete obj[z];

//    return console.log(obj);

    
//  }



// addel("height ", "1.75", "name" );


// array daxilinde obyekt

// let arr = [{surname:"Abbasov",age:27},{surname:"Ahmadov",age:25},{surname:"Aliyev", age:31},{surname:"Alizade", age:20}];


//   let x = arr.sort(function(a, b) {
//     return (a.surname - b.surname);
// }).sort(function(a, b) {
//     return (a.age - b.age);
// });
 
// console.log(x);



// let obj ={
//     name:"Ali",
//     surname: "Asadzade",
//     age:20

// }

// let x = Object.assign({},obj);

// console.log(x);
// console.log(obj === x);

// deep copy

// let a={
//     country:"Azerbaijan",
//     city:"Baku"

// }

// let b = JSON.parse(JSON.stringify(a));
// console.log(b);


// yeni obyekt yaradan funksiya

function obj(name,surn,age) {

    this.ad = name;
   this.soyad = surn;
    this.yas = age;
    

    
}


let a = new obj("shahlar","abbasov",27);
let b = new obj("memmed","memmedov",31);
console.log(a);
console.log(b);