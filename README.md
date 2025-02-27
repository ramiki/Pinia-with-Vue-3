# pinia-tasks

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
or with vite ( port given ): ( we also add a default port in vite.config,js if so )
npx vite --port=4000
```

### Compile and Minify for Production

```sh
npm run build
```



                  ------------------------------------------------------------------------------------------------


# this is a test of pinia in a vue3 project (composition api) : ( we tested the script setup syntax in App.vue )



## test telport :
see : index.html -  src/App.vue  -  src/components/TeleportComp.vue  -  src/assets/main.css




## Key Differences Between script setup and Traditional setup() in a composition api :

1 : Component Definition:

* Traditional : You define a component using export default { ... }.

* script setup : You do not need to use export default. The script setup block is a compiler macro that automatically defines the component.


2 : Props Declaration:

* Traditional : Props are declared in the props option.
export default {
  props: ['task'],
  setup() { ... }
}

* script setup :  Use defineProps() to declare props directly.
defineProps(['task']);


3 : Accessing Props:

* Traditional : Props are accessed via the props argument in the setup() function.
setup(props) {
  const task = props.task;
}

* script setup : Props can be accessed directly in the template and script without needing to reference them through an argument.


4 : Returning Values:

* Traditional : You must return any reactive properties or methods from the setup() function to make them available in the template.
return { taskStore };

* script setup : You do not need to return anything. All defined variables and functions are automatically available in the template.


5 : Using Reactive References:

* Traditional : You can create reactive references using ref() or reactive() and return them.
import { ref } from 'vue'

export default {
  // setup is a special hook dedicated for the Composition API.
  setup() {
    const count = ref(0)

    // expose the ref to the template
    return {
      count
    }
  }
}

* script setup : You can create reactive references using ref() or reactive() directly, and they are automatically available in the template.
const count = ref(0);


6 : Using the Composition API:

* Traditional : You need to import and use Composition API functions within the setup() function.

* script setup : You can import and use Composition API functions directly in the script setup block without needing to return them.


7 : Automatic Component Registration:

* Traditional : You need to register components in the components option.
components: { TaskDetails, TaskForm }

* script setup : Imported components are automatically available in the template without explicit registration.


8 : Lifecycle Hooks:

* Traditional : Lifecycle hooks are defined as methods in the export default object.
mounted() { ... }

* script setup : You can use lifecycle hooks directly by importing them and calling them in the script setup block.
import { onMounted } from 'vue';
onMounted(() => { ... });


9 : TypeScript Support:

* Traditional : TypeScript support is available but may require more boilerplate.

* script setup : Offers improved type inference and support for TypeScript, making it easier to work with typed data.




## Vuex vs. Pinia

(the common things btwn those two is in vuex project (getters - actions ...) )
* Vuex and Pinia are state management libraries for Vue.js applications, each with unique features and design philosophies. Below is a comparison between theme :

- Vuex

Design Philosophy:
    Traditional Flux-like architecture.

API Structure:
    Uses a more structured approach with actions, mutations, and getters.

Reactivity:
    Based on Vue's reactivity system.

TypeScript Support:
    Available but can be cumbersome to implement.

Modularity:
    Supports modules for splitting stores, which can add complexity.

Development Experience:
    Established ecosystem with a steeper learning curve due to its structure.

Community and Ecosystem:
    Larger community with extensive plugins and resources.


- Pinia

Design Philosophy:
    Simpler and more intuitive, designed with the Composition API in mind.

API Structure:
    Uses a simpler API with stores defined as functions. It allows for direct state manipulation with actions and getters. without the need for mutations.

Reactivity:
    Built on Vue 3's Composition API, providing improved reactivity.

TypeScript Support:
    Designed for TypeScript from the ground up, offering better type inference.

Modularity:
    Encourages modularity with easy store definitions, reducing complexity.

Development Experience:
    Better developer experience with a more straightforward API, making it easier to learn and use.

Community and Ecosystem:
    Newer but rapidly growing in popularity, especially among Vue 3 users.




# installation :

## install latest (vue3) project including vite with npm cmd : npm init vue@latest 
    we can chouse to add pinia directly in the installation , but we tested to installed it separatly like below  ( we did "no" for all prompte installation )

## install all dependencies : npm install

## pinia install :   npm install pinia

## json-server : npm install -g json-server
    we install json-server globaly ( globaly is that we can use this plugin in all our project instead of install it just in the current project! )
    json-server creat an endpoint server to manupilate the json file given like a db to presist data on it , 

* run json server : json-server -w ./data/db.json  ( -w for watching the json file mentioned )
     return : the Index  http://localhost:3000/
              and Endpoints http://localhost:3000/tasks  ( the endpoint /tasks is the root object name )






