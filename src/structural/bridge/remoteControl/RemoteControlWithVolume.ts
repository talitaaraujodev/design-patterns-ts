import { RemoteControl } from './RemoteControl'

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp (): void {
    const oldVolume = this.device.getVolume()
    this.device.setVolume(this.device.getVolume() + 10)
    console.log(`${this.device.getName()} tinha o volume ${oldVolume} agora tem ${this.device.getName()}`)
  }

  volumeDown (): void {
    const oldVolume = this.device.getVolume()
    this.device.setVolume(this.device.getVolume() - 10)
    console.log(`${this.device.getName()} tinha o volume ${oldVolume} agora tem ${this.device.getName()}`)
  }
}
