<template>
  <Nav />
    <div class="w-screen h-screen bg-sky-300 flex justify-center items-center">
      <div class="w-2/3 h-4/5 overflow-y-auto flex flex-col gap-5 bg-white rounded-lg">
        <h1 class="font-bold text-3xl self-center pt-5">Browse Files</h1>
        <p class="self-center text-xl font-normal">View and download fetched files</p>
        <input v-model="search" type="text" placeholder="Search files" class="self-center mb-3">
        <ul v-if="error === null" class="self-center gap-3 flex flex-col pt-2 w-[20vw]">
        <li v-for="(file, index) in filteredFiles" :key="index" class="flex justify-between items-center">
          <span class="text-xl"><span class="text-xl font-bold">{{ index+1 }}</span>: {{ file[1] }}</span>
          <button @click="goTo(file[0])" class="bg-green-500 rounded-lg p-2 text-white">Open</button>
        </li>
      </ul>
      <div v-else class="self-center flex justify-center items-center w-full h-2/3">
        <p class="text-red-500 text-xl">{{ error }}</p>
      </div>
      </div>
     
    </div>
  </template>
  
  <script setup lang="ts">

import { ref, watchEffect } from "vue";

  const prefix = process.env.PREFIX_URL
  const router = useRouter()

  const files = ref([]);
  const error = ref<string | null>(null);
  const search = ref("");
  
  const goTo = (id: string) => {
    router.push(`/browse/${id}`)
  }

  const filteredFiles = computed(() => {
  if (search.value) {
    return files.value.filter((file) => (file[1] as string).toLowerCase().includes(search.value.toLowerCase()));
  } else {
    return files.value;
  }
});

  watchEffect(() => {
    const fetchFiles = async() => {
    try{
      const res = await fetch("http://localhost:3000/api/get-files", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
        const data = await res.json();
        console.log("Data: ", data);
        if(data.statusCode === 200){
        files.value = data.files;
        console.log("Files: ", data.message);
      } else {
        console.error("Failed to fetch files");
        error.value = "No files found. Upload a file to view it.";
        throw new Error("Failed to fetch files");
      }
    }catch(err){
      console.error(err);
    }
  }
  fetchFiles();
  });

  
</script>
  