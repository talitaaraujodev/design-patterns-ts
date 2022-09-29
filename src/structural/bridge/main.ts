import { Radio } from './device/radio'
import { Tv } from './device/tv'
import { RemoteControl } from './remoteControl/RemoteControl'
import { RemoteControlWithVolume } from './remoteControl/RemoteControlWithVolume'

function clientCode (abstraction: RemoteControl | RemoteControlWithVolume): void {
  abstraction.togglePower()
  // Type Guard
  if (!('volumeUp' in abstraction)) return
  abstraction.volumeUp() // 20
  abstraction.volumeUp() // 30
  abstraction.volumeUp() // 20
}

const tv = new Tv()
const radio = new Radio()

const radioRemoteControl = new RemoteControl(radio)
clientCode(radioRemoteControl)

const tvRemoteControl = new RemoteControlWithVolume(tv)
clientCode(tvRemoteControl)
