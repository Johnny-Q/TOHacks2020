function appendApps() {
    // var node = document.createElement("li");
    // var Apptext = document.getElementById("Apptext").value;
    // var Timetext = document.getElementById("Timetext").value;
    // var textnode = document.createTextNode(Apptext +  Timetext);
    // node.appendChild(textnode);
    // document.getElementById("ApplicationList").appendChild(node);
    var element = document.createElement()
    element.class = "btn"
    var Appnode = document.createElement("button");
    var Apptext = document.getElementById("Apptext").value;
    var textnode = document.createTextNode(Apptext);
    Appnode.appendChild(textnode);
    document.getElementById("ApplicationList").appendChild(Appnode);
    document.getElementById("Apptext").value = ""

}