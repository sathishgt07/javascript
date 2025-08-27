// for(var a=1;a<=20;a++){
//     if(a%2==0){
       
//         if(a==10){
//             continue;
//         }
//          console.log(a);
//     }
// }

// //funtion-named funtion
// function name(){
//  console.log("sathish");
 
// }
// name()
// // funtion -annonymbs funtion
//  let sathish= function(){
//     console.log("he is a devoleper");
    
//  }
//  sathish()
//  //funtion-arrow funtion 
//   let sathish1=(named)=> console.log("he is hacker"+named);
  
//   sathish1("sathish")
  

  //higher order funtion

  function kumaar(callback,a,b){
 console.log(a+b);
 callback(a,b)
 
  }
  function sathish(num1,num2){
    console.log(num1-num2);    

  }
  kumaar(sathish,10,20)