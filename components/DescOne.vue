<template>
    <div style="border-bottom-right-radius: 20rem;" class="w-full h-full flex lg:flex-row xl:flex-row md:flex-col sm:flex-col bg-sky-300">
      <div class="w-1/2 h-full flex flex-col justify-center items-center">
        <h1 class="text-7xl font-medium text-white">
          Welcome to easy <br />
          <span class="underline font-bold">file access</span>
        </h1>
        <div class="w-4/5 flex flex-row justify-between pt-10 gap-5">
          <Link to="/upload" class="bg-black flex justify-center bg-opacity-90 hover:bg-opacity-100 text-white border-sky-300 border-4 font-semibold text-2xl pr-5 pl-5 pt-3 pb-3 rounded-full hover:border-white w-2/3">
            Upload Now
          </Link>
          <Link to="/login" class="bg-black flex justify-center bg-opacity-90 hover:bg-opacity-100 text-white border-sky-300 border-4 font-semibold text-2xl pr-5 pl-5 pt-3 pb-3 rounded-full hover:border-white w-1/3">
            Login
          </Link>
        </div>
      </div>
      <div class="w-1/2 h-full flex justify-center items-center">
        <h2 class="w-4/5 text-3xl text-white font-medium">
          Upload your files and access them from anywhere. Collaborate with
          colleagues, share documents with friends, or access your files on the
          go. Enjoy peace of mind knowing that your files are securely
          stored and accessible at your fingertips :D
        </h2>
      </div>
    </div>
</template>