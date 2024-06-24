const baseUrl = 'https://staging.ubercarshare.com/api/v2/test_setup';

var create = function (recordName, type) {
  return http.post(`${baseUrl}/${recordName}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: type }),
  });
};

var destroy = function (recordName, id) {
  return http.delete(`${baseUrl}/${recordName}/${id}`, {
    headers: {'Content-Type': 'application/json'}
  });
};

output.create = create;
output.destroy = destroy;
