function deleteTestUser() {
  if (output.testUser.id) {
    output.destroy("members", output.testUser.id);
    console.log("Test member deleted");
  } else {
    console.log("No member to delete");
  }
};

deleteTestUser();
