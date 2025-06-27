describe('API Testing on reqres.in with simplified requests', () => {
    // Test Case 1: POST - Create a new user
    it('should create a new user successfully', () => {
        cy.apiRequest('POST', '/public/v2/users', {
            body: {
                name: "Fadhli",
                gender: "male",
                email: "fad@gmail.com",
                status: "active",
            },
            }).then((response) => {
                expect(response.status).to.eq(201);
        });
    });

    // Test Case 2: GET - Retrieve user details
    it('should get user details successfully', () => {
        cy.apiRequest('GET', '/public/v2/users/7439853').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    // Test Case 3: PUT - Update user details
    it('should update user details successfully', () => {
        cy.apiRequest('PUT', '/public/v2/users/7439853', {
            body: {
                name: 'John Doe Updated',
                email: 'john@gmail.com',
            },
            }).then((response) => {
                expect(response.status).to.eq(200);
        });
    });

    // Test Case 4: DELETE - Delete a user
    it('should delete a user successfully', () => {
        cy.apiRequest('DELETE', '/public/v2/users/7439853').then((response) => {
            expect(response.status).to.eq(204);
        });
    });

});