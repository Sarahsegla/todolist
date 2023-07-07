// imprting from uuid
import { v4 as uuidV4 } from 'uuid'


console.log("sarah")

// to specify the element so it knows its an unordered list element
const list = document.querySelector<HTMLUListElement>('#list')
// to specify the element so it knows its a form element
const form = document.querySelector<HTMLFormElement>('#form')
//to specify the element so it knows its an input element
const myInput = document.querySelector<HTMLInputElement>('#myInput')

form?.addEventListener("submit", e => {
  // dont refresh page
e.preventDefault()

// if input value is equal to empty string(has a value) or input value equal to null (nothing)return it
// optional chaining
if (myInput?.value == "" || myInput?.value == null) return 

const task = {
  // the id is uuidV4 that we have imported at the top
  id: uuidV4()
}




myInput.value
} )