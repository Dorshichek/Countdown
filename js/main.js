import {UI_ELEMENTS} from "./ui_elements.js";
import {formatDistanceToNowStrict} from "date-fns";

UI_ELEMENTS.BUTTON.addEventListener('click', sendDate)

function sendDate() {
  event.preventDefault()
  const inputValue = UI_ELEMENTS.INPUT.value
  const date = formatDistanceToNowStrict(new Date(inputValue), {unit: "day"}).slice(-8, -4)
  const result = 'Разница между датами' + ' ' + date + 'день/дней'
  UI_ELEMENTS.SPAN.textContent = result
  console.log(result)
}
