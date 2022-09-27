import { Beans, Rice } from './Meals'
import { MealBox } from './MealBox'
import { MealBuilderProtocol } from './../interfaces/MealBuilderProtocol'

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox()

  reset (): this {
    this._meal = new MealBox()
    return this
  }

  makeMeal (): this {
    const arroz = new Rice('Arroz', 30)
    const feijao = new Beans('Feijão', 15)
    this._meal.add(arroz, feijao)
    return this
  }

  getMeal (): MealBox {
    return this._meal
  }

  getPrice (): number {
    return this._meal.getPrice()
  }
}
