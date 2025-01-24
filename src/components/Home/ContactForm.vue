<template>
  <section
    id="contact"
    class="py-12 mx-auto px-4 bg-yellow-500 rounded-3xl p-8 md:p-12 lg:p-16 lg:pr-0 lg:pb-0 lg:pt-0 my-8 w-fit"
  >
    <div
      class="container flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-12"
    >
      <!-- Left Content -->
      <div class="bg-white rounded-xl shadow-lg p-6 lg:w-1/2 max-w-lg">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">
          Запис на безкоштовний урок
        </h2>
        <form @submit.prevent="handleSubmit">
          <!-- Name Input -->
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="name">
              Ім'я*
            </label>
            <input
              type="text"
              id="name"
              class="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-600"
              v-model="form.name"
              placeholder="Ваше ім'я"
            />
            <span v-if="errors.name" class="text-red-600 text-sm">{{
              errors.name
            }}</span>
          </div>

          <!-- Phone Input -->
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="phone">
              Телефон*
            </label>
            <div class="flex items-center space-x-2">
              <span class="bg-gray-100 px-4 py-2 rounded-l border">+380</span>
              <input
                type="tel"
                id="phone"
                class="w-full border rounded-r px-4 py-2 focus:outline-none focus:ring focus:ring-blue-600"
                v-model="form.phone"
                placeholder="50 123 4567"
              />
            </div>
            <span v-if="errors.phone" class="text-red-600 text-sm">{{
              errors.phone
            }}</span>
          </div>

          <!-- Email Input -->
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              class="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-600"
              v-model="form.email"
              placeholder="Ваш email"
            />
            <span v-if="errors.email" class="text-red-600 text-sm">{{
              errors.email
            }}</span>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition"
          >
            Відправити заявку
          </button>
        </form>
      </div>

      <!-- Right Image -->
      <div class="hidden lg:block">
        <img
          src="@/assets/images/inline-form-background.png"
          alt="Contact Image"
          class="h-full w-full object-cover"
        />
      </div>
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
      errors: {
        name: '',
        phone: '',
        email: '',
      },
    };
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.errors = { name: '', phone: '', email: '' };

      if (!this.form.name) {
        this.errors.name = "Ім'я обов'язкове";
        isValid = false;
      }

      const phonePattern = /^\d{9}$/;
      if (!this.form.phone || !phonePattern.test(this.form.phone)) {
        this.errors.phone = 'Некоректний номер телефону';
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.form.email && !emailPattern.test(this.form.email)) {
        this.errors.email = 'Некоректний email';
        isValid = false;
      }

      return isValid;
    },
    handleSubmit() {
      if (this.validateForm()) {
        alert('Ваша заявка відправлена!');
        this.form = { name: '', phone: '', email: '' };
      }
    },
  },
};
</script>

<style scoped>
/* Optional styles to fine-tune alignment */
</style>
