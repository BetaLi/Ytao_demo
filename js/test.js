$.getJSON("./data.json", function(json){
    document.getElementById("root").innerHTML = json.title;
    document.getElementById("img").setAttribute("src",json.logo);
});