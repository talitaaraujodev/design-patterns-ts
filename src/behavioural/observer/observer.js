// ConcreteObservable
const InputObservable = /** @class */ (function () {
  function InputObservable (element) {
    this.element = element
    this.observers = []
  }
  InputObservable.prototype.subscribe = function () {
    const _this = this
    const observers = []
    for (let _i = 0; _i < arguments.length; _i++) {
      observers[_i] = arguments[_i]
    }
    observers.forEach(function (observer) {
      if (!_this.observers.includes(observer)) {
        _this.observers.push(observer)
      }
    })
  }
  InputObservable.prototype.unsubscribe = function (observer) {
    const observerIndex = this.observers.indexOf(observer)
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1)
    }
  }
  InputObservable.prototype.notify = function () {
    const _this = this
    this.observers.forEach(function (observer) { return observer.update(_this) })
  }
  return InputObservable
}())
// Concrete Observer
const ParagraphObserver = /** @class */ (function () {
  function ParagraphObserver (element) {
    this.element = element
  }
  ParagraphObserver.prototype.update = function (observable) {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value
    }
  }
  return ParagraphObserver
}())
// Concrete Observer
const DivObserver = /** @class */ (function () {
  function DivObserver (element) {
    this.element = element
  }
  DivObserver.prototype.update = function (observable) {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value
    }
  }
  return DivObserver
}())
// Cliente code
function makeInput () {
  const input = document.createElement('input')
  document.body.appendChild(input)
  return input
}
function makeParagraph () {
  const p = document.createElement('p')
  document.body.appendChild(p)
  p.innerText = 'Texto inicial (Hardcoded)'
  return p
}
function makeDiv () {
  const div = document.createElement('div')
  document.body.appendChild(div)
  div.innerText = 'Texto da DIV'
  return div
}
const input = new InputObservable(makeInput())
const p1 = new ParagraphObserver(makeParagraph())
const p2 = new ParagraphObserver(makeParagraph())
const div1 = new DivObserver(makeDiv())
input.subscribe(p1, p2, div1)
input.element.addEventListener('keyup', function () {
  input.notify()
})
input.unsubscribe(p2)
