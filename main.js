const addButton = document.querySelector('#button');
const myForm = document.querySelector('#form');
const input = document.querySelector('#goalinput');
const message = document.querySelector('#message');
const goals = document.querySelector('#currentgoals');
const hooray = document.querySelector('#hooray');

addButton.addEventListener("click", onSubmit);



function onSubmit(e){
    e.preventDefault();
    if(input.value == ''){
        message.innerHTML = 'Have no goals or something? If not, please enter your goal.'
        setTimeout(() => message.remove(), 3000);
    }
    else{
       const goal = document.createElement('li');
       goal.setAttribute('id','goalItem');
       const completeBtn = document.createElement('button');
       completeBtn.innerHTML = 'complete';
       completeBtn.setAttribute('id','completeBtn');
       goal.appendChild(document.createTextNode(`${input.value}`));
       goals.appendChild(goal);
       goal.appendChild(completeBtn);

       completeBtn.onclick = function(){
        goals.removeChild(goal);
        hooray.innerHTML = 'Congrats! You finished a goal of yours! The dopamine you recieved from that feels better than consumer dopamine.';
        setTimeout( ()=> hooray.remove(), 3000);
       }

    }

}

