function createTestUser() {
  const traits = [
    "with_sandbox_stripe_account",
    "with_member_preference"
  ]

  const createUserResponse = output.create("members", "approved_member_with_applicant", traits);

  const responseBody = json(createUserResponse.body)
  console.log(`Test member created: ${responseBody.email}`);
  return responseBody;
};

output.testUser = createTestUser();
