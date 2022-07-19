/*
let texts = "i am getting Early in the morning and Going to school?";
let text=texts.padStart(texts.length+1)
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

let res=''
//let res=(sspace.split(',').join(''))
res=sspace.split
res=sspace.join('')
console.log(res)*/

console.log('******************')

/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/




console.log('**********************')
/*
function myfun(dc){
  let firstsplit=dc.split(' ')
  var fulllength=0;

  for(var a=0;a<firstsplit.length;a++){
    if(fulllength<firstsplit[a].length){
      fulllength=firstsplit[a].length;
    }
  }
 return fulllength;
}

let cd=myfun('this is a  catdog mykitchen play thisislongwordis written')
console.log(cd)
*/
console.log('*********************')
/*
Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

Longest_Country_Name(
    ["Australia", 
    "Germany", 
    "United States of America"]
    )
Expected output : "United States of America"
*/
/*
function longarr(names)
{
  var longname=0;
  for(var len=0;len<names.length;len++){
    if(names[len].length>longname){
      longname=names[len].length;
    }

  }
  return longname;
}

let cr=longarr( ["Australia", 
"Germany Frankfurt Mainz Landau", 
"United States of America"])
console.log(cr)*/

console.log('************************')

/*
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
*/
/*
let str="A quick brown fox jumps right over the lazy dog the age four";
let sword=0;
  let ba=0;
 // var abc=[];

let cn=[...str].reduce(function(acc,val){
  
  if(val.toLowerCase()==='o')
  {
    ba= acc+1
    console.log(ba)

  }
  //console.log(ba)
  //abc.push(ba);
  if(val.toLowerCase()==='a')
  {
    sword= acc+1
    console.log(sword)

  }
//console.log(abc)
},0);

console.log(cn)*/

  
function myvowel(){
  let str=" A QUICK BROWN FOX JUMPS RIGHT OVER THE LAZY DOG JUMPS RIGHT LAZY DOG QUICK";
  let str2=str.toLowerCase();
  let sword='';
    let countero=0;
    let counteri=0;
    let counteru=0;
    sword=str2.split("")
    console.log(sword)
    for(i=0;i<sword.length;i++){
      if(sword[i]==='o'){
        countero=countero+1;
      }
      if(sword[i]==='i'){
       counteri=counteri+1;
      }
      if(sword[i]==='u'){
        counteru=counteru+1;
      }
      
    }
    console.log('I have found one O'+" "+countero)
    console.log('I have found one i'+" "+counteri)
    console.log('I have found one u'+" "+counteru)
      
}
myvowel()