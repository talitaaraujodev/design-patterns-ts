import { ProductDecorator } from './ProductDecorator'

export class ProductStampDecorator extends ProductDecorator {
  override getName (): string {
    return this.product.getName() + ' (Estampada)'
  }

  override getPrice (): number {
    return this.product.getPrice() + 10
  }
}
