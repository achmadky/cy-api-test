describe('PET CRUD', ()=> {

    it('/POST - I should be able to create a new pet', ()=> {
        const PET = 
        {
            "id": 0,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }

        cy.request('POST', 'https://petstore.swagger.io/v2/pet', PET).then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/GET - I should be able to find pet by ID', ()=> {
        cy.request('GET', 'https://petstore.swagger.io/v2/pet/1').then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/GET - I should be able to find pet by status', ()=> {
        cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=pending&status=sold').then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/PUT - I should be able to update a pet', ()=> {
        const UPDATED =
        {
            "id": 0,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }

        cy.request('PUT', 'https://petstore.swagger.io/v2/pet', UPDATED).then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/DELETE - I should be able to delete a pet', ()=> {
        cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/1').then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

});