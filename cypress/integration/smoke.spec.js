describe('Smoke Test', () => {
  it('can view the home page', () => {
    // baseUrl + visit 에 방문했을때
    cy.visit('/');
    // 'Learn React' 텍스트가 있는지 확인한다.
    cy.contains('Hello, world.');
  });
});
