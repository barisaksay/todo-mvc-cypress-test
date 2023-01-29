/// <reference types = "cypress" />

import { TodoPage } from "../page objects/todo-page";

describe("todo actions", () => {
  const todoPage = new TodoPage();

  beforeEach(() => {
    todoPage.navigate();
    todoPage.addTodo("Clean Room");
    cy.request("https://todomvc-app-for-testing.surge.sh/");
  });

  it("should add a todo", () => {
    //todo item is created by the code in beforeEach block. Below line does the verification.
    todoPage.verifyTodoText(0, "Clean Room");
  });

  it("should mark todo as completed", () => {
    todoPage.markAsCompleted(0);
  });

  it("should re-activate a completed todo", () => {
    todoPage.markAsCompleted(0);
    todoPage.reactivateTodo(0);
  });

  it("should remove a todo", () => {
    todoPage.removeTodo(0);
  });

  it("should clear completed todos", () => {
    todoPage.verifyTodoText(0, "Clean Room");
    todoPage.markAsCompleted(0);
    todoPage.clearCompleted();
  });

  it("should edit a todo", () => {
    todoPage.editTodo(0, "Learn Cypress");
    todoPage.verifyTodoText(0, "Learn Cypress");
  });
});
