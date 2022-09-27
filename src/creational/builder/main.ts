import { MainDishBuilder } from './classes/MainDishBuilder'
import { VeganDishBuilder } from './classes/VeganDishBuilder'

// antes de usar o padrão build
// O cliente não precisa criar objetos diretamente
// const arroz = new Rice('Arroz', 30)
// const feijao = new Beans('Feijão', 15)
// const carne = new Meat('Carne', 50)
// const mealBox = new MealBox()

// mealBox.add(arroz, feijao, carne)
// console.log(mealBox)

const mainDishBuilder = new MainDishBuilder()
mainDishBuilder.makeMeal().makeDessert()
console.log(mainDishBuilder.getMeal())
console.log(mainDishBuilder.getPrice())

mainDishBuilder.reset()
const meal2 = mainDishBuilder.makeBeverage().getMeal()
console.log(meal2)

const veganDishBuilder = new VeganDishBuilder()
const veganMeal = veganDishBuilder.makeMeal().getMeal()
console.log(veganMeal)
