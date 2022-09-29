import { DeviceImp } from './DeviceImp'

export class Radio implements DeviceImp {
  private volume = 10
  private power = false
  private readonly name = 'Radio'

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
