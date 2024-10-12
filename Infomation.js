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
    html += '<tr><th>Teacher Id</th><th>Teacher FirstName</th><th>Teacher LastName</th><th>Course Id</th><th>Course Name</th></tr>';
    
    data.forEach(teacherCourse => {
        html += `
          <tr>
           <td>${teacherCourse.teacherId}</td>
           <td>${teacherCourse.teacherFirstName}</td>
           <td>${teacherCourse.teacherLastName}</td>
           <td>${teacherCourse.courseId}</td>
           <td>${teacherCourse.courseName}</td>
          </tr>
        `;
    });
    
    html += '</table>';
    demoDiv.innerHTML = html;   
    }