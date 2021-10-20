import { Car } from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car({ make: 'Tesla', model: 'CyberTruck', year: 2022, price: 1000000, color: '#C0C0C0', description: 'This thing is sleek, new WINDOWS!!!', imgUrl: 'https://media.wired.com/photos/5dd82f459ac14a0008116985/4:3/w_1412,h_1059,c_limit/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg' }),
    new Car({ make: 'Mystery', model: 'Machine', year: 1987, price: 29389, color: '#249255', description: 'Smell like teenagers and a dog in here', imgUrl: 'https://www.nydailynews.com/resizer/9_FBW7nzQALkDYNMcdQL8XHAaG8=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4LB77NIIQWOB7WZU5VLNX6J5XA.JPG' }),
    new Car({ make: 'Ford', model: 'Pinto', year: 1980, price: 1488, color: '#900d09', description: 'This car is HOT!!!', imgUrl: 'https://i.ytimg.com/vi/1mqu-gRqt3g/hqdefault.jpg' })
  ]

  houses = [
    new House({ address: '1111 N. Random Way', neighborhood: 'Tuscany', color: '#249255', price: 1000000, imgUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', built: 1950, description: 'This house is haunted' }),
    new House({ address: '1111 N. Random Way', neighborhood: 'Tuscany', color: '#249255', price: 1000000, imgUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', built: 1950, description: 'This house is haunted' }),
    new House({ address: '1111 N. Random Way', neighborhood: 'Tuscany', color: '#249255', price: 1000000, imgUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', built: 1950, description: 'This house is haunted' }),

  ]

  jobs = [
    new Job({ position: 'Janitor', company: 'Boise State', salary: 100000, hours: 40, description: 'Clean stuff', imgUrl: 'https://images.unsplash.com/photo-1625314563148-572c6af9e9d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1446&q=80' }),
    new Job({ position: 'Janitor', company: 'Boise State', salary: 100000, hours: 40, description: 'Clean stuff', imgUrl: 'https://images.unsplash.com/photo-1625314563148-572c6af9e9d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1446&q=80' }),
    new Job({ position: 'Janitor', company: 'Boise State', salary: 100000, hours: 40, description: 'Clean stuff', imgUrl: 'https://images.unsplash.com/photo-1625314563148-572c6af9e9d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1446&q=80' })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
