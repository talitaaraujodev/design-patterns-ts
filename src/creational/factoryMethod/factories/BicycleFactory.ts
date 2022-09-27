import { VehicleFactory } from './VehicleFactory'
import { Vehicle } from '../interfaces/Vehicle'
import { Bicycle } from '../vehicle/Bicycle'

export class BicycleFactory extends VehicleFactory {
  getVehicle (vehicleName: string): Vehicle {
    return new Bicycle(vehicleName)
  }
}
