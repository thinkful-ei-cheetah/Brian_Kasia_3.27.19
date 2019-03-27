'use strict';
const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water / this.flour)* 100;
  }
};
console.log(loaf.hydration());
console.log(loaf.flour, loaf.water);

const funnyObj = {
    foo: 'Brian',
    bar: 50,
    fum: 'developer',
    quux: 'blaabla',
    spam: ' lalalalaaaaa',
}
for( let item in funnyObj){
    console.log(funnyObj[item]);
}

const hobbitM = {
    meals: ['breakfast','second breakfast','elevenses','lunch','afternoon tea','dinner','supper']
}
console.log(hobbitM.meals[3]);