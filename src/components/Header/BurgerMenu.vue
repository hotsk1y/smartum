<template>
  <div
    class="fixed inset-0 bg-blue-600 z-50 transform transition-transform duration-500 ease-in-out"
    :class="{ 'translate-x-0': menuOpen, 'translate-x-full': !menuOpen }"
  >
    <button
      class="absolute top-4 right-4 text-3xl text-white"
      @click="closeMenu"
      aria-label="Close Menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Navigation -->
    <nav class="flex flex-col items-center justify-center h-full space-y-6">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="text-xl font-medium text-white hover:text-gray-300"
        active-class="font-bold"
        @click="closeMenu"
      >
        {{ link.name }}
      </router-link>
      <button
        class="text-xl font-medium text-white hover:text-gray-300"
        @click="scrollToSection('methods-section')"
      >
        Програми
      </button>
      <slot />
    </nav>

    <!-- Phone and Social Links -->
    <div class="absolute bottom-8 w-full flex flex-col items-center space-y-4">
      <a
        href="tel:+380983143607"
        class="text-lg text-white hover:text-gray-300"
      >
        +38 (098) 314 36 07
      </a>
      <div class="flex space-x-4">
        <a
          v-for="(link, index) in socialLinks"
          :key="index"
          :href="link.href"
          target="_blank"
          class="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-full hover:bg-gray-100"
          :aria-label="link.label"
        >
          <img :src="link.icon" :alt="link.label" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  props: {
    menuOpen: {
      type: Boolean,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
    socialLinks: {
      type: Array,
      required: true,
    },
  },
  emits: ['close'],
  methods: {
    closeMenu() {
      this.$emit('close');
    },
    scrollToSection(id) {
      this.closeMenu();
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
/* Additional styles for positioning and spacing */
</style>
