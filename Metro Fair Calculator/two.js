function selectStation() {
    let a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'M', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0; i <= a.length - 1; i++) {
        document.getElementById("Destination").innerHTML += `<option value=${i + 1}>${a[i]}</option>`;
        document.getElementById("xyz").innerHTML += `<option value=${i + 1}>${a[i]}</option>`;
    }
}
selectStation();


function calculateFair() {
    let sourValue = document.getElementById('xyz').value;
    let destValue = document.getElementById('Destination').value;
    let noofstat = Math.abs(sourValue - destValue);

    let fair = 0;
    if (noofstat % 4 == 0) {
        fair = (Math.floor(noofstat / 4)) * 10;
    }
    else {
        fair = (Math.floor(noofstat / 4) + 1) * 10;
    }
    if (noofstat > 24) {
        fare = 70;
    }
    console.log(fair);

    if (document.getElementById("Boxes").value == "Card" && noofstat >= 5) {
        fair = fair - (10 / 100 * fair);
    }
    if (noofstat < 1) {
        fair = 10;
    }

    document.getElementById('fairBox').value = fair;
}