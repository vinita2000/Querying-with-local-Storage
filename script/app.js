//session storage code is similar just replace localStorage with sessionStorage
const store = document.getElementById('store');
const retrieve = document.getElementById('retrieve');
const removeItem = document.getElementById('removeItem');
const clearAll = document.getElementById('clearAll');
const userList = document.getElementById('userList');

//stores data to local storage
function storeHandler(id){
    let data = {
        name: `Person${id}`,
        age: 18 + parseInt(id),
        country: `ABC${id}`
    }

    localStorage.setItem(id, JSON.stringify(data));
}

//retrieve data from local storage
function retrieveHandler(id){
    const item = JSON.parse(localStorage.getItem(id));
    console.log(item);
    //render on the page
    if(item){
        str = `
        <h3>User</h3>
        <li>
            <h4>Name: ${item.name}</h4>
            <h4>Age: ${item.age}</h4>
            <h4>Country: ${item.country}</h4>
        </li>`
        userList.innerHTML += str;
    }
    else{
        console.log("Could not find item");
    }
}

//removes single item from local storage
function removeItemHandler(id){
    if(id){
        localStorage.removeItem(id);
    }
    else{
        console.log("Enter a valid ID to remove");
    }
}

//clear local storage 
function clearAllHandler(){
    localStorage.clear();
    console.log("Local storage has been cleared !!");
}

store.addEventListener('click', ()=>{
    const id = prompt("Enter ID to add");
    storeHandler(id.trim());
});
retrieve.addEventListener('click', ()=>{
    const id = prompt("Enter ID to remove ");
    retrieveHandler(id.trim());
});
removeItem.addEventListener('click', ()=>{
    const id = prompt("Enter ID to remove");
    removeItemHandler(id.trim());
});
clearAll.addEventListener('click', clearAllHandler);