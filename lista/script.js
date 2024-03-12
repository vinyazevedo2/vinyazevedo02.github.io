document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (input.value !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerText = input.value;
  
        taskItem.addEventListener('click', function() {
          taskItem.classList.toggle('completed');
        });
  
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Excluir';
        deleteButton.addEventListener('click', function() {
          taskItem.remove();
        });
  
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        input.value = '';
      }
    });
  });
  