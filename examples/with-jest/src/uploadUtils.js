async function parseResponse(res) {
  const parsed = await res.json();
  if (res.status >= 400) {
    if (parsed && parsed.error) {
      throw parsed.error; // so that react-query catches the error
    } else {
      throw new Error('Something went wrong');
    }
  }
  return parsed;
}

export async function callApiFormData(endpoint, data) {
  const res = await fetch(endpoint, {
    method: 'POST',
    body: data,
  });
  return await parseResponse(res);
}
