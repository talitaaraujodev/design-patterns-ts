import { Customer } from './../customer/Customer'
import { AbstractVehicle } from '../vehicle/AbstractVehicle'

export class EnterpriseVehicle implements AbstractVehicle {
  constructor (public name: string, private readonly customer: Customer) {}

  pickup (): void {
    console.log(`${this.name} está buscando ${this.customer.name} (ENTERPRISE)`)
  }
}
