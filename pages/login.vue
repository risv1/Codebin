<template>
    
    <div class="h-screen w-screen flex items-center justify-center bg-sky-300">
        <div class="fixed w-fit top-0 right-0 p-8 text-black text-x cursor-pointer" @click="()=>navigateTo('/')">X</div>    
  <div class="bg-white p-8 rounded shadow-md w-1/3">
    <div v-if="select == 'register'" class="w-full h-full flex bg-white flex-col justify-center items-center">
                <RegisterForm />
                <button class="mt-5 hover:underline" @click="onSelect('login')" >Already have an account? Click to login!</button>
            </div>
            <div v-else-if="select == 'login'" class="w-full h-full flex bg-white flex-col justify-center items-center">
                <LoginForm />
                <button class="mt-5 hover:underline" @click="onSelect('register')" >New user? Click to register!</button>
            </div>
  </div>
</div>

</template>

<script setup lang="ts">
    const select = ref('login');

const onSelect = (value: string) => {
    select.value = value;
}
</script>