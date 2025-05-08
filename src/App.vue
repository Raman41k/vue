<script setup lang="ts">

import AddTask from './components/AddTask.vue';
import Tasks from './components/Tasks.vue';
import type {ITask} from "./types/types.ts";
import {ref} from "vue";

const tasks = ref<ITask[]>([])

function handleAddTask(task: ITask) {
  tasks.value.push(task)
}
</script>

<template>
  <AddTask @add-task="handleAddTask" />
  <Tasks :tasks="tasks" />
</template>

<style scoped>

</style>
