const baseUrl = (TEST_SETUP_API_BASE_URL === 'null') ? TEST_SETUP_API_BASE_URL_DEFAULT: TEST_SETUP_API_BASE_URL;
const testSetupUrl = `${baseUrl}/api/v2/test_setup`;

var create = function (recordName, type, traits) {
  return http.post(`${testSetupUrl}/${recordName}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: type, traits: traits }),
  });
};

var destroy = function (recordName, id) {
  return http.delete(`${testSetupUrl}/${recordName}/${id}`, {
    headers: {'Content-Type': 'application/json'}
  });
};

output.create = create;
output.destroy = destroy;
