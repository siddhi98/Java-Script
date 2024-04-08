// <!-- 7.] To Do List  -->
var add_btn = document.querySelector('.add-item');
var remove_btn = document.querySelector('.remove-item');
var list_ul = document.querySelector('.list-items');
var list_li = document.querySelector('.list-item');
var length_li = list_ul.children;
var header_sec = document.querySelector('.header-sec');
var header = document.getElementsByClassName('header');

// add_btn.addEventListener('click', function(){
//     var new_list_li = document.createElement('li');
//     var Textnode = document.createTextNode('list item ' + (length_li.length + 1));
//     new_list_li.classList.add('list-item');
//     new_list_li.appendChild(Textnode);
//     list_ul.appendChild(new_list_li);
//     var new_div = document.createElement('div');

//     if (new_div.classList.contains('no-list')) {
//         new_div.parentNode.removeChild(new_div);
//     }else{

//     }

// });



add_btn.addEventListener('click', function(){
    var new_list_li = document.createElement('li');
    var new_input = document.createElement("input");
    new_input.type = "text";
    new_input.placeholder = 'list item ' + (length_li.length + 1);
    new_input.classList.add('list-item-input');
    new_list_li.classList.add('list-item');


    new_list_li.appendChild(new_input);

    list_ul.appendChild(new_list_li);
    var new_div = document.createElement('div');

    if (new_div.classList.contains('no-list')) {
        new_div.parentNode.removeChild(new_div);
    }else{

    }



//   // Set attributes for the input element
//   input.type = "text";
//   input.placeholder = "Enter your text here";

//   // Append the input element to a container
//   document.getElementById("container").appendChild(input);


});



remove_btn.addEventListener('click', function(){
    var new_div = document.createElement('div');
    var last_list_li = list_ul.lastElementChild;
    list_ul.removeChild(last_list_li);
    if(length_li.length == 0 ){
        header_sec.appendChild(new_div);
        new_div.classList.add('no-list');
        new_div.innerHTML = "Please Create New To Do List";
    }
});
