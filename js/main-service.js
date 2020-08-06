var gUserData;


function init() {
    if (localStorage.getItem('userData')) {
        gUserData = loadFromStorage('userData');
    } else {
        initObj = {
            color: '#eeeeee',
            dob: '1980-10-17',
            age: 40,
            mail: 'davidmarom.pro@gmail.com'
        }
        saveToStorage('userData', initObj)
    }

    document.body.style.backgroundColor = gUserData.color;
    //showAge(gUserData.age);



    
}

function populateFormValues(){

    document.querySelector('[name = favcolor]').value = gUserData.color;
    document.querySelector('[name = dob]').value = gUserData.dob;
    document.querySelector('[name = contact]').value = gUserData.mail;
    document.querySelector('[name = age]').value = gUserData.age;

    document.getElementById('sAge').innerText = gUserData.age;

}