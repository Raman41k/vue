<script setup lang="ts">

import {computed, ref} from "vue";

const questions = [
  'How much is 2+2',
  'How much is 3*5+1',
  'What is the rest from 3/1'
];
const answers = [
  '4',
  '16',
  '1'
];
const score = ref(0);
const current = ref(0);
const answer = ref<string>('');

const question = computed(() => questions[current.value]);
const rightAnswer = computed(() => answers[current.value]);
const areWeDone = computed(() => questions.length === current.value);

const check = () => {
  if (answer.value && +answer.value === +rightAnswer.value) {
    score.value++;
  }

  answer.value = '';
  current.value++;

  if (areWeDone.value) {
    clearInterval(interval);
  }
}
const interval = setInterval(check, 5000);

</script>

<template>
  <div>
    {{areWeDone ? 'Your score: ' + score : 'Next question'}}
  </div>
  <div>
    {{question}}
  </div>
  <div v-if="!areWeDone">
    <label>
      <input v-model="answer" />
    </label>
  </div>
</template>

<style scoped>
.body {
  font-family: monospace;
  padding: 20px;
  font-size: 2em;
}

.can {
  color: green;
}

.cant {
  color: red;
}
</style>
