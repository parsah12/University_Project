function loadDoc(url) {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      renderData(data);
    })
    .catch(error => console.error('Error:', error));
  }
  function renderData(data) {
    const demoDiv = document.getElementById('demo');
    
    let html = '<table>';
    html += '<tr><th>User Id</th><th>User Name</th><th>Password</th><th>First Name</th><th>Last Name</th><th>Age</th><th>Meli Code</th><th>Field Of Study</th><th>Entry Date</th><th>Role</th></tr>';
    
    data.forEach(Users => {

        html += `
          <tr>
            <td>${Users.id}</td>
            <td>${Users.userName}</td>
            <td>${Users.password}</td>
            <td>${Users.firstName}</td>
            <td>${Users.lastName}</td>
            <td>${Users.age}</td>
            <td>${Users.meliCode}</td>
            <td>${Users.fieldOfStudy}</td>
            <td>${Users.entryDate}</td>
            <td>${Users.role}</td>
          </tr>
        `;
      });
    
  
    html += '</table>';
    demoDiv.innerHTML = html;
  }