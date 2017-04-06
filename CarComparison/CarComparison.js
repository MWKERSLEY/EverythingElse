//http://matthewkersley.co.uk/cars.json

buttonBegin = document.getElementById('beginB');
buttonBegin.addEventListener('click', beginFunc, false);


function beginFunc() {
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://crossorigin.me/http://matthewkersley.co.uk/cars.json", true);
    
    function CardObject(country,description,engine,image,name,power,top_speed,weight,zero_to_sixty) {
        this.country = country;
        this.description = description;
        this.engine = engine;
        this.image = image;
        this.name = name;
        this.power = power;
        this.top_speed = top_speed;
        this.weight = weight;
        this.zero_to_sixty = zero_to_sixty;
        this.show = function() {
            
        }
        this.compare = function() {
            
        }
    }
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            console.log(myData);
        } else {
            alert("Error connecting to data! Try again later.");
        }
    }
    

    
    
    
    
    
    
    
    myRequest.send();
}


    /*
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            console.log(myData);
            //myData.length
            for (var i = 1;i<11;i++) {
                document.getElementById('country'+i).innerHTML = myData[i].country;
                document.getElementById('description'+i).innerHTML = "It's a car"
                    //myData[i].description;
                document.getElementById('engine'+i).innerHTML = myData[i].engine;
                document.getElementById('image'+i).innerHTML = myData[i].image;
                document.getElementById('name'+i).innerHTML = myData[i].name;
                document.getElementById('power'+i).innerHTML = myData[i].power;
                document.getElementById('top_speed'+i).innerHTML = myData[i].top_speed;
                document.getElementById('weight'+i).innerHTML = myData[i].weight;
                document.getElementById('zero_to_sixty'+i).innerHTML = myData[i].zero_to_sixty;
            }
            
        } else {
            alert("Error connecting to data! Try again later.");
        }
    }*/