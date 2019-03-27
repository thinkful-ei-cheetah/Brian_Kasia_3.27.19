'use strict';
function createObj(){
  const myObj = {};
  myObj.foo = 'bar',
  myObj.answerToUniverse = 42,
  myObj.sayHello = function(){
    console.log('hello');
  };
  return myObj;
}
console.log(createObj());


const objA={
  fan : 'balbala',
};
function updateObject(obj){
  obj.foo ='foo',
  obj.bar = 'bar',
  obj.bizz = 'bizz',
  obj.bang ='bang';
  return obj;
}
console.log(updateObject(objA));

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    }
  };
  return person;
}
console.log(personMaker());

const sampleObj = {
  //foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};
function keyDeleter(obj) {
  if(!obj.hasOwnProperty('foo')){
    console.log('no property')
  }
  delete obj.foo;
  delete obj.bar;
  return obj;
}
console.log(keyDeleter(sampleObj));

