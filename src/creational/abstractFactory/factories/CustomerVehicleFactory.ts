import { IndividualCar } from './../vehicle/IndividualVehicle'
import { IndividualCustomer } from '../customer/IndividualCustomer'
import { Customer } from '../customer/Customer'
import { AbstractVehicle } from '../vehicle/AbstractVehicle'

export class CreateVehicleCustomerFactory {
  createCustomer (customerName: string): Customer {
    // logica
    return new IndividualCustomer(customerName)
  }

  createVehicle (vehicleName: string, customerName: string): AbstractVehicle {
    const customer = this.createCustomer(customerName)
    return new IndividualCar(vehicleName, customer)
  }
}
