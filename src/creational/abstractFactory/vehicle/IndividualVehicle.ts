import { Customer } from '../customer/Customer'
import { AbstractVehicle } from '../vehicle/AbstractVehicle'

export class IndividualCar implements AbstractVehicle {
  constructor (public name: string, private readonly customer: Customer) {}

  pickup (): void {
    console.log(`${this.name} está buscando ${this.customer.name} (INDIVIDUAL)`)
  }
}
