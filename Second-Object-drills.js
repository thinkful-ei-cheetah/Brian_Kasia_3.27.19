'use strict';
//object initializers and methods
const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
};
console.log(loaf.hydration());
console.log(loaf.flour, loaf.water);

//iterating over object's properties
const funnyObj = {
  foo: 'Brian',
  bar: 50,
  fum: 'developer',
  quux: 'blaabla',
  spam: ' lalalalaaaaa'
};
for (let item in funnyObj) {
  console.log(funnyObj[item]);
}

//arrays in objects
const hobbitM = {
  meals: ['breakfast','second breakfast','elevenses','lunch','afternoon tea','dinner','supper']
};
console.log(hobbitM.meals[3]);


//arrays of objects + properties that aren't there
const company = [
  {name:'kasia', jobTitle: 'student', boss: 'Jim'},
  {name: ' Brian', jobTitle: 'student', boss: 'Jim'},
  {name: ' jeff' ,jobTitle: 'instructor', boss: 'Jim'},
  {name: 'Uzair', jobTitle:'mentor', boss: 'Jim' },
  {name: 'Jim' ,jobTitle: 'owner'}
];

company.forEach(function(person){
  console.log(person.name, person.jobTitle);
    
});

company.forEach(function(person){
  if (!person.boss){
    console.log(`${person.jobTitle} ${person.name} reports to nobody`);
  } else {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
  }
});



//Cracking the code:  

const codingObj = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};
function decode(str){
  let codingArr = Object.keys(codingObj);
  let myArr = [];
  str.split(' ').forEach(function(elem){
    console.log('hi');
    if (elem[0] === codingArr[0]){
      myArr.push(elem[1]);
      console.log(myArr);
    }else if (elem[0] === codingArr[1]){
      myArr.push(elem[2]);
    }else if (elem[0] === codingArr[2]){
      myArr.push(elem[3]);
    }else if (elem[0] === codingArr[3]){
      myArr.push(elem[4]);
    }else {
      myArr.push(' ');
    }
  });
  return myArr.join('');
}
console.log(decode('craft block argon meter bells brown croon droop'));


//Database Search:

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];


function findOne(arr, obj){
  let objId = Object.keys(obj).toString();
  let objNum = Object.values(obj)[0];
  
  return arr.find(function(hero){
    if (objId in hero){
      if (hero[objId] === objNum) {
        return hero;
      }
    }
  });
}
console.log(findOne(HEROES, { id:5}));

//factory functions

function createCharacter(name,nickname,race, origin, attack, defense){
  return {
    name: name, // arr[0] vs. name
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
    evaluateFight: function(enemy){
      let given;
      let taken;
      if (this.defense > enemy.attack){
        taken = 0;
      } else {
        taken = Math.abs(this.defence - enemy.attack);
      }
      if (enemy.defense > this.attack) {
        given = 0;
      } else {
        given = Math.abs(enemy.defence - this.attack);
      }
      console.log(`Your opponent takes ${given} damage and you receive ${taken} damage`);
    }
  };
}
const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'Aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
  createCharacter('Arwen Undomiel', 'arwen', 'half-elf', 'Rivendell', 22, 8)
];
console.log(characters);

const findAragorn = characters.find(function(item){
  return item.nickname === 'Aragorn';
});
findAragorn.describe();


const findHobbits = characters.filter(function(item){
  return item.race === 'Hobbit';
});

const fighters = characters.filter(function(item){
  return item.attack > 5;
});

console.log(createCharacter('kasia','km','imaginary','poland',12,23));
createCharacter('Jacob','Jake','Wizard','poland',12,23).evaluateFight({attack: 4, defence: 2});
console.log(findAragorn);

console.log(findHobbits);
console.log(fighters);