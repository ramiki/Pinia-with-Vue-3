// import definestore function to make a store
import { defineStore } from 'pinia'

// give a name for function defineStore() as taskStore to found it in vue dev tools
// and then creat our store ( like we used to vuex )
export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false
  }),
  // provide computed data based on the state of the store (work in data (state))
  getters: {
    // create a getter function ( this. refere to state object )
    favs() {
      // filter() return a new array contain each data array ( as t ) that hase isFav = true 
      return this.tasks.filter(t => t.isFav)
    },
    favCount() {
      // get the number of (isFav = true) items in state.tasks
      return this.tasks.reduce((previes, current) => {
        return current.isFav ? previes + 1 : previes
      }, 0)
    },
    totalCount: (state) => {
      // inside the arrow function (this.) didnt refere to Pinia store instance state ()
      // so we pass the (state) as an arg and call it inside the arrow function
      // if we use (this) it will refer to the surrounding lexical context where 
      // the arrow function is defined. Arrow functions do not have their 
      // own this context; they inherit this from the enclosing scope.
      return state.tasks.length
    }
  },
  actions: {
    async getTasks() {
      this.loading = true

      // get data from json file using json-server installed pluging
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()

      this.tasks = data
      this.loading = false
    },
    async addTask(task) {
      this.tasks.push(task)

      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {'Content-Type': 'application/json'}
      })

      if (res.error) {
        console.log(res.error)
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter(t => {
        return t.id !== id
      })

      const res = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'DELETE',
      })

      if (res.error) {
        console.log(res.error)
      }
    },

    async resetAll() {

      var r=confirm("Do you want really to delete all tasks !!");
      if (r==true)
        {
          this.$reset()
          // same as :
          this.tasks = []
    
          // while we didnt find in json-server delete all request , we use a loop to delet all tasks
          const response = await fetch('http://localhost:3000/tasks');
          const tasks = await response.json();
    
          for (const task of tasks) {
            const res = await fetch('http://localhost:3000/tasks/' + task.id , {
              method: 'DELETE',
            });
    
            // Check if the response is successful
            if (!res.ok) {
              console.error('Failed to delete tasks:', res.statusText);
              // Optionally handle the error (e.g., show a notification)
            }
          }
        };

    },
    
    // Using find in toggleFav allows for direct modification of a single task, 
    //  while using filter in deleteTask allows for the creation of a new array 
    //  that excludes the specified task. Each method is chosen based on the 
    //  specific needs of the operation being performed.
    async toggleFav(id) {
      const task = this.tasks.find(t => t.id === id)
      task.isFav = !task.isFav

      const res = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'PATCH',
        body: JSON.stringify({ isFav: task.isFav }),
        headers: {'Content-Type': 'application/json'}
      })

      if (res.error) {
        console.log(res.error)
      }
    }
  }
})