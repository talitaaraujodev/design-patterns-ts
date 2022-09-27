import { MealCompositeProtocol } from '../interfaces/MealCompositeProtocol'

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor (private readonly name: string, private readonly price: number) {}

  getPrice (): number {
    return this.price
  }
}
