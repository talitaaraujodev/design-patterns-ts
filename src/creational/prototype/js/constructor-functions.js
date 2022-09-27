function Person (firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,

  fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}
Person.prototype = Object.create(personPrototype)
Person.prototype.constructor = Person

function SubPerson (firstName, lastName, age) {
  Person.call(this, firstName, lastName, age)
  this.fromSubClass = 'OIII'
}
SubPerson.prototype = Object.create(Person.prototype)
SubPerson.prototype.constructor = SubPerson

const person1 = new Person('Luiz', 'Miranda', 50)
console.log(person1)
console.log(person1.fullName())
