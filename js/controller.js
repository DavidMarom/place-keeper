$('.toast').toast('hide');

init();

function onColorChange(color) {
    gUserData.color = color;
    console.log(color);
    saveToStorage('userData', gUserData);
    init();
}


function onSaveForm(ev) {
    ev.preventDefault();
    gUserData.color = document.querySelector('[name = favcolor]').value;
    gUserData.dob = document.querySelector('[name = dob]').value;
    gUserData.mail = document.querySelector('[name = contact]').value;
    gUserData.age = document.querySelector('[name = age]').value;

    saveToStorage('userData', gUserData);
    init();
    $('.toast').toast('show');


}


function showAge(age) {
    document.getElementById('sAge').innerText = age;

}