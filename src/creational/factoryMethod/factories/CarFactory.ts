import { VehicleFactory } from './VehicleFactory'
import { Car } from '../vehicle/Car'
import { Vehicle } from '../interfaces/Vehicle'

export class CarFactory extends VehicleFactory {
  getVehicle (vehicleName: string): Vehicle {
    return new Car(vehicleName)
  }
}
