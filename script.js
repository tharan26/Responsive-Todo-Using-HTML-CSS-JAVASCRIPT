function addTask() {
    const val = document.getElementById('task');
    const tasklist = document.getElementById('list');
    const tasktext = val.value;

    if (tasktext == '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = tasktext;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        tasklist.removeChild(listItem);
    };
    listItem.appendChild(deleteButton);
    tasklist.appendChild(listItem);
    val.value = '';
}
