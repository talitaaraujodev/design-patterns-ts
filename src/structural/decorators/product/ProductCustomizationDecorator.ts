import { ProductDecorator } from './ProductDecorator'

export class ProductCustomizationDecorator extends ProductDecorator {
  override getName (): string {
    return this.product.getName() + ' (Customizada)'
  }

  override getPrice (): number {
    return this.product.getPrice() + 50
  }
}
