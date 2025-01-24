<template>
  <header class="bg-primary text-white shadow fixed top-0 left-0 w-full z-50">
    <!-- Main header -->
    <div
      class="container mx-auto px-4 py-4 flex justify-between items-center relative"
    >
      <!-- Logo -->
      <router-link
        to="/"
        class="text-3xl font-bold text-white hover:text-gray-300"
      >
        SmartumKids
      </router-link>

      <!-- Centered slogan -->
      <div
        class="absolute left-1/2 transform -translate-x-1/2 text-lg invisible md:visible font-medium text-gray-200"
      >
        Розвиток без меж
      </div>

      <!-- Contacts and social links -->
      <div class="hidden lg:flex items-center space-x-6">
        <div class="text-sm text-white">
          <a href="tel:+380983143607" class="hover:text-gray-300">
            +38 (098) 314 36 07
          </a>
        </div>
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

      <button
        class="lg:hidden text-2xl"
        @click="toggleMenu"
        aria-label="Toggle Menu"
      >
        ☰
      </button>
    </div>

    <BurgerMenu
      :menuOpen="menuOpen"
      :links="links"
      :socialLinks="socialLinks"
      @close="toggleMenu"
    >
    </BurgerMenu>

    <!-- Additional section -->
    <nav class="bg-gray-50 py-4">
      <div class="container flex justify-center items-center space-x-8 mx-auto">
        <router-link
          to="/about"
          class="hover:text-blue-600 text-sm font-medium text-gray-800"
          active-class="font-bold"
        >
          Про нас
        </router-link>
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
        {
          label: 'Вік 4-7 років',
          items: [
            {
              name: 'Ментальна арифметика',
              to: '/programs/4-7/mental-arithmetic',
            },
            { name: 'Читарика', to: '/programs/reading' },
            { name: 'Підготовка до школи', to: '/programs/school' },
            { name: 'Англійська мова', to: '/programs/english' },
            { name: 'Спідкубінг', to: '/programs/speedcubing' },
          ],
        },
        {
          label: 'Вік 7+',
          items: [
            {
              name: 'Ментальна арифметика',
              to: '/programs/4-7/mental-arithmetic',
            },
            { name: 'Ліберика', to: '/programs/liberyka' },
            { name: 'Меморика', to: '/programs/memoryka' },
            { name: 'Таблиця множення', to: '/programs/multiplication' },
            { name: 'Англійська мова', to: '/programs/english' },
            { name: 'Амаматика', to: '/programs/amamatyc' },
            { name: 'Спідкубінг', to: '/programs/speedcubing' },
          ],
        },
      ],
      socialLinks: [
        {
          label: 'Telegram',
          href: 'https://t.me/smartumkids',
          icon: '/src/assets/social/telegram.png',
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/smartum_kids/',
          icon: '/src/assets/social/instagram.png',
        },
        {
          label: 'Facebook',
          href: 'https://www.facebook.com/profile.php?id=61568671144523',
          icon: '/src/assets/social/facebook.png',
        },
        {
          label: 'WhatsApp',
          href: 'https://wa.me/qr/TRZU7RSWTONZJ1',
          icon: '/src/assets/social/whatsapp.png',
        },
        {
          label: 'TikTok',
          href: 'https://www.tiktok.com/@smartum.kids?_t=ZM-8tJEpRef3Dx&_r=1',
          icon: '/src/assets/social/tik-tok.png',
        },
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

<style scoped>
/* Additional styles if needed */
</style>
