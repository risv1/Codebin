<template>
  <div class="w-screen h-20 flex bg-sky-300">
    <div class="flex w-full h-full justify-between items-center p-10">
      <NuxtLink
        to="/"
        class="hover:cursor-pointer text-5xl tracking-wide hover:text-white pt-5 font-normal text-black"
      >
        Codebin
      </NuxtLink>
      <div
        class="ml-auto flex flex-row pt-5 justify-center items-center gap-10"
      >
        <NuxtLink
          to="/"
          class="text-3xl hover:text-white font-medium text-black"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/upload"
          class="text-3xl hover:text-white font-medium text-black"
        >
          Upload
        </NuxtLink>
        <NuxtLink
          v-if="notLoggedIn"
          to="/browse"
          class="text-3xl hover:text-white font-medium text-black"
        >
          Browse
        </NuxtLink>
        <NuxtLink
          v-if="!notLoggedIn"
          to="/login"
          class="bg-opacity-90 hover:bg-opacity-100 text-2xl hover:border-white border-sky-300 border-4 text-white bg-black pl-7 pr-7 pt-2 pb-2 mb-1 font-semibold rounded-full"
        >
          Login
        </NuxtLink>
        <p
          v-if="notLoggedIn"
          @click="logout()"
          to="/login"
          class="bg-opacity-90 hover:cursor-pointer hover:bg-opacity-100 text-2xl hover:border-white border-sky-300 border-4 text-white bg-black pl-7 pr-7 pt-2 pb-2 mb-1 font-semibold rounded-full"
        >
          Logout
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const { user, setUser } = useAuthStore();
const notLoggedIn = ref<boolean>(true);

watchEffect(() => {
  if (user) {
    notLoggedIn.value = true;
  } else {
    notLoggedIn.value = false;
  }
});

const logout = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert("Failed to logout");
      console.log("Failed to logout");
    }
    setUser(null);
    alert("Logged out");
    navigateTo("/login");
    console.log("Logged out");
  } catch (err) {
    alert("Failed to logout");
    console.error(err);
  }
};
</script>
