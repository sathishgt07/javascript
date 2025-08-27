//console.log(10<12);
//logical op
//logical and(&&)
//true +true=true
//true+false=false
var age=10
console.log(age>8&&age>11);

//logical (||)
//true+true=true
//true+false=false
//false+false=false
 var age1=10
 console.log(age1>8||age1>11)

//logical not
var name="sathish"
console.log(!(name="sathish"))

//concatenation( add two or more string called concatenation )
var nam="sathish "
var coll="avs"
var out=nam+coll
console.log(out);
console.log("sathish"+" "+"john");

//template string or template literal
 var name1=`sathish1`
 console.log(name1);
 
 //string interpolation
  var name2=`${name1}kumar`
  console.log(name2);

  var a=5
  var b=i
  var i=1
//   for(b=1;b<=16;b++){
  //var c=`${b}*${a}=${a*b}`
//   console.log(c);}


  //type convertion
  //1 ==>implecity covertion
  let name3="sathish"
  let age2=100
  console.log(name3+age2);
  //string (string+anything=string)
  console.log("hi"+true)
  console.log("hi"+null)
  console.log("hi"+undefined)
  console.log("hi"+undefined)

  //number
  console.log(10+true); //true=1 false=0
  console.log(10+undefined)//10+not a num=nan
  console.log(10+null);//10+0=10
  console.log(10+[0]);//10+["0"]=100
  console.log(10+{})
  
  //explicity conversation
  console.log(10+Number("2"));
  console.log(Number("abc"));
  console.log(Number(true));
  console.log(Number(false));