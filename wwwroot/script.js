document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const taskForm = document.getElementById('task-form');
    const taskNameInput = document.getElementById('task-name');

    const tasks = [
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
        { id: 3, name: 'Task 3' }
    ];

    const renderTasks = () => {
        taskList.innerHTML = '<ul>' + tasks.map(task => `<li>${task.name}</li>`).join('') + '</ul>';
    };

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newTask = {
            id: tasks.length + 1,
            name: taskNameInput.value
        };
        tasks.push(newTask);
        renderTasks();
        taskNameInput.value = '';
    });

    renderTasks();
});
