export const apiUrl = async (url, formMethod, putBody) => {
  const res = await fetch(url, {
    method: formMethod,
    body: JSON.stringify(putBody)
  });
  
  const json = await res.json();

  return json;

};
