import { Vehicle } from '../interfaces/Vehicle'
import { CarFactory } from '../factories/CarFactory'
import { BicycleFactory } from '../factories/BicycleFactory'
import { randomNumbers } from '../utils/randomNumbers'

export function randomCarAlgorithm (): Vehicle {
  const carFactory = new CarFactory()
  const bicycleFactory = new BicycleFactory()
  const car1 = carFactory.getVehicle('Fusca')
  const car2 = carFactory.getVehicle('Celta Preto')
  const bicycle = bicycleFactory.getVehicle('Bicicleta')
  const cars = [car1, car2, bicycle]
  return cars[randomNumbers(cars.length)]
}
