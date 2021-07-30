export const apiUrl = async (url, formMethod) => {

  const res = await fetch(url, {
    method: formMethod
  });
  
  const json = await res.json();

  return json;

};
