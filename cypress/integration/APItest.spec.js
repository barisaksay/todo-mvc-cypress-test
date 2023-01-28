/// <reference types = "cypress" />

import { TodoPage } from "../page objects/todo-page"


describe("API tests",()=>{
    const todoPage = new TodoPage;
    it("should return status-200",()=>{
        todoPage.navigate()
        todoPage.successResponse()
    })
  })