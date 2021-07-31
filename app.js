const colorSwitch = document.getElementById("input-color-switch");

colorSwitch.addEventListener("click", checkMode);

function checkMode() {
    console.log("chcking..");
    if (colorSwitch.checked) {
        console.log("lightmode on");
        lightModeOn()
    } else {
        console.log("lightmode off");
        lightModeOff();
    }
}

function lightModeOn() {
    document.body.classList.add("light-mode");
}

function lightModeOff() {
    document.body.classList.remove("light-mode");
}