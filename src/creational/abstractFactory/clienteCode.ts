import { EnterpriseCreateVehicleCustomerFactory } from './factories/EnterpriseVehicleCustomer'
import { IndividualCreateVehicleCustomerFactory } from './factories/IndividualCustomerVehicleFactory'

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory()
const individualFactory = new IndividualCreateVehicleCustomerFactory()

const car1 = enterpriseFactory.createVehicle('Fusca', 'João')
const car2 = individualFactory.createVehicle('Celta', 'Maria')

car1.pickup()
car2.pickup()
