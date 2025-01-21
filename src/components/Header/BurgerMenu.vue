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
      <slot />
    </nav>
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
  },
  emits: ['close'],
  methods: {
    closeMenu() {
      this.$emit('close');
    },
  },
};
</script>
