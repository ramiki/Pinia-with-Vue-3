<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <!-- to use material-icons we need to pass a claas of material-icons to a tag and then 
        call the ican with there keyword like : delete - favorite - menu .... ( see material icons docs ) -->
      <i 
        class="material-icons" 
        @click="taskStore.deleteTask(task.id)">
        delete
      </i>
      <i 
        class="material-icons"
        :class="{active: task.isFav}" 
        @click="taskStore.toggleFav(task.id)">
        favorite
      </i>
    </div>
  </div>
</template>

<script>
  import { useTaskStore } from '../stores/TaskStore'

  export default {
    // register the task passed fron the parent as a props
    props: ['task'],
    setup() {
      const taskStore = useTaskStore()

      return { taskStore }
    }
  }
</script>