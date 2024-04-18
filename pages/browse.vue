<template>
    <div class="container">
      <ul class="file-list">
        <li v-for="(file, index) in files" :key="index" class="flex justify-between items-center">
          <span>{{ file }}</span>
          <button @click="downloadFile(prefix+file)" class="bg-green-500 rounded-lg p-2 text-white">Open</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">

import { ref, watchEffect } from "vue";

  const prefix = process.env.PREFIX_URL

  const files = ref([]);
  
  watchEffect(() => {
    fetch("http://localhost:3000/api/get-files")
      .then((res) => res.json())
      .then((data) => {
        files.value = data.message;
        console.log(data.message);
      });
  });

  const downloadFile = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>
  
  <style scoped>
  .container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .file-list {
    list-style-type: none;
    padding: 0;
  }
  
  .file-list li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  </style>