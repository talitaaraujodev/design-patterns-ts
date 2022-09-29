import { DeviceImp } from '../device/DeviceImp'

export class RemoteControl {
  constructor (protected device: DeviceImp) {}

  togglePower (): void {
    this.device.setPower(!this.device.getPower())
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`${this.device.getName()} power status: ${this.device.getPower()}`)
  }
}
