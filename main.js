document.addEventListener('DOMContentLoaded', () => {
    var card = document.querySelector('.card');
    var card_form = document.querySelector('.card-form');
    var edit = document.querySelector('.edit-button');
    var save = document.querySelector('.save-button');
    var cancel = document.querySelector('.cancel-button');
    var name = document.querySelector('.name');
    var new_name = document.querySelector('#name');
    var nick= document.querySelector('.nick');
    var new_nick = document.querySelector('#nick');
    var image= document.querySelector('.image');
    var new_image = document.querySelector('#image');
    var avatar= document.querySelector('.user-avatar');
    var new_avatar = document.querySelector('#avatar');
    var location= document.querySelector('.location');
    var new_location = document.querySelector('#location');
    var description= document.querySelector('.description');
    var new_description = document.querySelector('#description');
    var date = document.querySelector('.date');
    var new_date = document.querySelector('#date');

    new_name.value = name.textContent;
    new_nick.value = nick.textContent;
    new_image.value = image.src;
    new_avatar.value = avatar.src;
    new_location.value = location.href;
    new_description.value = description.textContent;
    new_date.value = date.textContent;

    edit.onclick = function(){
        card.classList.toggle('hidden');
        card_form.classList.toggle('hidden');
    }
    cancel.onclick = function(){
        card.classList.toggle('hidden');
        card_form.classList.toggle('hidden');
    }
    save.onclick = function(){
        card.classList.toggle('hidden');
        card_form.classList.toggle('hidden');
        name.textContent = new_name.value;
        nick.textContent = new_nick.value;
        image.src = new_image.value;
        avatar.src = new_avatar.value;
        location.href = new_location.value;
        date.textContent = new_date.value;
        description.textContent = new_description.value;
    }


});