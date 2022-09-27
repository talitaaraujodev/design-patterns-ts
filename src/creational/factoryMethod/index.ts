import { randomCarAlgorithm } from './main/randomVehicleAlgorithm'
import { randomNumbers } from './utils/randomNumbers'
import { CarFactory } from './factories/CarFactory'

const carFactory = new CarFactory()
const customerNames = ['Ana', 'Joana', 'Helena', 'João']

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm()
  const name = customerNames[randomNumbers(customerNames.length)]
  vehicle.pickUp(name)
  vehicle.stop()
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`)
  newCar.stop()
  console.log('---')
}
