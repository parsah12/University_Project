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
    
    data.forEach(teachers => {

        html += `
          <tr>
            <td>${teachers.id}</td>
            <td>${teachers.userName}</td>
            <td>${teachers.password}</td>
            <td>${teachers.firstName}</td>
            <td>${teachers.lastName}</td>
            <td>${teachers.age}</td>
            <td>${teachers.meliCode}</td>
            <td>${teachers.fieldOfStudy}</td>
            <td>${teachers.entryDate}</td>
            <td>${teachers.role}</td>
          </tr>
        `;
      });
    
  
    html += '</table>';
    demoDiv.innerHTML = html;
  }