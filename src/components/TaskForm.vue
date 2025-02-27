<template>
  <form @submit.prevent="handleSubmit">
    <input 
      type="text" 
      placeholder="I need to..."
      v-model="newTask"
    >
    <button>Add</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore'

export default {
  setup() {
    const taskStore = useTaskStore()

    const newTask = ref('')

    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          // we change the id to string bcs json-server auto stringify ids , and get errors if id was a number
          id: String(Math.floor(Math.random() * 1000000))
        })
        newTask.value = ""
      }
    }

    return { handleSubmit, newTask }
  }
}
</script>