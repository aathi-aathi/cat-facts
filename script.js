

const getData = async () => {
  const response = await fetch(`https://cat-fact.herokuapp.com/facts`,{
    method:'GET'
  })
 const data = await response.json()
 console.log(data)
 renderTable(data)
}
// Function to render data into the table
 function renderTable(data) {
    const dataList = document.getElementById('dataList');
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item._id}</td>
            <td>${item.user}</td>
            <td>${item.text}</td>
        `;
        dataList.appendChild(row);
    });
}

// Call the function to render data
getData()