<template>
  <div class="">
    <HeroSection />
    <MethodsList />
    <ContactForm />
    <AdvantagesSection />
    <ReviewsSection />
  </div>
</template>

<script>
import HeroSection from '../components/Home/HeroSection.vue';
import AdvantagesSection from '../components/Home/AdvantagesSection.vue';
import ReviewsSection from '../components/Home/ReviewsSection.vue';
import ContactForm from '../components/Home/ContactForm.vue';
import MethodsList from '@/components/Home/MethodsList.vue';

export default {
  name: 'HomePage',
  components: {
    MethodsList,
    HeroSection,
    AdvantagesSection,
    ReviewsSection,
    ContactForm,
  },
};
</script>
