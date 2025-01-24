<template>
  <section id="advantages" class="py-12 px-4 bg-blue-50 text-gray-800">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-8">
        Наші переваги
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          v-for="advantage in advantages"
          :key="advantage.title"
          class="bg-blue-700 p-6 rounded-xl shadow flex flex-col items-center text-center"
        >
          <div class="mb-4">
            <img
              :src="advantage.icon"
              :alt="advantage.title"
              class="w-12 h-12"
            />
          </div>
          <h3 class="text-white mb-2">
            {{ advantage.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdvantagesSection',
  data() {
    return {
      advantages: [
        {
          title: 'Індивідуальний підхід до кожного учня',
          icon: '/src/assets/icons/advantages/unique.png',
        },
        {
          title: 'Інноваційна онлайн-платформа',
          icon: '/src/assets/icons/advantages/online.png',
        },
        {
          title: 'Ігрове навчання',
          icon: '/src/assets/icons/advantages/game.png',
        },
        {
          title: 'Більше 100 розвиваючих ігор',
          icon: '/src/assets/icons/advantages/games.png',
        },
        {
          title: 'Навчальна програма та навчальні матеріали',
          icon: '/src/assets/icons/advantages/education.png',
        },
        {
          title: 'Моніторинг успішності студентів',
          icon: '/src/assets/icons/advantages/success.png',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
