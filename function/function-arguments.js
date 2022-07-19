
/*Complete the function in twofer.js so that it returns "Two for me and one for you" when no arguments are passed
e.g
console.log(twofer("Fran")) ---> "Two for me and one for Fran"
console.log(twofer()) ---> "Two for me and one for you" 
*/
let h='';
let c='';
let d=0;

function twofer(a,b){
    
    
     if((a===undefined) && (b===undefined)) {
        d=-1;
     }

    if(a==='Fran' || b==='Fran'){
        
         h=2;
        
    }
    if(a==='me'|| b==='me'){
        c=1;
       }

       
    if((parseFloat(a)===0) && (parseInt(b))===0){
        d=-1;
        console.log('both are empty')
    };

    
      switch(d){
        case -1:
            return console.log('Two for me One for Fran')
            default:
                return h+"  "+c

      }
       
            
        
    }
   
let res=twofer();

if(!(res===undefined)){
    console.log( res);
}
/*    
Complete the function in exponent.js so that it still calculates the power of a number even 
if the exp argument is not passed to it. The default exp should be set to 2.
e.g
console.log(exponent(3, 3)) ---> 27
console.log(exponent(3)) ---> 9
*/

function mypower(a,b){
let arg=arguments.length;
let vpow=0;
if(arg===2){
  vpow=(Math.pow(a,b))
}
else{
 vpow=(Math.pow(a,2))
}
    
return vpow;
}


let vp=mypower(4)
console.log(vp)

/*
Create a function in howManyArgs.js which returns the total amount of arguments passed to it.
e.g
console.log(howManyArgs()) ---> 0
console.log(howManyArgs(1, false, "hello")) ---> 3
console.log(howManyArgs("better")) ---> 1
*/

function howmanyrag(a,b,c,d){
    let ag=arguments.length;
    return ag;
}
let vp2=howmanyrag(2,3)
console.log(vp2)



/*
Create a function in sum.js which accepts any amount of numbers and return the sum of their addition
e.g
console.log(sum(1)) ---> 1
console.log(sum(1, 15)) ---> 16
console.log(sum(25, 25, 20)) ---> 70
*/


function unlimitedpara() {
    const para = Array.from(arguments);
    return para.reduce((total, current) => total + current);
}

console.log(unlimitedpara(10,30,40,100))




/*

Bonus: Create a function in average.js which accepts any amount of numbers and returns their mean average.
e.g
console.log(average(0)) ---> 0
console.log(average(1, 2)) ---> 1.5
console.log(average(1, 3, 6, 10)) ---> 5
console.log(average(12, 14, 16)) ---> 14
*/

function means() {
    const para = Array.from(arguments);
    console.log ('length'+"  "+ arguments.length)
    let men=para.reduce((total, current) =>  total + current);
    let men2=(men/arguments.length)
    return men2
    
    
}


console.log(means(1,2))

console.log('*********************')

let text = "a quick brown fox Jumps right Over the Lazy?";
let pattern = /\s/g;
let result = text.match(pattern);
let t1='';
let result2='';

console.log(result.length)

for (var i = 0; i < text.length; i++) {    
     t1=t1+(text.charAt(i));

     let text1 = text;


   result2 = result2+text1.indexOf(" ",i);
   
  }
  let sspace=(text.split(''))
console.log(sspace)
for(n=0;n<=sspace.length;n++)
{
  if(sspace[n]===' '){
    console.log('space')
    console.log(sspace[n+1])
    let changed=sspace[n+1].toUpperCase()
    console.log(changed)

    sspace.splice(n+1,1,changed)

  }
}

