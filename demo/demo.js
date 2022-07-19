import ExportPdf from "../src/pdf"
import {} from "./Roboto-Medium-normal"
import {} from "./Helvetica_400-normal"

console.log("hello")

const pdf = ExportPdf(
  [{ title: "Name" }, { title: "City" }],
  [
    { Name: "Test 1", City: "City 1" },
    { Name: "Тест 2", City: "Град 2", font: "Roboto-Medium" },
  ]
)
