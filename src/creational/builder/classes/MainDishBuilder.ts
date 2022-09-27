import { Beans, Beverage, Dessert, Meat, Rice } from './Meals'
import { MealBox } from './MealBox'
import { MealBuilderProtocol } from './../interfaces/MealBuilderProtocol'

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox()

  reset (): this {
    this._meal = new MealBox()
    return this
  }

  makeMeal (): this {
    const arroz = new Rice('Arroz', 30)
    const feijao = new Beans('Feijão', 15)
    const carne = new Meat('Carne', 50)
    this._meal.add(arroz, feijao, carne)
    return this
  }

  makeBeverage (): this {
    const bebida = new Beverage('Bebida', 22)
    this._meal.add(bebida)
    return this
  }

  makeDessert (): this {
    const dessert = new Dessert('Sobremesa', 12)
    this._meal.add(dessert)
    return this
  }

  getMeal (): MealBox {
    return this._meal
  }

  getPrice (): number {
    return this._meal.getPrice()
  }
}
