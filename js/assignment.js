var openAssignments = document.getElementById("openAssignments").onclick = function() {
    var assignments = document.getElementById("assignments");
    
if(openAssignments) {
    assignments.style.visibility = "visible";
}else {
    assignments.style.visibility = "hidden";
}
}
