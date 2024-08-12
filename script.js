function allowDrop(ev) {
    ev.preventDefault(); 
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var draggedImageId = ev.dataTransfer.getData("id");
    var draggedImage = document.getElementById(draggedImageId);
    var targetImageId = ev.target.id;
    var targetImage = document.getElementById(targetImageId);

    if (draggedImage && targetImage) {
        let temp = targetImageId;
        let temp1 = draggedImageId
        draggedImage.id = temp;
        targetImage.id = temp1;
    }
}