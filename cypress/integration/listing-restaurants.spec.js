describe('Listing Restaurants', () => {
  it('show restaurants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    // 404 not found 대신 상태를 반환
    cy.server({force404: true});

    // 해당 url에 get 요청을 보내면 결과값으로 나온 response를  반환한다.
    cy.route({
      method: 'GET',
      url:
        'https://api.outsidein.dev/2GNCwU49pmiNCHNA3b79bcKdGcFayUya/restaurants',
      response: [
        {id: 1, name: sushiPlace},
        //{id: 2, name: pizzaPlace},
      ],
    });
    // ./페이지에 방문
    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
