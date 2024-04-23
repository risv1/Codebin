<template>
    <Nav />
    <div class="flex justify-center items-center w-screen h-screen bg-sky-300">
        <div class="w-4/5 h-[85vh] bg-black overflow-y-auto flex flex-col gap-3">
            <h1 class="font-bold text-3xl self-center pt-5 pl-5 text-sky-300">File Name: {{file.fileName}}</h1>
            <p class="self-center text-xl font-normal"></p>
            <div class="self-center pt-2 w-full">
                <p class="text-white pl-5 font-medium text-xl">File ID: <span class="text-sky-300">{{ file.id }}</span></p>
            </div>
            <button @click="copyToClipboard" class="text-white text-lg self-start pl-5 font-medium underline">Copy Text</button>
            <button @click="downloadFile(file.fileName, file.fileData)" class="text-white text-lg self-start pl-5 font-medium underline">Download File</button>
            <div class="w-full h-full flex flex-col p-5 mt-5">
                <pre id="fileData" class="text-white">{{ file.fileData }}</pre>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()
    const id = route.params.id
    const file = ref({fileName: "", fileData: "", id: ""})

    const downloadFile = async(fileName: string, fileData: string) => {
        const blob = new Blob([fileData], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
    }

    const copyToClipboard = () => {
    const textToCopy = document.getElementById('fileData')?.innerText as string;
    navigator.clipboard.writeText(textToCopy);
  };

    watchEffect(() => {
        const fetchFile = async() => {
            const res = await fetch(`http://localhost:3000/api/get-file/${id}`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            console.log("Data: ", data);
            if(data.statusCode === 200){
                console.log("File: ", data.file);
                file.value = data.file;
            } else {
                console.error("Failed to fetch file");
                throw new Error("Failed to fetch file");
            }
        }
        fetchFile()
    })

</script>
