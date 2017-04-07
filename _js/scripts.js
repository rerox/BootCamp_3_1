(function() {
    var button = document.getElementById("findMyPosition");
    var BingButton = document.getElementById("BingButton");
    var MyLocalization = document.getElementById("location")

    button.addEventListener("click", function (e) {
        e.preventDefault();
        checkPosition()

    });

    function checkPosition(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                loc = ("To działa! Twoja pozycja to (" + position.coords.longitude + ", " + position.coords.latitude + ")");
                MyLocalization.innerHTML = loc;
                BingButton.classList.remove("hidden");
                BingButton.addEventListener("click",function (e) {
                    e.preventDefault();
                    bingMap(position.coords.latitude, position.coords.longitude);
                })
            })
        }
    }

    function bingMap(posX, posY){
        window.location.href = "http://bing.com/maps/default.aspx?cp="+ posX + "~" + posY;
    }
})();
