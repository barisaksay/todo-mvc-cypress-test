/// <reference types = "cypress" />

import { TodoPage } from "../page objects/todo-page";

describe("todo actions", () => {
  const todoPage = new TodoPage();

  beforeEach(() => {
    todoPage.navigate();
    todoPage.addTodo("Clean Room");
    cy.request("https://todomvc-app-for-testing.surge.sh/")
  
  });

  it("should add a todo", () => {
    //todo item is created by the code in beforeEach block. Below line does the verification.
    todoPage.verifyTodoText(0, "Clean Room");
  });

  it("should mark todo as completed", () => {
    todoPage.markAsCompleted(0);
  });
/*
  it("should clear completed todos", () => {
    cy.get(".toggle").click();
    cy.contains("Clear").click();
    cy.get(".todo-list").should("not.have.descendants", "li");
  });
*/
  it("should remove a todo",()=>{
    todoPage.removeTodo(0);
});

it("should clear completed todos",()=>{
  todoPage.verifyTodoText(0,"Clean Room")
  todoPage.markAsCompleted(0);
  todoPage.clearCompleted()
})
})