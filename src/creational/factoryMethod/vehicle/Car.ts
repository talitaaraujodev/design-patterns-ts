import { Vehicle } from './../interfaces/Vehicle'

export class Car implements Vehicle {
  constructor (private readonly name: string) {}

  pickUp (customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`)
  }

  stop (): void {
    console.log(`${this.name} parou`)
  }
}
