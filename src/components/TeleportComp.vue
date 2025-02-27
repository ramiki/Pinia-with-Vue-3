<template>
    <div class="teleport">
        <h2>teleport !</h2>

        <button @click="toggle1 = !toggle1" class="tbtn">Toggle 1</button>
        <teleport v-if="toggle1" to="#endofbody">
            <div class="imported">
                <p>1/ First Text From teleport Component.</p>
            </div>
        </teleport>
        
        <button @click="toggle2 = !toggle2" class="tbtn">Toggle 2</button>
        <teleport v-if="toggle2" to="#endofbody2">
            <div class="imported">
                <p>2/ Second Text From teleport Component.</p>
            </div>
        </teleport>
    </div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        setup() {
            return { toggle1: ref(false), toggle2: ref(false) }
        }
    }
</script>