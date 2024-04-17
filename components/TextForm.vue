<template>
  <form method="post" class="w-full h-full flex p-5">
    <div class="w-1/2 h-full border-4 border-gray-800 rounded">
      <textarea
        required
        v-model="data"
        @keydown.tab.prevent="handleTab"
        class="w-full h-full p-5 bg-black focus:outline-none text-gray-300 font-semibold text-xl"
        placeholder="Enter your text here"
      />
    </div>
    <div class="w-1/2 h-full p-5 flex flex-col bg-gray-800">
      <div class="flex justify-center items-center flex-col">
        <h1 class="text-3xl font-bold p-5 text-white">Upload Settings</h1>
        <div class="flex w-2/3 flex-col gap-5">
          <div class="w-full flex flex-col gap-1">
            <label class="text-white text-xl" for="filetype"> File Type </label>
            <select
              class="bg-gray-700 pl-5 text-xl text-white w-full h-14 rounded"
              v-model="filetype"
              required
            >
              <option
                class="pl-10 text-white text-xl"
                v-for="option in options"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <div class="w-full flex flex-col">
            <label class="text-white text-xl" for="title"> Title </label>
            <input
              class="bg-gray-700 text-white text-xl pl-5 w-full h-14 rounded"
              v-model="title"
              required
            />
          </div>
          <div class="w-full flex flex-col">
            <label class="text-white text-xl" for="password"> Password </label>
            <input
              class="bg-gray-700 text-white text-xl pl-5 w-full h-14 rounded"
              v-model="password"
            />
          </div>
          <button
            class="border-2 rounded text-xl flex justify-center mt-3 items-center bg-gray-600 text-white font-semibold w-32 h-12"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
const data = ref("");
const filetype = ref("");
const title = ref("");
const password = ref("");
const options = ref([
  { value: "c", label: "C" },
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "py", label: "Python" },
  { value: "js", label: "JavaScript" },
  { value: "ts", label: "TypeScript" },
  { value: "rb", label: "Ruby" },
  { value: "php", label: "PHP" },
  { value: "swift", label: "Swift" },
  { value: "kt", label: "Kotlin" },
  { value: "rs", label: "Rust" },
  { value: "go", label: "Go" },
  { value: "scala", label: "Scala" },
  { value: "pl", label: "Perl" },
  { value: "r", label: "R" },
  { value: "sh", label: "Shell" },
  { value: "cs", label: "C#" },
]);

const handleTab = (e: any) => {
  if (e.key === "Tab") {
    e.preventDefault();
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    const value = e.target.value;
    e.target.value = `${value.substring(0, start)}\t${value.substring(end)}`;
    e.target.selectionStart = e.target.selectionEnd = start + 1;
  }
};
</script>
