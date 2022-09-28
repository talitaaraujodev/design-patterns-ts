import { EnterpriseVehicle } from './../vehicle/EnterpriseVehicle'
import { EnterpriseCustomer } from './../customer/EnterpriseCustomer'
import { AbstractVehicle } from './../vehicle/AbstractVehicle'
import { Customer } from '../customer/Customer'

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer (customerName: string): Customer {
    // logica
    return new EnterpriseCustomer(customerName)
  }

  createVehicle (vehicleName: string, customerName: string): AbstractVehicle {
    const customer = this.createCustomer(customerName)
    return new EnterpriseVehicle(vehicleName, customer)
  }
}
