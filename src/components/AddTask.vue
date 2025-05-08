<script lang="ts">
import {defineComponent, onMounted, ref, watch} from 'vue';
import type {ITask} from "../types/types.ts";

export default defineComponent({
  name: "AddTask",
  emits: ['add-task'],
  setup(_, {emit}) {
    const newTask = ref<HTMLInputElement>();
    const priority = ref<'High' | 'Medium' | 'Low' | ''>('');

    onMounted(() => {
      if (newTask.value) newTask.value.focus();
    });

    const handleSubmit = (e: Event) => {
      e.preventDefault()
      const inputValue = newTask.value?.value;

      if (!inputValue || !priority.value) return

      const task: ITask = {
        id: Date.now(),
        name: inputValue,
        priority: priority.value,
        done: false,
      }

      emit('add-task', task);

      if (newTask.value) newTask.value.value = ''
      priority.value = ''
    }

    return {
      newTask,
      priority,
      handleSubmit
    };
  }
});
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <input
          ref="newTask"
          type="text"
          placeholder="Add new task"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
          v-model="priority"
          class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option disabled selected value="">Select priority</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Add Task
      </button>
    </form>

    <div class="mt-6">
      <input
          type="text"
          placeholder="Filter tasks..."
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
</template>

<style scoped>

</style>