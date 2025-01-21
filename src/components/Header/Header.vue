<template>
  <header class="bg-blue-600 text-white shadow relative">
    <!-- Main header -->
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo and slogan -->
      <div class="flex items-center md:items-end space-x-4">
        <router-link
          to="/"
          class="text-3xl font-bold text-white hover:text-gray-300"
        >
          SmartumKids
        </router-link>
        <span class="text-lg font-medium text-gray-200 invisible md:visible">
          Розвиток без меж
        </span>
      </div>

      <!-- Burger-menu -->
      <button
        class="lg:hidden text-2xl"
        @click="toggleMenu"
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <!-- Contacts for big screens -->
      <div class="hidden lg:flex items-center space-x-6">
        <div class="text-sm text-white">
          <p>0 800 330 172</p>
          <p>+38 067 881 93 83</p>
          <p>+38 095 801 10 41</p>
        </div>
        <div class="flex space-x-4">
          <a
            href="#"
            target="_blank"
            class="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-full hover:bg-gray-100"
            aria-label="Telegram"
          >
            <!-- Telegram Icon -->
          </a>
          <a
            href="#"
            target="_blank"
            class="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-full hover:bg-gray-100"
            aria-label="WhatsApp"
          >
            <!-- WhatsApp Icon -->
          </a>
          <a
            href="#"
            target="_blank"
            class="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-full hover:bg-gray-100"
            aria-label="Viber"
          >
            <!-- Viber Icon -->
          </a>
        </div>
      </div>
    </div>

    <BurgerMenu :menuOpen="menuOpen" :links="links" @close="toggleMenu">
      <ProgramButton name="Програми" :links="programLinks" isBurger />
    </BurgerMenu>

    <!-- Additional section -->
    <nav class="bg-gray-50 py-4">
      <div class="container flex justify-center items-center space-x-8 mx-auto">
        <ProgramButton name="Програми" :links="programLinks" />
        <router-link
          to="/prices"
          class="hover:text-blue-600 text-sm font-medium text-gray-800"
          active-class="font-bold"
        >
          Вартість
        </router-link>
        <router-link
          to="/schedule"
          class="hover:text-blue-600 text-sm font-medium text-gray-800"
          active-class="font-bold"
        >
          Графік
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import BurgerMenu from './BurgerMenu.vue';
import ProgramButton from '../ProgramButton.vue';

export default {
  name: 'Header',
  components: {
    BurgerMenu,
    ProgramButton,
  },
  data() {
    return {
      menuOpen: false,
      links: [
        { name: 'Про нас', to: '/about' },
        { name: 'Вартість', to: '/prices' },
        { name: 'Графік', to: '/schedule' },
      ],
      programLinks: [
        { name: 'Ментальна арифметика', to: '/programs/math' },
        { name: 'Англійська', to: '/programs/english' },
        { name: 'Підготовка до школи', to: '/programs/preparation' },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;

      if (this.menuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  },
};
</script>
