describe('Hotel edit specs', () => {
  it('should navigate to second hotel when click on edit second hotel', () => {
    // Arrange


    // Act
    cy.loadAndVisit('/api/hotels', '/hotel-collection');

    cy.findAllByRole('button', {name: 'Edit Hotel'}).then(buttons => {
      buttons[1].click();
    })

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/hotel-edit/2');

  });

  it('should navigate to second hotel when click on edit second hotel', () => {
    // Arrange


    // Act
    cy.loadAndVisit('/api/hotels', '/hotel-collection');

    cy.route('GET', '/api/hotels/2').as('loadHotel');

    cy.findAllByRole('button', {name: 'Edit Hotel'}).then(buttons => {
      buttons[1].click();
    })

    cy.wait('@loadHotel');
    cy.findByLabelText('Name').clear().type('Update hotel two');
    cy.findByRole('button', { name: 'Save'}).click();

    // Assert
    cy.wait('@load');
    cy.findByText('Update hotel two');

  });
});
