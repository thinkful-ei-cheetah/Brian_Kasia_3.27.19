'use strict';
const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
};
console.log(loaf.hydration());
console.log(loaf.flour, loaf.water);

const funnyObj = {
  foo: "Brian",
  bar: 50,
  fum: "developer",
  quux: "blaabla",
  spam: " lalalalaaaaa"
};
for (let item in funnyObj) {
  console.log(funnyObj[item]);
}

const hobbitM = {
  meals: ['breakfast','second breakfast','elevenses','lunch','afternoon tea','dinner','supper']
};
console.log(hobbitM.meals[3]);

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


  meals: [
    'breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ]
};
console.log(hobbitM.meals[3]);

const obj = [
  {
    name: 'Kasia',
    jobTitle: 'student',
    boss: 'Jim'
  },
  {
    name: 'Brian',
    jobTitle: 'student',
    boss: 'Jordan'
  },
  {
    name: 'Jordan',
    jobTitle: 'Program Manager',
    boss: 'Rich'
  },
  {
    name: 'Rich',
    jobTitle: 'instructor, CEO'
  }
];

obj.forEach(person => {
  console.log(person.name, person.jobTitle);
});

obj.forEach(person => {
  if (!person.boss) {
    console.log(
      `"${person.jobTitle} ${person.name} doesn't report to anybody."`
    );
  } else {
    console.log(
      `"${person.jobTitle} ${person.name} reports to ${person.boss}."`
    );
  }
});
