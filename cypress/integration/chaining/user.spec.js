describe('User CRUD', ()=> {

    it('/POST - I should be able to create list of user with input array', ()=> {
        const ORDER = 
        [
            {
              "id": 0,
              "username": "string",
              "firstName": "string",
              "lastName": "string",
              "email": "string",
              "password": "string",
              "phone": "string",
              "userStatus": 0
            }
          ]

        cy.request('POST', 'https://petstore.swagger.io/v2/user/createWithArray', ORDER).then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/POST - I should be able to create user', ()=> {
        const ORDER = 
        {
            "id": 0,
            "username": "string",
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": 0
          }

        cy.request('POST', 'https://petstore.swagger.io/v2/user', ORDER).then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/GET - I should be able to find user by ID', ()=> {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/user1').then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/PUT - I should be able to update user', ()=> {
        const UPDATED =
        {
            "id": 0,
            "username": "string",
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": 0
          }

        cy.request('PUT', 'https://petstore.swagger.io/v2/user/1', UPDATED).then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/GET - I should be able to get information user log in', ()=> {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/login?username=a&password=a').then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/GET - I should be able to get information user logged out ', ()=> {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/logout').then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });

    it('/DELETE - I should be able to delete user', ()=> {
        
        cy.request('DELETE', 'https://petstore.swagger.io/v2/user/0').then((response) => {
            expect(response).to.have.property('status', 200)
        });
    });
});