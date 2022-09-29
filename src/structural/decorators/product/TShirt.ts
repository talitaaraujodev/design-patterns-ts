import { ProductProtocol } from './ProductProtocol'

export class TShirt implements ProductProtocol {
  private readonly name = 'Camiseta'
  private readonly price = 50
  getPrice (): number {
    return this.price
  }

  getName (): string {
    return this.name
  }
}
