describe('STORE CRUD', ()=> {

    it('/POST - I should be able to create order for a pet', ()=> {
        const ORDER = 
        {
            "id": 0,
            "petId": 0,
            "quantity": 0,
            "shipDate": "2021-12-21T11:17:28.196Z",
            "status": "placed",
            "complete": true
          }

        cy.request('POST', 'https://petstore.swagger.io/v2/store/order', ORDER).then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/GET - I should be able to find order by ID', ()=> {
        cy.request('GET', 'https://petstore.swagger.io/v2/store/order/1').then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/GET - I should be able to find inventory by status', ()=> {
        cy.request('GET', 'https://petstore.swagger.io/v2/store/inventory').then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/DELETE - I should be able to delete a purchase order by id', ()=> {
        cy.request('DELETE', 'https://petstore.swagger.io/v2/store/order/1').then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });
});