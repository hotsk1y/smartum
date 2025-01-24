<template>
  <section
    id="methods-section"
    class="bg-blue-50 rounded-3xl p-8 md:p-12 lg:p-16 my-8 mx-4 md:mx-8 lg:mx-20"
  >
    <div class="container mx-auto">
      <h2
        class="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8"
      >
        Перелік методик
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(method, index) in methods"
          :key="index"
          class="bg-white shadow rounded-lg flex items-center space-x-4 p-4"
        >
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full"
            :class="method.bgColor"
          >
            <img :src="method.icon" :alt="method.title" class="w-6 h-6" />
          </div>
          <p class="text-gray-800 font-medium text-sm">
            {{ method.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MethodsList',
  data() {
    return {
      methods: [
        {
          title: 'Ментальна арифметика',
          icon: '/src/assets/icons/lessons/abacus.png',
          bgColor: 'bg-blue-500',
        },
        {
          title: 'Читарика',
          icon: '/src/assets/icons/lessons/reading.png',
          bgColor: 'bg-pink-500',
        },
        {
          title: 'Підготовка до школи',
          icon: '/src/assets/icons/lessons/school-bag.png',
          bgColor: 'bg-yellow-500',
        },
        {
          title: 'Англійська мова',
          icon: '/src/assets/icons/lessons/alphabet.png',
          bgColor: 'bg-purple-500',
        },
        {
          title: 'Спідкубінг',
          icon: '/src/assets/icons/lessons/rubik.png',
          bgColor: 'bg-purple-300',
        },
        {
          title: 'Ліберика',
          icon: '/src/assets/icons/lessons/book.png',
          bgColor: 'bg-green-500',
        },
        {
          title: 'Меморика',
          icon: '/src/assets/icons/lessons/brain.png',
          bgColor: 'bg-blue-400',
        },
        {
          title: 'Таблиця множення',
          icon: '/src/assets/icons/lessons/display.png',
          bgColor: 'bg-red-500',
        },
        {
          title: 'Амаматика',
          icon: '/src/assets/icons/lessons/blackboard.png',
          bgColor: 'bg-blue-500',
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-blue-50 {
  background-color: #f0f4ff;
}
</style>
