function store(){ //stores items in the localStorage
    var Name = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;
    var key = document.getElementById('Phone').value;
    var Address = document.getElementById('Address').value; //gets the key from the user

    const details = {
        Name: Name,
        // Phone: Phone,
        Email: Email,
        Address:Address
    }

    window.localStorage.setItem(key,JSON.stringify(details));  
    //converting object to string
}

function retrieveRecords(){ //retrieves items in the localStorage
    console.log("retrieve records");
     var key = document.getElementById('retrieveKey').value;
    var records = window.localStorage.getItem(key);
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}
window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("form").onsubmit = store
    document.getElementById("retrieveButton").onclick = retrieveRecords
}