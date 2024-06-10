document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    window.addTask = function() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        if (isTaskAlreadyAdded(taskText)) {
            alert('Task already added');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const closeButton = document.createElement('button');
        closeButton.textContent = '×';
        closeButton.className = 'close';
        closeButton.onclick = () => {
            li.style.transform = 'translateX(100%)';
            li.style.opacity = '0';
            setTimeout(() => taskList.removeChild(li), 300);
        };

        li.appendChild(closeButton);
        li.onclick = () => li.classList.toggle('completed');

        taskList.appendChild(li);
        newTaskInput.value = '';
    }

    function isTaskAlreadyAdded(taskText) {
        const tasks = taskList.getElementsByTagName('li');
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].firstChild.nodeValue === taskText) {
                return true;
            }
        }
        return false;
    }
});
