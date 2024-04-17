<template>
    <div
    style="border-top-right-radius: 20rem"
      class="w-full h-full bg-sky-300 flex justify-center items-center"
    >
      <div class="w-2/3 h-4/5 bg-white shadow-sm shadow-gray-500 mt-32 rounded flex flex-row">
        <div class="w-1/2 h-full flex justify-center items-center items p-8 flex-col">
          <div class="w-4/5 self-center">
            <h1 class="text-3xl text-black font-bold">
              Codebin is built keeping accessibility in mind
            </h1>
          </div>
          <div class="w-2/3 self-center">
            <!-- <img
                src="/cloud.svg"
              alt="Cloud"
              class="hover:cursor-pointer"
              @click="navigateTo('/upload')"
            /> -->
          </div>
        </div>
        <div class="w-1/2 h-full flex justify-center p-8">
          <div class="w-2/3 h-full flex justify-center items-center flex-col gap-3">
            <h2 class="text-black text-2xl font-semibold">
              Get started with Codebin
            </h2>
            <p class="text-black text-xl font-light mt-2">
              Sign in with credentials to gain access to modifying priveleges.
            </p>
            <NuxtLink to="/login" class="bg-black text-white p-2 rounded-lg">
              Login
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
</template>