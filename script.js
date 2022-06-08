function addProject() {
    let projectName = document.getElementById('projectInput').value
    let newProjectItem = document.createElement("LI");
    newProjectItem.setAttribute('draggable', true);
    newProjectItem.innerHTML = projectName
    newProjectItem.setAttribute('id', projectName);
    newProjectItem.addEventListener("dragstart", drag)
    document.getElementById('inProgressSec').appendChild(newProjectItem);
    localStorage.setItem(projectName, "inProgressSec");

}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    localStorage.setItem(data, ev.path[0].id);

}

window.onload = function () {
    if (window.localStorage.length > 0) {
        Object.keys(localStorage).forEach(function (key) {
            let newProjectItem = document.createElement("li");
            newProjectItem.setAttribute('draggable', true);
            newProjectItem.innerHTML = key
            newProjectItem.setAttribute('id', key);
            newProjectItem.addEventListener("dragstart", drag)
            document.getElementById(localStorage.getItem(key)).appendChild(newProjectItem);
        });
    }
}