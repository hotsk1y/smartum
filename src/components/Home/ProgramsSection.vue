<template>
  <section id="programs" class="py-12 bg-secondary p-4">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8 text-primary">
        Програми навчання
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded shadow text-center">
          <h3 class="text-xl font-semibold mb-2 text-primary">
            Ментальна арифметика
          </h3>
          <p class="text-gray-600">Розвиток математичних навичок.</p>
        </div>
        <div class="bg-white p-6 rounded shadow text-center">
          <h3 class="text-xl font-semibold mb-2 text-primary">Швидкочитання</h3>
          <p class="text-gray-600">Покращення швидкості читання.</p>
        </div>
        <div class="bg-white p-6 rounded shadow text-center">
          <h3 class="text-xl font-semibold mb-2 text-primary">
            Англійська мова
          </h3>
          <p class="text-gray-600">Навчання розмовній англійській.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProgramsSection',
};
</script>
