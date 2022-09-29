import { DeviceImp } from './DeviceImp'

export class Tv implements DeviceImp {
  private volume: number = 10
  private power: boolean = false
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private name: string = 'TV'

  getName (): string {
    return this.name
  }

  setPower (powerStatus: boolean): void {
    this.power = powerStatus
  }

  getPower (): boolean {
    return this.power
  }

  setVolume (volume: number): void {
    if (volume < 0) return
    if (volume > 100) return
    this.volume = volume
  }

  getVolume (): number {
    return this.volume
  }
}
