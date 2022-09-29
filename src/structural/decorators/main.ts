import { TShirt } from './product/TShirt'
import { ProductStampDecorator } from './product/ProductStampDecorator'
import { ProductCustomizationDecorator } from './product/ProductCustomizationDecorator'

const tShirt = new TShirt()
const tShirtWithStamp = new ProductStampDecorator(tShirt)
const customizedTShirt = new ProductCustomizationDecorator(tShirt)

console.log(tShirt.getPrice(), tShirt.getName())
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName())
console.log(customizedTShirt.getPrice(), customizedTShirt.getName())
