<template>
    <div class="bg-black w-full h-full flex flex-row">
      <div class="w-1/2 h-full flex flex-col p-14 gap-5">
        <h1 class="font-bold text-3xl mt-14 text-white">
          Uploading and accessing files
        </h1>
        <div class="mt-10 flex gap-4 flex-col">
          <p class="text-white text-xl">
            Remove the hassle of carrying around USB sticks or emailing files to
            yourself. Access your files from anywhere, at any time, regardless
            of the device being used.
          </p>
          <p class="text-white text-xl">
            Our client UI is super easy to use, making it a breeze to upload and
            access your files. And the ability to modify and delete files is
            just as easy, with authentication measures in place to ensure your
            files cannot be modified or deleted by unauthorized users.
          </p>
        </div>
      </div>
      <div class="w-1/2 h-full flex flex-col justify-center items-center p-14 gap-5">
        <div class="w-11/12 border-4 border-gray-800 rounded-xl h-full overflow-y-auto p-4 bg-black text-white font-mono text-sm">
          <div v-for="(line, index) in codeLines" :key="index" class="flex w-full justify-start items-center h-10">
            <p class="text-white">
              {{ index + 1 }}. {{ line }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        codeLines: `import React from 'react';
        import { useDropzone } from 'react-dropzone';
  
        function MyDropzone() {
          const {getRootProps, getInputProps, isDragActive} = 
          useDropzone();
  
          return (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <p>Drag 'n' drop some files here, or click to select files</p>
              }
            </div>
          )
        }`.split("\n")
      }
    }
  }
  </script>
  