import ExportPdf from "../src/pdf"

console.log("hello")

const pdf = ExportPdf(
  [{ title: "Name" }, { title: "City" }],
  [
    { Name: "Test 1", City: "City 1" },
    { Name: "Тест 2", City: "Град 2" },
  ]
)
