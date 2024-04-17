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
              type="file"
              class="border-dotted border-sky-500 border-4 h-2/3 w-4/5 file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-gray-40 file:text-sky-500
                        hover:file:bg-sky-200"
            ></input>
            <button class="h-2/3 w-fit p-2 border-4 border-sky-500 bg-sky-300 text-white font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div class="bg-black w-full h-[50vh]"></div>
    </div>
</template>