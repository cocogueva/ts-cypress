import orangeLogin from "../pages/orangeLogin";
import * as orange from "../fixtures/orange.json"; //Path is defined in ts config
describe('template spec', () => {
  let datao

  before(() => {
      cy.fixture('orange').then(data=>{
          datao = data
      })
  }); 

  it('Should access with the correct credentials', () => {
    cy.visit(orange.url)
    orangeLogin.login(datao.username,datao.password)

    cy.pickMenuItem('time/viewTimeModule')

    cy.pickMenuItem('recruitment/viewRecruitmentModule')

    cy.pickMenuItem('leave/viewLeaveModule')
    
    
});
})