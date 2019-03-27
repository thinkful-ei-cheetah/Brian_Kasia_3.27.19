function makeStudentReport(data) {
  let results = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    results.push(`${this.name}: ${this.grade}`);
  }
  return results;
}

console.log(results);

function enrollInSummerSchool(students) {
  return students.map(student => {
    return {
      name: student.name,
      status: "In Summer school",
      course: student.course
    };
  });
}

const scratchData = [
  { id: 22, foo: "bar" },
  { id: 28, foo: "bizz" },
  { id: 19, foo: "bazz" }
];

function findById(items, idNum) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === idNum) {
      return items[i];
    }
  }
}

console.log(findById(scratchData, 22));

const objectA = {
  id: 2,
  name: "Jane Doe",
  age: 34,
  city: "Chicago"
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: "Peoria"
};

const expectedKeys = ["id", "name", "age", "city"];

function validateKeys(object, expectedKeys) {
  const newArr = Object.keys(object);

  if (newArr.length !== expectedKeys.length) {
    return false;
  }

  for (let i = 0; i < expectedKeys.length; i++) {
    if (expectedKeys[i] !== newArr[i]) {
      return false;
    }
  }
  return true;
}
