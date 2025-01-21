<template>
  <footer class="bg-primary text-secondary py-6">
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center"
    >
      <!-- Company Name -->
      <div class="text-2xl font-bold mb-4 md:mb-0">SmartumKids</div>

      <!-- Right Section -->
      <div
        class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
      >
        <!-- Button -->
        <button
          class="bg-white text-primary font-bold py-2 px-4 rounded hover:bg-gray-200 transition"
          @click="writeToDirector"
        >
          Написати директору
        </button>

        <!-- Social Links -->
        <div class="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            class="hover:text-blue-300 text-2xl"
            aria-label="Instagram"
          >
            📷
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            class="hover:text-blue-300 text-2xl"
            aria-label="TikTok"
          >
            🎥
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            class="hover:text-blue-300 text-2xl"
            aria-label="Facebook"
          >
            📘
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    writeToDirector() {
      alert('Thank you!');
    },
  },
};
</script>
