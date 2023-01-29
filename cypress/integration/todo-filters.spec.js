/// <reference types = "cypress" />

import { TodoPage } from "../page objects/todo-page";

describe("", () => {
    const todoPage = new TodoPage();
  
    it("should verify that filters are not present with no todo", () => {
      todoPage.navigate();
      cy.get(".main").should("not.have.descendants", "ul.filters");
    });
  });

describe("todo app filter tests", () => {
  const todoPage = new TodoPage();

  beforeEach(() => {
    todoPage.navigate();
    todoPage.addTodo("Clean Room");
  });

  it("should verify filter is set to 'All'  by default", () => {
    cy.get(".filters li > a.selected").contains("All");
  });

  it("should select 'active' filter", () => {
    todoPage.selectFilter("Active");
  });

  it("should select 'Completed' filter", () => {
    todoPage.addTodo("Completed todo");
    todoPage.markAsCompleted(0);
    todoPage.selectFilter("Completed");
  });

  it("should select'All' filter", () => {
    todoPage.addTodo("Completed todo");
    todoPage.markAsCompleted(0);
    todoPage.selectFilter("Completed");
    todoPage.selectFilter("All");
  });
});


