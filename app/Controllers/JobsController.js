import { ProxyState } from "../AppState.js"
import { getJobForm } from "../Forms/Jobform.js"
import { jobsService } from "../Services/JobsService.js"

function _drawJobs() {
  const jobs = ProxyState.jobs
  let template = ''

  jobs.forEach(job => template += job.Template)

  document.getElementById('listings').innerHTML = template
}
export class JobsController {
  constructor() {
    ProxyState.on('jobs', _drawJobs)
  }
  createJob() {
    window.event.preventDefault()
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const formElem = window.event.target
    const jobData = {
      position: formElem.position.value,
      company: formElem.company.value,
      salary: formElem.salary.value,
      hours: formElem.hours.value,
      imgUrl: formElem.imgUrl.value,
      description: formElem.description.value
    }
    jobsService.createJob(jobData)
    // clear the form
    formElem.reset()
    // Close the modal
    // @ts-ignore
    bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
  }
  deleteJob(id) {
    jobsService.deleteJob(id)
  }
  showJobs() {
    _drawJobs()
    document.getElementById('form-button').classList.remove('visually-hidden')
    document.getElementById('modal-body-slot').innerHTML = getJobForm()
  }
}