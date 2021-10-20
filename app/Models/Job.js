import { generateId } from "../Utils/generateId.js"

export class Job {
  constructor(data) {
    this.id = generateId()
    this.position = data.position
    this.company = data.company
    this.salary = data.salary
    this.hours = data.hours
    this.imgUrl = data.imgUrl
    this.description = data.description
  }
  get Template() {
    return `
    <div class="col-md-3 mt-3">
      <div class="bg-light elevation-1 rounded">
        <img width="100%" class="car-img rounded-top" src="${this.imgUrl}" alt="job image">
        <div class="p-3">
          <p><b>${this.position} - ${this.company}</b></p>
          <p>${this.description}</p>
          <div class="d-flex align-items-center">
            <div style="background-color: ${this.salary}" class="color-swatch mx-2"></div>
            <p class="m-0"><em>Salary: $${this.salary}</em></p>
            </div>
            <div class="text-end">
            <button title="delete job" class='btn btn-danger justify-self-end' onclick="app.jobsController.deleteJob('${this.id}')"><i class='mdi mdi-delete'></i></button>
            </div>
        </div>
      </div>
    </div>
    `
  }
}