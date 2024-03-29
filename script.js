let show = [
        {showID: null, showName: null, desc: null, park: null}
    ];
let times = [
        {showID: null, weekday: null, timeslot: null}
    ];

    let currentPark = "WDW";

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();

let currentDay = weekday[d.getDay()];

fetch("/JSON/shows.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        for(let i = 0; i < data.length; i++) {
            show.push({showID: data[i].id, showName: data[i].name, desc: data[i].description, park: data[i].park});
        }
        getTimes()
    });
    
function getTimes() {
    fetch("/JSON/show_times.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        for(let i = 0; i < data.length; i++) {
        times.push({showID: data[i].showId, weekday: data[i].weekday, timeslot: data[i].timeslot});
    }
    loadScene();
});
}

let Icons = document.getElementById("Icons");



function loadScene() {
    mergeTimes()
    if(currentPark === "WDW") {
        Icons.src="assets/img/WDWicons.png";
        let centerText = document.getElementById("CenterText");
        
        centerText.innerHTML = `
        <h2>Featured Entertainment</h2>
        <p id="MKshows"></p>
        <p>
            <span id="610am"><strong>6:10am:</strong>  <abbr title='${show[3].desc}'>${show[3].showName}</abbr><br /></span>
            <span id="7am"></span>
            <span id="11am"></span>
            <span id="2pm"></span>
            <span id="4pm"></span>
            <span id="6pm"></span>
            <span id="9pm"></span>
            <span id="12am"><strong>12:00am:</strong>  <abbr title='${show[3].desc}'>${show[3].showName}</abbr></span>

        </p>
        `
        let isShow = false;

        document.getElementById("TitleText").textContent = "Walt Disney World"
        let mkShows = document.getElementById("MKshows");
        for(let i = 0; i < times.length; i++) {
            if(times[i].weekday == currentDay) {
                if(times[i].park == 1 || times[i].park == 2 ) {
                    if(times[i].timeslot === "SevenOClock") {
                        document.getElementById("7am").innerHTML += `<strong>7:00am:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />`
                        isShow = true;
                    }   
                    else if(times[i].timeslot === "ElevenOClock") {
                        document.getElementById("11am").innerHTML += `<strong>11:00am:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                    else if(times[i].timeslot === "TwoOClock") {
                        document.getElementById("2pm").innerHTML += `<strong>2:00pm:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                    else if(times[i].timeslot === "FourOClock") {
                        document.getElementById("4pm").innerHTML += `<strong>4:00pm:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                    else if(times[i].timeslot === "SixOClock") {
                        document.getElementById("6pm").innerHTML += `<strong>6:00pm:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                    else if(times[i].timeslot === "NineOClock") {
                        document.getElementById("9pm").innerHTML += `<strong>9:00pm:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                    else if(times[i].timeslot === "Midnight") {
                        document.getElementById("12am").innerHTML += `<strong>12:00am:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                }
            }
        }
        if(isShow === false) {
            centerText.innerHTML = `
            <h2>Featured Entertainment</h2>
            <p id="MKshows">No Shows Today</p>
            `
        }
    }

    if(currentPark === "WDW2") {
        Icons.src="assets/img/WDWicons.png";
        document.getElementById("CenterText").innerHTML = `
        <h2>Featured Entertainment</h2>
        <p id="MKshows"></p>
        <p>
            <span><strong><abbr title='This lively barbershop quartet sings in harmony, tap dances in time and charms audiences with vaudeville humor.'>Dapper Dans</abbr></strong><br />12:30am 1:30am 2:30am 3:30am 4:30am 5:30am<br />6:30am 7:30am 8:30am 9:30am 10:30am 11:30am<br />12:30pm 1:30pm 2:30pm 3:30pm 4:30pm 5:30pm<br />6:30pm 7:30pm 8:30pm 9:30pm 10:30pm 11:30pm</span><br />
            <br />
            <span><strong><abbr title='${show[23].desc}'>${show[23].showName}</abbr></strong></span><br />
            <span id="EWP7"></span><span id="EWP11"></span><span id="EWP2"></span><span id="EWP4"></span><span id="EWP6"></span><span id="EWP9"></span><span id="EWP12"></span>
        </p>
        `
        for(let i = 0; i < times.length; i++) {
            if(times[i].weekday == currentDay) {
                if(times[i].park == 1) {
                    if(times[i].timeslot === "SevenOClock") {
                        document.getElementById("EWP7").innerHTML = `7:28am&nbsp;`
                    }   
                    else if(times[i].timeslot === "ElevenOClock") {
                        document.getElementById("EWP11").innerHTML = `11:28a&nbsp;`
                    }  
                    else if(times[i].timeslot === "TwoOClock") {
                        document.getElementById("EWP2").innerHTML = `2:28pm&nbsp;`
                    }  
                    else if(times[i].timeslot === "FourOClock") {
                        document.getElementById("EWP4").innerHTML = `4:28pm&nbsp;`
                    }  
                    else if(times[i].timeslot === "SixOClock") {
                        document.getElementById("EWP6").innerHTML = `6:28pm&nbsp;`
                    }  
                    else if(times[i].timeslot === "NineOClock") {
                        document.getElementById("EWP9").innerHTML = `9:28pm&nbsp;`
                    }  
                    else if(times[i].timeslot === "Midnight") {
                        document.getElementById("EWP12").textContent = '12:28am'
                    }  
                }
            }
        }
    }


    if(currentPark === "TDL") {
        Icons.src="";
        document.getElementById("TitleText").textContent = "Tokyo Disney Resort"

        document.getElementById("CenterText").innerHTML = `
        <h2>Featured Entertainment</h2>
        <p id="TDLshows"></p>
        <p>
            <span><strong><abbr title='${show[12].desc}'>${show[12].showName}</abbr></strong><br />
            12:00am 1:00am 2:00am 3:00am 4:00am 5:00am<br /> 6:00am 7:00am 8:00am 9:00am 10:00am 11:00am<br /> 12:00pm 1:00pm 2:00pm 3:00pm 4:00pm 5:00pm<br /> 6:00pm 7:00pm 8:00pm 9:00pm 10:00pm 11:00pm</span>
        </p>
        `
    }

    if(currentPark === "DLP") {
        Icons.src=" ";
        document.getElementById("TitleText").textContent = "Disneyland Paris"

        document.getElementById("CenterText").innerHTML = `
        <h2>Featured Entertainment</h2>
        <p id="TDLshows"></p>
        <p>
            <span><strong><abbr title='${show[20].desc}'>${show[20].showName}</abbr></strong><br />12:30am 1:30am 2:30am 3:30am 4:30am 5:30am<br />6:30am 7:30am 8:30am 9:30am 10:30am 11:30am<br />12:30pm 1:30pm 2:30pm 3:30pm 4:30pm 5:30pm<br />6:30pm 7:30pm 8:30pm 9:30pm 10:30pm 11:30pm</span>
        </p>
        `
    }

    if(currentPark === "UOR") {
        Icons.src=" ";
        document.getElementById("TitleText").textContent = "Universal Orlando Resort"

        document.getElementById("CenterText").innerHTML = ` `
    }

    if(currentPark === "DS") {
        Icons.src=" ";
        document.getElementById("TitleText").textContent = "Dreamscapes"

        document.getElementById("CenterText").innerHTML = ` `
    }

    if(currentPark === "REG") {
        Icons.src=" ";
        document.getElementById("TitleText").textContent = "Regional Parks"

        document.getElementById("CenterText").innerHTML = ` `
    }

    if(currentPark === "DL") {
        Icons.src=" ";
        let centerText = document.getElementById("CenterText");
        
        centerText.innerHTML = `
        <h2>Featured Entertainment</h2>
        <p id="DLshows"></p>
        <p>
            <span id="7am"></span>
            <span id="11am"></span>
            <span id="2pm"></span>
            <span id="4pm"></span>
            <span id="6pm"></span>
            <span id="9pm"></span>
            <span id="12am"></span>
        </p>
        `
        let isShow = false;

        document.getElementById("TitleText").textContent = "Disneyland Resort"
        let dlShows = document.getElementById("DLshows");
        for(let i = 0; i < times.length; i++) {
            if(times[i].weekday == currentDay) {
                if(times[i].park == 8) {
                    if(times[i].timeslot === "SevenOClock") {
                        document.getElementById("7am").innerHTML += `<strong>7:00am:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />`
                        isShow = true;
                    }   
                    else if(times[i].timeslot === "ElevenOClock") {
                        document.getElementById("11am").innerHTML += `<strong>11:00am:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                    else if(times[i].timeslot === "TwoOClock") {
                        document.getElementById("2pm").innerHTML += `<strong>2:00pm:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                    else if(times[i].timeslot === "FourOClock") {
                        document.getElementById("4pm").innerHTML += `<strong>4:00pm:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                    else if(times[i].timeslot === "SixOClock") {
                        document.getElementById("6pm").innerHTML += `<strong>6:00pm:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                    else if(times[i].timeslot === "NineOClock") {
                        document.getElementById("9pm").innerHTML += `<strong>9:00pm:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                    else if(times[i].timeslot === "Midnight") {
                        document.getElementById("12am").innerHTML += `<strong>12:00am:</strong>  <abbr title='${times[i].desc}'>${times[i].showName}</abbr><br />` 
                        isShow = true;
                    }  
                }
            }
        }
        if(isShow === false) {
            centerText.innerHTML = `
            <h2>Featured Entertainment</h2>
            <p id="DLshows">No Shows Today</p>
            `
        }
    }

}

function mergeTimes() {
    for(let i = 0; i < times.length; i++) {
        for(let t = 0; t < show.length; t++) {
            if (show[t].showID == times[i].showID)
            times[i] = Object.assign(times[i], show[t])
        }
    }
}

// Define the array of parks
const parks = [ "REG", "WDW", "WDW2", "DL", "TDL", "DLP", "UOR", "DS"];

// Initialize the index of the current park
let currentParkIndex = 0;

// Get the element where you want to handle the click event
const cont = document.getElementById('TitleText');

// Add a click event listener to the button
// cont.addEventListener('click', function() {
//     nextPage()
// });

function nextPage() {
        setTimeout(function() {
            nextPage()
        }, 10000)
        // Update the current park index to rotate around the parks array
        currentParkIndex = (currentParkIndex + 1) % parks.length;

        // Get the current park using the updated index
        currentPark = parks[currentParkIndex];
    
        // Do something with the current park, for example, log it to the console
        console.log(currentPark)
        loadScene();
}

nextPage();