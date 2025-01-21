<template>
  <section id="reviews" class="py-12 bg-gray-50 p-4">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8 text-primary">Відгуки</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded shadow">
          <p class="text-gray-700 mb-4">
            "Відгук про платформу. Дуже сподобалося!"
          </p>
          <p class="text-gray-500 text-sm">- Ім'я</p>
        </div>
        <div class="bg-white p-6 rounded shadow">
          <p class="text-gray-700 mb-4">"Прекрасні викладачі та програми."</p>
          <p class="text-gray-500 text-sm">- Ім'я</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ReviewsSection',
};
</script>
