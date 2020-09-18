function Student(name, mark) {
    this.name = name;
    this.mark = mark;
};
Student.prototype.averageMark = function() {
    return Math.round(this.mark.reduce( (acc, item) => acc += item, 0) / this.mark.length);
};
Student.prototype.minMark = function() {
    return this.mark.reduce( (prevVal, currVal) => prevVal < currVal ? prevVal: currVal);
};
Student.prototype.maxMark = function() {
    return this.mark.reduce( (prevVal, currVal) => prevVal > currVal ? prevVal: currVal);
};

// let student1 = new Student('John', [10, 9, 11, 8, 2, 5]);

// console.log(student1);

// console.log(student1.averageMark());
// console.log(student1.minMark());
// console.log(student1.maxMark());

// console.log(student1);

let students = fillArrayOfStudents();

console.log(students);

console.log(findMaxMark(students));


function findMaxMark(arrayOfStudents) {
    return arrayOfStudents.reduce( (preVal, currVal) =>
     preVal.maxMark.call(preVal) > currVal.maxMark.call(currVal) ? preVal : currVal, arrayOfStudents[0] );
}

function fillArrayOfStudents(size = 5) {
    arrayOfStudents = [];
    let names = ['John', 'Eleanor', 'Andrew', 'Ella', 'Maxim', 'Wyatt', 'Julian', 'Lily', 'Ellie'];

    for (let i = 0; i < size; i++) {
        arrayOfStudents[i] = new Student(names[ Math.floor( 0 + Math.random() * names.length ) ], function () {
            marks = [];

            for (let i = 0; i < Math.floor( 3 + Math.random() * 6 ); i++) {
                marks[i] = Math.abs( Math.floor( 1 + Math.random() * 10 ) );
            }

            return marks;
        }());
    }

    return arrayOfStudents;
}