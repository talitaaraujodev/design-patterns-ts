import { IndividualCar } from '../vehicle/IndividualVehicle'
import { Customer } from '../customer/Customer'
import { AbstractVehicle } from '../vehicle/AbstractVehicle'
import { IndividualCustomer } from '../customer/IndividualCustomer'

export class IndividualCreateVehicleCustomerFactory {
  createCustomer (customerName: string): Customer {
    return new IndividualCustomer(customerName)
  }

  createVehicle (vehicleName: string, customerName: string): AbstractVehicle {
    const customer = this.createCustomer(customerName)
    return new IndividualCar(vehicleName, customer)
  }
}
