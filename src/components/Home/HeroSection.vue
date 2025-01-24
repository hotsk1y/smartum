<template>
  <section
    class="rounded-3xl blue text-white my-8 mx-4 md:mx-8 lg:mx-20 p-8 sm:px-12 md:px-16 lg:py-0 lg:px-28 flex flex-col lg:flex-row items-center justify-between"
  >
    <!-- Left Content -->
    <div class="lg:w-1/2 text-center lg:text-left">
      <h1 class="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">
        Розвиваємо ваш потенціал
      </h1>
      <p class="text-base md:text-xl mb-6 md:mb-8">
        Приєднуйтесь! Пробний урок —
        <span class="font-bold">безкоштовно</span>.
      </p>
      <div
        class="flex flex-col sm:flex-row w-full sm:space-x-4 sm:space-y-0 space-y-4"
      >
        <button
          class="w-full sm:w-auto flex-1 bg-white text-blue-600 font-bold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
          @click="scrollToSection('contact')"
        >
          Записатися на урок
        </button>
        <button
          class="w-full sm:w-auto flex-1 bg-white text-blue-600 font-bold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
          @click="scrollToSection('methods-section')"
        >
          Дізнатися більше
        </button>
      </div>
    </div>

    <!-- Right Image -->
    <div class="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
      <img
        src="@/assets/images/main-banner-image.png"
        alt="Main Banner Image"
        class="w-full max-w-xs sm:max-w-sm lg:max-w-full"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        const offset = 180; // Паддинг для учёта фиксированного хедера
        const elementPosition =
          section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    },
  },
};
</script>

<style scoped>
.blue {
  background: #0047ff;
}
</style>
