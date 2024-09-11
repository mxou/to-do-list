window.addEventListener('DOMContentLoaded', function(){

     const app = Vue.createApp({
      data() {
        return {
          selectedColor: '', 
          newTodoTitle: '',
          newTodoDesc: '',
          todos: JSON.parse(localStorage.getItem('todos')) || [],
          bg_colors: [
              { color: "#D1EAED" },
              { color: "#FDF2B3" },
              { color: "#D1EDD3" },
              { color: "#FFDADA" },
            ],
        };
      },
      methods: {
        addTodo() {
  if (this.newTodoTitle.trim() && this.newTodoDesc.trim()) {
    this.todos.push({ 
      id: Date.now(),
      title: this.newTodoTitle,
      desc: this.newTodoDesc,
      completed: false,
      color: '#FDF2B3' // Couleur par défaut
    });
    this.newTodoTitle = '';
    this.newTodoDesc = '';
    this.saveTodos();
  }
},
        removeTodo(id) {
          this.todos = this.todos.filter(todo => todo.id !== id);
          this.saveTodos();
        },
        saveTodos() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        toggleProjects() {
            this.showProjects = !this.showProjects;
          }
      }
    });

    app.mount('#app');

})