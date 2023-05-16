<template>
  <h1>TODO <button class="btn btn-primary btn-sm" @click="loadTodo">Reload</button></h1>
  <hr />
  <div class="row mx-auto">
    <div class="col-12">
      <input type="text" v-model="displayTask" @keyup.enter="addTodo(displayTask)" />
      <button class="btn btn-primary mx-2 btn-sm" @click="addTodo(displayTask)">Add</button>
    </div>
  </div>
  <ul>
    <li :style="styleCheck(item.done)" v-for="(item, index) in saved" :key="index">
      {{ item.desc }} <input type="checkbox" v-model="item.done" />
    </li>
  </ul>
</template>

<script setup>
import { ref, computed } from 'vue'

</script>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'todo2',
  setup() {
    const saved = ref([])
    const displayTask = ref('')
    const filteredDone = computed(function () {
      return saved.value.filter((i) => !i.done)
    })

    const addTodo = (val) => {
      let formatData = {
        desc: val,
        done: false,
      }
      saved.value.push(formatData)
      displayTask.value = ''
      sessionStorage.setItem('saved', JSON.stringify(saved.value))
    }
    const styleCheck = (val) => {
      return {
        'text-decoration': val ? 'line-through' : 'none',
      }
    }
    const loadTodo = () => {
      saved.value = JSON.parse(localStorage.getItem('saved'))
    }

    return {
      filteredDone,
      displayTask,
      saved,
      loadTodo,
      styleCheck,
      addTodo,
    }
  },
  async created() {},
}
</script>
