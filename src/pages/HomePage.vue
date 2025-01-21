<template>
  <div class="bg-gray-100">
    <HeroSection />
    <AdvantagesSection />
    <ReviewsSection />
    <ProgramsSection />
    <ContactForm />
  </div>
</template>

<script>
import HeroSection from '../components/Home/HeroSection.vue';
import AdvantagesSection from '../components/Home/AdvantagesSection.vue';
import ReviewsSection from '../components/Home/ReviewsSection.vue';
import ProgramsSection from '../components/Home/ProgramsSection.vue';
import ContactForm from '../components/Home/ContactForm.vue';

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    AdvantagesSection,
    ReviewsSection,
    ProgramsSection,
    ContactForm,
  },
};
</script>
