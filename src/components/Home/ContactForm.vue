<template>
  <section id="contact" class="py-12 bg-secondary p-4">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center text-primary mb-8">
        Запишіться на безкоштовний урок!
      </h2>
      <form
        class="max-w-lg mx-auto bg-white p-6 rounded shadow-lg border border-gray-200"
        @submit.prevent="handleSubmit"
      >
        <!-- Name Input -->
        <div class="mb-4">
          <label class="block text-primary font-medium mb-2" for="name"
            >Імʼя</label
          >
          <input
            type="text"
            id="name"
            class="w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-primary focus:border-primary"
            placeholder="Ваше імʼя"
            v-model="form.name"
          />
        </div>

        <!-- Phone Input -->
        <div class="mb-4">
          <label class="block text-primary font-medium mb-2" for="phone"
            >Телефон</label
          >
          <input
            type="tel"
            id="phone"
            class="w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-primary focus:border-primary"
            placeholder="Ваш телефон"
            v-model="form.phone"
          />
        </div>

        <!-- Email Input -->
        <div class="mb-4">
          <label class="block text-primary font-medium mb-2" for="email"
            >E-mail</label
          >
          <input
            type="email"
            id="email"
            class="w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-primary focus:border-primary"
            placeholder="Ваш email"
            v-model="form.email"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-primary text-white font-bold py-3 rounded hover:bg-blue-700 transition"
        >
          Відправити заявку
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.form.name && this.form.phone && this.form.email) {
        alert('Ваша заявка відправлена!');
        this.form = { name: '', phone: '', email: '' };
      } else {
        alert('Будь ласка, заповніть всі поля!');
      }
    },
  },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
