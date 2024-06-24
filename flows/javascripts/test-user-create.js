function createTestUser() {
  var createUserResponse = output.create("members", "cypress_borrower");
  var responseBody = json(createUserResponse.body)
  console.log(`Test member created: ${responseBody.email}`);
  return responseBody;
};

output.testUser = createTestUser();
