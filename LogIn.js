function postData(url = '', data = {}) {
  fetch(url, {
     method: 'POST',
     headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
     },
     body: JSON.stringify(data),
  })
  .then(result => result.json())  
  .then(res => {
    
     if (res.userId != null) {
        document.getElementById('message').innerText = 'Login successful!';
        localStorage.setItem("Token", res.token); 

        window.location.href = 'GetAllTeacherCourse.html';
     } else {
        document.getElementById('message').innerText = 'Login failed. Please check your credentials.';
     }
  })
  .catch(error => {
     document.getElementById('message').innerText = 'Error occurred: ' + error;
  });
}