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
    html += '<tr><th>User Id</th><th>Teacher Id</th><th>Course Id</th></tr>';
    
    data.forEach(UnitSelection => {
      html += `
        <tr>
          <td>${UnitSelection.userId}</td>
          <td>${UnitSelection.teacherId}</td>
          <td>${UnitSelection.courseId}</td>
        </tr>
      `;
    });
  
    html += '</table>';
    demoDiv.innerHTML = html;
  }
  