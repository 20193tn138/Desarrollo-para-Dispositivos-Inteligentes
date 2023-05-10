
const resp = fetch('https://reqres.in/api/users?page=1');


resp.then(response=> response.json())
.then((json)=>{
    console.log(json.data);

    let content = document.getElementById('container');
    let htmlX = '';
    json.data.forEach(element => {
        console.log(element);

        let htmlCard = 
        `<div class="col-4"> 
          <div class="card">
            <div class="card-header">
            Featured
            </div>
              <div class="card-body">
                <h5 class="card-title">${element.id}</h5>
                <p class="card-text">${element.email}</p>
                <p class="card-text">${element.first_name}</p>
                <p class="card-text">${element.last_name}</p>
                  <a href="#" class="btn btn-info">Detalles</a>
              </div>
              </div>
        </div>`
        htmlX=htmlX+htmlCard;
    });
    content.innerHTML=htmlX;
})