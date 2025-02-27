<template>
  <main>

    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="loading">Loading tasks...</div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do.</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} tasks in your favs list.</p>
      <div v-for="task in favs" :key="task.id">
        <!-- pass the task to the component as a props -->
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- $reset predifined methode in vue that reset the store to its original state -->
    <!-- <button @click="taskStore.$reset">reset the state</button> -->
     <!-- make an action to reset instead of reset directly -->
    <button @click="taskStore.resetAll">reset the state</button>

    <!-- call the teleport component -->
    <!-- <TeleportComp /> -->

  </main>
</template>

<script setup>
// use script setup syntax instead of traditional export default { setup() { ... } }

  import TaskDetails from './components/TaskDetails.vue'
  import TaskForm from './components/TaskForm.vue'
  import TeleportComp from './components/TeleportComp.vue'

  // call the store
  import { useTaskStore } from './stores/TaskStore'
  import { ref  } from 'vue'
  import { storeToRefs } from 'pinia'

  // the traditional export default
  // export default {
    // not need to explicitly register components in the components option
    // components: { TaskDetails, TaskForm },
    // setup() {

      // invoke the store
      const taskStore = useTaskStore()

      // Use storeToRefs hook to create reactive references of those propties and getters (not for actions)
      // from the store (taskStore)  , so instead of creat ref for each one storeToRefs() group it for us
      // Create refs for each property : const tasks = ref(taskStore.tasks);... , 
      // Optionally, you can create computed properties to keep them in sync : const syncTasks = computed(() => taskStore.tasks);...
      const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore)

      // fetch tasks
      taskStore.getTasks()

      const filter = ref('all')

      // script setup syntax has no need to return Variables and functions defined , 
      // they are automatically available in the template without needing to return them explicitly
        // return the store to call it inside the template like (taskStore.tasks.name)
        // return { taskStore, filter, tasks, loading, favs, totalCount, favCount }
    // }
  // }
</script>
