window.onload = function (e) {
    document.getElementById("navigation").innerHTML = `
  <fieldset style="width:100px;" >
                        <legend class="title">Nouvelles ER</legend>
                        <Navigation>
                            <figure>
                                <img src="../../../ressources/image/icons8-settings-100.png"
                                     onclick="window.location.href = 'Hydro.html'" class="clickable"/>
                                <figcaption>mini-hydr.</figcaption>
                            </figure>
                            <figure>
                                <img src="../../../ressources/image/icons8-sun-100.png"
                                     onclick="window.location.href = 'PV.html'" class="clickable"/>
                                <figcaption>PV</figcaption>
                            </figure>
                            <figure>
                                <img src="../../../ressources/image/icons8-vegetarian-mark-100.png"
                                     onclick="window.location.href = 'Biogaz.html'" class="clickable"/>
                                <figcaption>Bio-gaz</figcaption>
                            </figure>
                            <figure>
                                <img src="../../../ressources/image/icons8-wind-turbine-100.png"
                                     onclick="window.location.href = 'Eolien.html'" class="clickable"/>
                                <figcaption>Eolien</figcaption>
                            </figure>
                        </Navigation>
                    </fieldset>
`
}

//
// function activeFunction(value){
//     window.location.href = 'Biogaz.html';
//     x=value;
// }
//
// // window.onload = function(){
// //     document.getElementById("PV").style.display = "none";
// //     document.getElementById("Hydro").style.display = "none";
// //     document.getElementById("BG").style.display = "none";
// //     document.getElementById("Wind").style.display = "none";
// //
// //     switch (x) {
// //         case 'PV':
// //             showPV();
// //             break;
// //         case 'Hydro':
// //             showPV();
// //             break;
// //         case 'BG':
// //             showPV();
// //             break;
// //         case 'Wind':
// //             showPV();
// //             break;
// //     }
// }
//
//
// function showHydro() {
//     document.getElementById("PV").style.display = "none";
//     document.getElementById("Hydro").style.display = "block";
//     document.getElementById("BG").style.display = "none";
//     document.getElementById("Wind").style.display = "none";
// }
//
// function showPV() {
//     document.getElementById("PV").style.display = "block";
//     document.getElementById("Hydro").style.display = "none";
//     document.getElementById("BG").style.display = "none";
//     document.getElementById("Wind").style.display = "none";
// }
//
// function showBG() {
//     document.getElementById("PV").style.display = "none";
//     document.getElementById("Hydro").style.display = "none";
//     document.getElementById("BG").style.display = "block";
//     document.getElementById("Wind").style.display = "none";
// }
//
// function showWind() {
//     document.getElementById("PV").style.display = "none";
//     document.getElementById("Hydro").style.display = "none";
//     document.getElementById("BG").style.display = "none";
//     document.getElementById("Wind").style.display = "block";
// }
