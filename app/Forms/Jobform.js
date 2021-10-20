export function getJobForm() {
  return /*html*/`
  <form onsubmit="app.jobsController.createJob()">
  <div class="mb-3 d-flex justify-content-between">
  <div>
    <label for="position" class="form-label">Position</label>
    <input type="text" class="form-control" name="position" id="position" aria-describedby="position"
      placeholder="Position..." required>
  </div>
  <div>
    <label for="company" class="form-label">Company</label>
    <input type="text" class="form-control" name="company" id="company" aria-describedby="company"
      placeholder="Company..." required>
  </div>
</div>
<div class="mb-3 d-flex justify-content-between">
  <div>
    <label for="salary" class="form-label">Salary in</label>
    <input type="number" class="form-control" name="salary" id="salary" aria-describedby="salary"
      placeholder="Salary..."  required>
  </div>
  <div>
    <label for="hours" class="form-label">Hours</label>
    <input type="number" class="form-control" name="hours" id="hours" aria-describedby="hours"
      placeholder="Hours..." min='1' required>
  </div>
</div>
<div class="mb-3">
  <div>
    <label for="imgUrl" class="form-label">Image Url</label>
    <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
      placeholder="Image Url..." required>
  </div>
</div>
<div class="mb-3">
  <div>
    <label for="description" class="form-label">Description</label>
    <textarea type="text" class="form-control" name="description" id="description"
      aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
  </div>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="submit" class="btn btn-primary">Create</button>
</div>
</form>
  `
}