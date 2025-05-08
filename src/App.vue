<script setup lang="ts">

import {ref} from "vue";

const photos = ref([]);
const newPhotoUrl = ref('');

const addPhoto = () => {
  const newPhoneURl = newPhotoUrl.value;
  const photo = {
    id: photos.value.length + 1,
    url: newPhoneURl,
    isFavorite: false,
  };
  if (!newPhoneURl) return;
  photos.value.push(photo);
  newPhotoUrl.value = '';
};

const toggleFavorite = (photo) => {
  photo.isFavorite = !photo.isFavorite;
};

const removePhoto = (index) => {
  photos.value = photos.value.filter((photo) => photo.id !== index);
};
</script>

<template>
  <form @submit.prevent="addPhoto">
    <label>
      <input v-model="newPhotoUrl" name="photo" placeholder="Enter image URL">
    </label>
    <button type="submit">Add Photo</button>
  </form>

  <p v-if="!photos.length" class="no-photos">No photos added yet. Add some!</p>

  <div v-else class="gallery">
    <div class="photo" v-for="photo in photos" :key="photo.id">
      <img @click="removePhoto(photo.id)" :src="photo.url" alt="">
      <button class="favorite-button" @click="toggleFavorite(photo)" :class="{ active: photo.isFavorite }">
        ★
      </button>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: monospace;
  padding: 20px;
  font-size: 16px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.photo {
  position: relative;
  border: 1px solid #ccc;
}

.photo img {
  width: 100%;
  display: block;
}

.favorite-button {
  background: none;
  border: none;
  color: #ccc;
  font-size: 24px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
}

.favorite-button.active {
  color: gold;
}

.no-photos {
  text-align: center;
  color: #999;
}

form {
  margin-bottom: 20px;
}
</style>
