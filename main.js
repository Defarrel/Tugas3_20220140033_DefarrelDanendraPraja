// Function to show the entered name and current date/time in a popup
function show() {
    var name = document.getElementById("nameInput").value; 
    var date = new Date(); 
    var dateString = date.toString(); 
    var greeting = "Hello, " + name + "! The current date and time is:\n" + dateString; 
    alert(greeting); 
}
