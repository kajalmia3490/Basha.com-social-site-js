// page reload with basha.com
function pageReload() {
    location.reload();
};


// click function: hide & show messages
let hidden = document.getElementById('hide');
let chating = document.getElementById('chats');

function hideMsg() {
    hidden.addEventListener('click', chating.innerHTML = '');
};

let showed = document.getElementById('show');

function showMsg() {
    showed.addEventListener('click', location.reload());
};


// post create & publish your timeline
let post = document.getElementById('post');
let itemPost = document.getElementById('post-item');
let textPlace = document.getElementById('text-place');

function postButton() {
    post.addEventListener('click', itemPost.classList = lists());
};


// create element
function lists(val) {
    let li = document.createElement('li');
    li.className = 'li';
    li.id = 'list-item';
    li.innerHTML = textPlace.value;
    let result = itemPost.append(li);

    // stylesheet for list item
    let style = li.style;
    style.margin = '20px 30px 20px 30px'
    style.padding = '20px'
    style.backgroundColor = 'white'
    style.listStyleType = 'none'
    style.borderStyle = 'solid'
    style.borderColor = 'gray'
    style.borderWidth = '1px'
    style.borderRadius = '5px'

    return val = result;
};


// text clear of text place from textarea
let clearall = document.getElementById('clear');
function textClear() {
    clearall.addEventListener('click', textPlace.value = '');
};