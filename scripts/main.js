(function () {
    this.myAppG = this.myAppG || {};
    var myApp = this.myAppG;
    myApp.slider = {};
    myApp.slider.showSlides = function (n) {
        var slideIndex = 1;
        var slides = document.getElementsByClassName("item-slider");
        var indicators = document.getElementsByClassName("indicators");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < indicators.length; i++) {
            indicators[i].className = indicators[i].className.replace(" active", "");
        }
        slides[n - 1].style.display = "block";
        indicators[n- 1].className += " active";
    }



    myApp.dataLoader = {};
    myApp.dataLoader.loadJSON = function (callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data/main.json', true); // 
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
              
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }
    
}());



function init() {



    this.myAppG.slider.showSlides(1);

    this.myAppG.dataLoader.loadJSON(function (response) {
        var data = JSON.parse(response);
        for (var i in data) {

            var id = data[i];
            var section = data[i];

            for (var j in section) {
                document.querySelector("#" + section[j].id).innerHTML = section[j].content
            }

        }
    });


}


