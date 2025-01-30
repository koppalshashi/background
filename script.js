document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colorOptions = document.getElementsByName('color');
    let selectedColor;

    for (let i = 0; i < colorOptions.length; i++) {
        if (colorOptions[i].checked) {
            selectedColor = colorOptions[i].value;
            break;
        }
    }

    if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
    } else {
        alert('Please select a color!');
    }
});
