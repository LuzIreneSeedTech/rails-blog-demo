import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {}
  connect() {}
  toggleForm(event) {
    console.log("I clicked the edit button.")
    event.preventDefault()
    event.stopPropagation()

    const formID = event.params["form"]
    const commentBodyID = event.params["body"]
    const editButtonID = event.params["edit"]

    const form = document.getElementById(formID)
    form.classList.toggle("d-none")
    form.classList.toggle("mt-5")

    const commentBody = document.getElementById(commentBodyID)
    commentBody.classList.toggle("d-none")

    const editButton = document.getElementById(editButtonID)
    this.toggleEditButton(editButton)
  }

  toggleEditButton(editButton) {
    if (editButton.innerText === "Edit") {
      editButton.innerText = "Cancel"
      this.toggleEditButtonClass(editButton)
    } else {
      editButton.innerText = "Edit"
      this.toggleEditButtonClass(editButton)
    }
  }

  toggleEditButtonClass(editButton) {
    editButton.classList.toggle("btn-secondary")
    editButton.classList.toggle("btn-warning")
  }
}

// connect() 
// -> only fires when it manages to connect to the rails app


// initialize()
// -> only run once
