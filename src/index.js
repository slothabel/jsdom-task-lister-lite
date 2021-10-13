document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById('create-task-form')
    const listBox = document.getElementById('list')

    taskForm.addEventListener('submit', handleClick)
    //listening for a submit event, when submit is clicked the handleClick function is called
    function handleClick(e){

        e.preventDefault()
        //keeping submit button from doing its default action
        const userInput = document.getElementById('new-task-description').value
        // listBox.innerHTML += userInput
        //too basic, its just adding it directly to the box on the same line
        listBox.innerHTML += `<li class="tasks"> ${userInput} </li>`

    }




});
