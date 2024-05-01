<template>
     <div class="w-full h-full flex bg-inherit flex-col">
      <div class="w-full bg-sky-300 h-[60%] flex justify-center">
        <div class="mt-20 absolute bg-white w-2/3 h-4/5 shadow-md shadow-gray-300 rounded justify-start items-center flex flex-col">
          <div class="flex mt-16 h-[30%] justify-center items-center">
            <h1 class="text-4xl font-bold text-black">Upload file</h1>
          </div>
          <form
            method="post"
            class="flex h-full w-full justify-center items-center"
          >
            <input
              required
              name="file"
              ref="fileInput"
              type="file"
              @change="updateFileInput"
              class="border-dotted border-sky-500 border-4 h-2/3 w-4/5 file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-gray-40 file:text-sky-500
                        hover:file:bg-sky-200"
            ></input>
            <button @click="uploadFile" class="h-2/3 w-fit p-2 border-4 border-sky-500 bg-sky-300 text-white font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div class="bg-black w-full h-[50vh]"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fileInput = ref<HTMLInputElement | null>(null);

const updateFileInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    fileInput.value = target;
  }
};

const uploadFile = async (e: any) => {
  e.preventDefault()
  if (!fileInput.value || !fileInput.value.files || fileInput.value.files.length === 0){
    return alert('Please select a file');
  }

  const file = fileInput.value.files[0];

  const fileReader = new FileReader();
  fileReader.onload = async () => {
    try {
      const fileData = fileReader.result as string;
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: file.name, data: fileData })
      });
      const returnedData = await response.json();
      if (returnedData.statusCode !== 200) {
        console.error(returnedData);
        alert('Upload failed');
        throw new Error('Upload failed');
      } else {
      console.log(returnedData)
      console.log('File uploaded successfully');
      alert('File uploaded successfully');
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  fileReader.readAsText(file);
};

</script>