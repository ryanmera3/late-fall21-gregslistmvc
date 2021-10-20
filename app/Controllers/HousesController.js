import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Forms/Houseform.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
  const houses = ProxyState.houses
  let template = ''

  houses.forEach(house => template += house.Template)

  document.getElementById('listings').innerHTML = template
  document.getElementById('nav-color').classList.remove('bg-primary')
  document.getElementById('nav-color').classList.remove('bg-dark')
  document.getElementById('nav-color').classList.remove('bg-grey')
  document.getElementById('nav-color').classList.add('bg-secondary')
}
export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }
  createHouse() {
    window.event.preventDefault()
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const formElem = window.event.target
    const houseData = {
      address: formElem.address.value,
      color: formElem.color.value,
      price: formElem.price.value,
      imgUrl: formElem.imgUrl.value,
      built: formElem.built.value,
      description: formElem.description.value
    }
    housesService.createHouse(houseData)
    // clear the form
    formElem.reset()
    // Close the modal
    // @ts-ignore
    bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
  }
  deleteHouse(id) {
    housesService.deleteHouse(id)
  }
  showHouses() {
    _drawHouses()
    document.getElementById('form-button').classList.remove('visually-hidden')
    document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  }
}