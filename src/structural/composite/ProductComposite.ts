// Componet
export abstract class ProductComponent {
  abstract getPrice (): number

  add (product: ProductComponent): void {}
  remove (product: ProductComponent): void {}
}
// Leaf
export class ProductLeaf extends ProductComponent {
  constructor (public name: string, public price: number) {
    super()
  }

  getPrice (): number {
    return this.price
  }
}
// Composite
export class ProductComposite extends ProductComponent {
  private readonly children: ProductComponent[] = []

  override add (...products: ProductComponent[]): void {
    products.forEach(product => this.children.push(product))
  }

  override remove (product: ProductComponent): void {
    const productIndex = this.children.indexOf(product)
    if (productIndex !== -1) {
      this.children.splice(productIndex, 1)
    }
  }

  getPrice (): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0)
  }
}
// Client
const camiseta = new ProductLeaf('Camiseta', 50)
const calca = new ProductLeaf('Calça', 80)
const short = new ProductLeaf('Short', 100)
const productBox = new ProductComposite()
productBox.add(camiseta, calca, short)

const tablet = new ProductLeaf('Tablet', 2000)
const kindle = new ProductLeaf('Kindle', 300)
const anotherProductBox = new ProductComposite()
anotherProductBox.add(tablet, kindle)
productBox.add(anotherProductBox)

console.log(productBox)
console.log(productBox.getPrice())
