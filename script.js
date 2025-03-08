const inputBox = document.getElementById('input_box');
const listContainer = document.getElementById('todo_list_container');

const inputBtn = document.getElementById('input_btn').addEventListener('click', function(event){
    if(inputBox.value === ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
});

todo_list_container.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
        saveData();
    }
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem('data', todo_list_container.innerHTML);
}

function showTask(){
    todo_list_container.innerHTML = localStorage.getItem("data");
}
showTask();