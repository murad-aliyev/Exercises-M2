/////Murad\\\\\

//1\\
const sentence = ['sense.', 'make', 'all', 'will', 'This'];


let reverseArray = (arr) => {

    return arr.reverse();
}

console.log(reverseArray(sentence));




//2\\
const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];

let greetAliens = (arr) => {

    arr.forEach(item => {
        console.log('Oh powerful '+item+', we humans offer our unconditional surrender!')
    });
}

greetAliens(aliens);



///3\\\
const coolStuff = [
    'gameboys',
    'skateboards',
    'backwards hats',
    'my room',
    'temporary tattoos'
  ];
  const myStuff = [
    'sweaters',
    'skateboards',
    'family-night',
    'my room'
  ];

  

  let justCoolStuff = (arr1,arr2) => {
    
    let a=[]

    arr1.forEach((item)=> {
        for(let i=0; i<arr2.length; i++){
            if(item==arr2[i]){
            a.push(item)
        }
        }
    });
    console.log(a)
}

 justCoolStuff(myStuff, coolStuff);
  


  ////4\\\\
  const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
  ];
  const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant' }
  ];

  let isTheDinnerVegan = (arr) => {
    

        for(let i=0; i<arr.length; i++){
            if((arr[i].source=='plant')){
            return true
        }else{
            return false
        }
        }
}
  
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));
