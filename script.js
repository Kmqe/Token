let token = "";

axios.post('https://reqres.in/api/login', {
    "email": "tracey.ramos@reqres.in",
    "password": "cityslicka"
})
.then(function (response) {
    token = response.data.token;

    localStorage.setItem("token", token)
    console.log("token recevied", token)

    createNewUser()
})


function createNewUser(){
    let config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    }
    axios.post('https://reqres.in/api/users', {
        "name": "Messi",
        "job": "Football"
    }, config)
    .then(function (response) {
        console.log(response)
    })
}