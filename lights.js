/* Butoon onClick  */
/**
 * If the light is on, turn it off. If the light is off, turn it on.
 */
function clicked() {
    if (light2 == 1) {
        document.getElementById("light2").style.display = "inline";
        return light2 = 0;
    } else {
        document.getElementById("light2").style.display = "none";
        return light2 = 1;

    }
}