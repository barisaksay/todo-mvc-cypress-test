export class TodoPage {
  navigate() {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");
  }

  addTodo(todoText) {
    cy.get(".new-todo").type(todoText + "{enter}");
  }

  verifyTodoText(todoIndex,expectedText){
    cy.get(`ul.todo-list li:nth-child(${todoIndex +1}) label`).should("contain.text", expectedText)
    cy.get(".toggle").should("not.be.checked");
  }

  markAsCompleted(todoIndex){
    cy.get(`ul.todo-list li:nth-child(${todoIndex +1}) .toggle`).click()
    cy.get(`ul.todo-list li:nth-child(${todoIndex +1}) label`).should("have.css","text-decoration-line","line-through")
  }

  removeTodo(todoIndex){
    cy.get(`ul.todo-list li:nth-child(${todoIndex +1}) button.destroy`).click({force:true})
  }

  clearCompleted(){
    cy.get("button.clear-completed").click()
  }
}
