function createTestUser() {
  const traits = [
    "with_sandbox_stripe_account",
    "with_member_preference"
  ]

  const createUserResponse = output.create("members", "approved_member_with_applicant", traits);
  if (!createUserResponse.ok) {
    throw new Error('Failed to create test user');
  }
  return json(createUserResponse.body);
};

output.testUser = createTestUser();
