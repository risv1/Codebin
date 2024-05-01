<template>
  <h2 class="text-2xl font-semibold mb-4">Register</h2>
  <form>
    <div class="mb-4">
      <label for="name" class="block text-gray-700">Name</label>
      <input
        v-model="name"
        type="text"
        id="name"
        name="name"
        class="rounded-lg border h-8 border-black focus:outline-none form-input mt-1 block w-full"
        required
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700">Email Address</label>
      <input
        v-model="email"
        type="email"
        id="email"
        name="email"
        class="rounded-lg border h-8 border-black focus:outline-none form-input mt-1 block w-full"
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
        class="rounded-lg border h-8 border-black focus:outline-none form-input mt-1 block w-full"
        required
      />
    </div>
    <button
      @click="onSubmit($event)"
      type="submit"
      class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
    >
      Register
    </button>
  </form>
</template>

<script setup lang="ts">
import { z } from "zod";
const name = ref("");
const email = ref("");
const password = ref("");

const config = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

const onSubmit = async (event: Event) => {
  event.preventDefault();
  try {

    const body = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    const validationResult = config.safeParse(body);
    if (!validationResult.success) {
      alert("Invalid input. Please try again.");
      console.log(validationResult.error);
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      alert("Unable to register. Please try again.");
      throw createError({
        message: "An error occurred",
        statusCode: res.status,
      });
    }
    alert("Registration successful");
    console.log("Registration successful");
  } catch (err) {
    console.log(err);
  }
};
</script>
