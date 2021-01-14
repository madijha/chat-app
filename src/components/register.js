export const registerHandler = () => {
    return fetch('http://192.168.43.56/di/user_register.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({}),
    })
    .then((response) => response.json())
    .then((data) => {
        return data;
    })
    .catch((err) => console.error(err));
};
  