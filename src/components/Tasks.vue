<script lang="ts">
import {defineComponent} from 'vue'
import type {ITask} from "../types/types.ts";

export default defineComponent({
  name: "Tasks",
  props: {
    tasks: {
      type: Array as () => ITask[],
    }
  },
  setup() {

  }
})
</script>

<template>
  <div v-if="tasks?.length === 0" class="max-w-md mx-auto mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
    <p class="text-gray-600 text-center">No tasks found. Try changing the filter or add some tasks!</p>
  </div>

  <div v-else class="max-w-md mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Your Tasks</h3>
    <div class="space-y-3">
      <div
          v-for="task in tasks"
          :key="task.id"
          :class="{
            'bg-red-500': task.priority === 'High',
            'bg-yellow-500': task.priority === 'Medium',
            'bg-green-500': task.priority === 'Low'
          }"
          class="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50"
      >
        <div class="flex items-center space-x-2">
          <input type="checkbox" :checked="task.done"  class="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
          <span class="text-gray-700">{{ task.name }} ({{ task.priority }})</span>
        </div>
        <button
            class="text-red-500 hover:text-red-700 transition duration-150 text-lg cursor-pointer"
            title="Remove task"
        >
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>