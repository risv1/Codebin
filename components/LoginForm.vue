<template>
  <h2 class="text-2xl font-semibold mb-4">Login</h2>
  <form>
    <div class="mb-4">
      <label for="email" class="block text-gray-700">Email Address</label>
      <input
        v-model="email"
        type="email"
        id="email"
        name="email"
        class="rounded-lg h-8 border border-black focus:outline-none form-input mt-1 block w-full"
        required
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-700">Password</label>
      <input
        v-model="password"
        type="password"
        id="password"
        name="password"
        class="border h-8 rounded-lg border-black focus:outline-none form-input mt-1 block w-full"
        required
      />
    </div>
    <button
      @click="onSubmit($event)"
      type="submit"
      class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      Login
    </button>
  </form>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
import { z } from "zod";

const { setUser, user } = useAuthStore();

const email = ref("");
const password = ref("");

const config = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const onSubmit = async (event: Event) => {
  event.preventDefault();
  try {
    
    const body = {
      email: email.value,
      password: password.value,
    };

    const validatedResult = config.safeParse(body);
    if (!validatedResult.success) {
      alert("Invalid input. Please try again.");
      return;
    }

    const res = await fetch("/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    if (!res.ok) {
      alert("Unable to login. Please try again.");
      throw createError({
        message: "An error occurred",
        statusCode: res.status,
      });
    }
    const response = await res.json();
    if(!response){
      alert("Unable to login. Please try again.");
      console.log(response);
    }
    if (response.statusCode === 200) {
      setUser(response.user);
      alert("Login successful");
      navigateTo("/");
    }else{
      alert("Login failed");
      console.log(response.message);
    }
  } catch (err) {
    console.error(err);
    alert("Unable to login. Please try again.");
  }
};
</script>
