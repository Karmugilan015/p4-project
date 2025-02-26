document.getElementById("skinColor").addEventListener("input", function () {
    document.querySelector(".face").style.backgroundColor = this.value;
});

document.getElementById("hairColor").addEventListener("input", function () {
    document.querySelector(".hair").style.backgroundColor = this.value;
});

document.getElementById("eyeColor").addEventListener("input", function () {
    document.querySelector(".eyes").style.backgroundColor = this.value;
});

function downloadAvatar() {
    html2canvas(document.getElementById("avatar")).then(canvas => {
        let link = document.createElement('a');
        link.download = 'avatar.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
