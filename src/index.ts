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

const newToDo = {
  // the id is uuidV4 that we have imported at the top
  id: uuidV4(),
  title: myInput.value,
  completed: false,
  whenCreated: new Date(),
}

addListItem(newToDo)

} )

function addListItem(toDo: {
  id: string,
  title: string,
  completed: boolean,
  whenCreated: Date,

  

}) {
  // creating the element li (list) and putting it in item variable
  const item = document.createElement('li')
  const label = document.createElement('label')
  const tickbox = document.createElement('input')
  // type of the boc is checkbox
  tickbox.type = 'checkbox'
 // inside the label should be tickox and my to do
  label.append(tickbox, toDo.title)
 // inside item (li) should be my label
  item.append(label)
  // if theres anything on the list. show it
  list?.append(item)

}