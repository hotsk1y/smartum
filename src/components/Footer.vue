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
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
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
    writeToDirector() {
      alert('Thank you!');
    },
  },
};
</script>
