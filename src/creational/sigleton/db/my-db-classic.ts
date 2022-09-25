// Singleton: permite a centralização de compartilhamento de recursos.
// Viola o SRP
import { User } from '../interfaces/User'

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null
  private readonly users: User[] = []

  private constructor () {}

  static get instance (): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic()
    }
    return MyDatabaseClassic._instance
  }

  add (user: User): void {
    this.users.push(user)
  }

  remove (index: number): void {
    this.users.splice(index, 1)
  }

  show (): void {
    for (const user of this.users) {
      console.log(user)
    }
  }
}
