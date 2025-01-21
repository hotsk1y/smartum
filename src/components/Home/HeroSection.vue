<template>
  <section
    class="rounded-3xl bg-blue-600 text-white my-8 mx-4 md:mx-8 lg:mx-20 p-8 md:p-16 lg:p-20"
  >
    <div class="container mx-auto text-center">
      <h1 class="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">
        Розвиваємо ваш потенціал
      </h1>
      <p class="text-base md:text-xl mb-6 md:mb-8">
        Приєднуйтесь до нас і відкрийте світ знань! Перший пробний урок —
        <span class="font-bold">безкоштовно</span>.
      </p>
      <div
        class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
      >
        <button
          class="bg-white text-blue-600 font-bold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
        >
          Записатися на урок
        </button>
        <button
          class="bg-blue-700 text-white font-bold py-3 px-6 rounded shadow hover:bg-blue-800 transition"
        >
          Дізнатися більше
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
/* Если необходимо, добавьте дополнительные стили */
</style>
