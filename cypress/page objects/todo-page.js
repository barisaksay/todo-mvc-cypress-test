export class TodoPage {
  
  //navigates to app
  navigate() {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");
  }

  //adds a todo with provided parameter as string
  addTodo(todoText) {
    cy.get(".new-todo").type(todoText + "{enter}");
  }

  //verifies the text after adding a todo
  verifyTodoText(todoIndex, expectedText) {
    cy.get(`ul.todo-list li:nth-child(${todoIndex + 1}) label`).should(
      "contain.text",
      expectedText
    );
    cy.get(".toggle").should("not.be.checked");
  }

  //marks a todo as completed
  markAsCompleted(todoIndex) {
    cy.get(`ul.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click();
    cy.get(`ul.todo-list li:nth-child(${todoIndex + 1}) label`).should(
      "have.css",
      "text-decoration-line",
      "line-through"
    );
  }

  //removes a todo (completed or not) by clicking on "x" which shows after hovering a todo
  removeTodo(todoIndex) {
    cy.get(`ul.todo-list li:nth-child(${todoIndex + 1}) button.destroy`).click({
      force: true,
    });
  }

  //Click on "clear completed" button to remove completed todos
  clearCompleted() {
    cy.get("button.clear-completed").click();
  }

  //removes toggle from a todo which is marked as completed
  reactivateTodo(todoIndex) {
    cy.get(`ul.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click();
    cy.get(`ul.todo-list li:nth-child(${todoIndex + 1}) label`).should(
      "not.have.css",
      "text-decoration-line",
      "line-through"
    );
  }

  //API status check
  successResponse() {
    cy.request("https://todomvc-app-for-testing.surge.sh/").as("todo-app");
    cy.get("@todo-app").its("status").should("equal", 200);
  }
}
