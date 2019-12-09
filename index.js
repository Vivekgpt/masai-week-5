function getData() {
    var input = document.getElementById("inputid").value;
    var array = document.getElementById("choose").value;
    var xhr  = new XMLHttpRequest();
    if((input == "") || (array == "chooseany")){
        document.getElementById("error").innerHTML = "*Please enter a valid value"
        document.getElementById("any").innerHTML = "*Please Choose a Category"
    }
    else {
        var url = "https://rickandmortyapi.com/api/character/" + array + input;
        document.getElementById("error").innerHTML = "";
        document.getElementById("any").innerHTML = "";
    }
    xhr.open("GET",url);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200){
            console.log(xhr.response);
            var data = JSON.parse(xhr.response);
            showData (data);
        }
        else{
            console.log("Error server" + xhr.status)
        }
    }
}

function showData (data) {
    var card1 = document.getElementById("card1");
    // var card2 = document.getElementById("card2");
    for (var i = 0; i < data["results"].length; i++){
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var pic = document.createElement("img");
        var h3 = document.createElement("h3");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        // var p4 = document.createElement("p");
        var a = document.createElement("a");

        pic.setAttribute("src", data["results"][i]["image"]);
        h3.innerHTML = data["results"][i]["name"];
        p1.innerHTML = data["results"][i]["status"];
        p2.innerHTML = data["results"][i]["species"];
        p3.innerHTML = data["results"][i]["gender"];
        // p4.innerHTML = data["results"][i]["episode"];
        a.innerHTML = data["results"][i]["url"];
        
        card1.appendChild(div1);
        div1.appendChild(pic);
        card1.appendChild(div2);
        div2.appendChild(h3);
        div2.appendChild(p1);
        div2.appendChild(p2);
        div2.appendChild(p3);
        // div2.appendChild(p4);
        div2.appendChild(a);
        };
}