describe('Hotel collection specs', () => {
  it('should fetch hotel list and show it in screen when visit /hotel-collection url', () => {
    // Arrange
    // Act
    cy.visit('/hotel-collection');

    // Assert
    cy.findAllByRole('listitem').should('have.length', 10);
  });
});

import { HotelEntityApi } from '../../src/pods/hotel-collection/api';

describe('Hotel collection specs', () => {
  it('should fetch hotel list and show it in screen when visit /hotel-collection url', () => {
    // Arrange
    // Act
    cy.visit('/hotel-collection');

    // Assert
    cy.findAllByRole('listitem').should('have.length', 10);
  });

  it('should fetch hotel list greater than 0 when visit /hotel-collection url', () => {
    // Arrange
    // Act
    cy.visit('/hotel-collection');

    // Assert
    cy.findAllByRole('listitem').should('have.length.greaterThan', 0);
  });

  it('should fetch two hotels when visit /hotel-collection url', () => {
    // Arrange

    cy.server();
    // cy.fixture('hotels').then((hotels) => {
    //   cy.route('GET', '/api/hotels', hotels);
    // });

    cy.route('GET', '/api/hotels', 'fixture:hotels').as('fetchHotels');

    // Act
    cy.visit('/hotel-collection');

    // Assert
    cy.wait('@fetchHotels');
    cy.findAllByRole('listitem').should('have.length', 2);
  });
});
