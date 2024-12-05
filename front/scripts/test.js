const usuario = document.getElementById("usuario");
let i = 1

class User{
    constructor(id, name, userName, email){
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
    }
}

class Repository{
    constructor(){
        this.users = [];
    }
    createUser({id, name, userName, email}){
        const newUser = new User(id, name, userName, email);
        this.users.push(newUser);
    }
}
const refresh = () =>{
    const usersContainer = document.getElementById("usersContainer");
    usersContainer.innerHTML = "";
    
    const users = repository.users;
    const htmlUsers = users.map((users) =>{
        const name = document.createElement("h3");
        const email = document.createElement("p");
        const userName = document.createElement("p");
        const id = document.createElement("p");

        name.innerHTML = users.name;
        email.innerHTML = users.email;
        userName.innerHTML = users.userName;
        id.innerHTML = users.id;

        const card = document.createElement("div");
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(userName);
        card.appendChild(id);

        return card;
    });
    htmlUsers.forEach((card) =>{
        usersContainer.appendChild(card);
    });

}

const repository = new Repository();
const addUser = () =>{
    if (i > 10){
        alert("No Hay mas Usario!");
    }
    $.get(`https://students-api.up.railway.app/movies`,(data,status) =>{
        console.log(data);
        i++;
        repository.createUser(data)
        refresh();
    })
};
usuario.addEventListener("click",addUser);