<template>
  <div class="relative" :class="isBurger && 'ml-2'" ref="dropdownContainer">
    <button
      @click="toggleDropdown"
      class="inline-flex items-center"
      :class="
        isBurger
          ? 'text-xl font-medium text-white hover:text-gray-300'
          : 'hover:text-blue-600 text-sm font-medium text-gray-800'
      "
    >
      {{ name }}
      <span class="ml-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </button>

    <!-- Menu -->
    <div
      v-if="isOpen"
      class="absolute left-0 mt-2 bg-blue-200 shadow-lg rounded-lg py-2 w-48 text-sm text-gray-800 z-10"
    >
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block w-full px-4 py-2 hover:bg-gray-100"
        @click="closeDropdown"
      >
        {{ link.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramButton',
  props: {
    name: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
    isBurger: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    handleClickOutside(event) {
      if (
        this.$refs.dropdownContainer &&
        !this.$refs.dropdownContainer.contains(event.target)
      ) {
        this.closeDropdown();
      }
    },
  },
  mounted() {
    window.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  },
};
</script>
