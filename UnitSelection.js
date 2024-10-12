function postData(url, data) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
      console.log('Success:', result);
      document.getElementById('message').textContent = 'successfully!';
    })
    .catch((error) => {
      console.error('Error:', error);
      document.getElementById('message').textContent = 'Failed!! Sorry.';
    });
    
  }