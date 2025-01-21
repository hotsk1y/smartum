<template>
  <section
    class="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white text-center px-4"
  >
    <div>
      <h1 class="text-9xl font-extrabold mb-6">404 :(</h1>
      <p class="text-2xl md:text-3xl font-semibold mb-4">
        Упс! Сторінку не знайдено.
      </p>
      <p class="text-lg md:text-xl mb-8">
        Схоже, що ви потрапили не туди. Перевірте адресу або поверніться на
        головну сторінку.
      </p>
      <router-link
        to="/"
        class="bg-white text-blue-600 font-bold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
      >
        На головну
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: '404Page',
};
</script>
