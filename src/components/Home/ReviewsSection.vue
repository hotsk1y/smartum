<template>
  <section id="reviews" class="p-4 lg:p-12">
    <div class="container mx-auto relative">
      <h2 class="text-3xl font-bold text-center mb-8 text-primary">Відгуки</h2>
      <!-- Контейнер для стрелок -->
      <div class="swiper-navigation">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>

      <swiper
        :slides-per-view="1"
        :space-between="20"
        :breakpoints="{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }"
        :pagination="{ clickable: true }"
        :modules="modules"
        class="mySwiper mx-8 lg:mx-24 flex flex-col items-center justify-center"
      >
        <swiper-slide v-for="(review, index) in reviews" :key="index">
          <div class="bg-blue-50 p-6 rounded shadow text-center">
            <p class="text-gray-700 mb-4">"{{ review.text }}"</p>
            <p class="text-gray-500 text-sm">- {{ review.name }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  name: 'ReviewsSection',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
      reviews: [
        {
          text: 'Дякую, ми дуже задоволені, що обрали Смартум! До цього ми пробували на іншій платформі займатися, не онлайн, а фізично з вчителем. Потім перейшли на Смартум онлайн. В Смартумі набагато краще і цікавіше! Будемо продовжувати співпрацю зі Смартумом на інших курсах :)',
          name: 'Наталія',
        },
        {
          text: 'Дякую, Іванно, розділяю з Вами всі ці спостереження. А також як нам повезло і з викладачем))) Кася настільки в захваті від занять, що хоче продовжити з курсом на множення і ділення, запропоную і дівчатам, було б чудово якби разом і продовжили заняття. Склалася чудовий колектив, а його результат спостерігається в їх прогресі!',
          name: 'Кая',
        },
        {
          text: 'Щиро дякуємо... Ми його роздрукуємо. Це ж така радість... Костя впевнений в своїх силах... За це велике вам дякуюююююю!! Ви йому прекрасний дали старт. Він хоче ще вчитися множити і ділити на абакусі. Сам просить його записати... Це для нього дуже дивно... Тільки переживаю, щоб інший вчитель теж був такий хороший як ви, щоб він не розчарувався... Вам бажаю хороших та старанних учнів... Ви прекрасний вчитель, працюйте та навчайте... Було приємно з вами співпрацювати... Ще раз дякуємо!',
          name: 'Оксана',
        },
        {
          text: 'Дякую вам за вашу працю і терпіння! Жодна дитина з однолітків Олексійчика, та й старших діток, так не вміє рахувати, як мій син. З кожним заняттям він ставав впевненішим, і я помічаю, як розвивається його концентрація та логічне мислення. Завдяки Вам він із задоволенням вчиться і відчуває себе справжнім маленьким математиком! Ми раді, що обрали саме вашу школу. Рекомендуємо школу Smartum всім батькам, хто хоче допомогти своїй дитині розвивати навички ментальної арифметики.',
          name: 'Вікторія',
        },
        {
          text: 'Доброго дня! Безмежно вдячні Вам за навчання, за турботу і розуміння. Діткам з Вами приємно і весело, за що ми Вам дуже вдячні!',
          name: 'Анонім',
        },
        {
          text: 'Дякую за вашу увагу і теплоту. З такими доброзичливими людьми поруч будь-який шлях стає світлішим і впевненішим. Скажіть будь ласка коли наступний курс?',
          name: 'Анонім',
        },
        {
          text: 'Пані Тетяно, щиро дякуємо 🙏 Ми дуже щасливі, що Іларія навчалася саме у Вас! Завдяки навчанню Іларія була одна з найсильніших в класі з математики.',
          name: 'Анонім',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Стили для стрелок */
.swiper-navigation {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;
}

.swiper-button-prev,
.swiper-button-next {
  pointer-events: auto;
  color: #0047ff;
  width: 40px;
  height: 40px;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #002fcc;
}

.mySwiper {
  display: flex;
  align-items: center;
  padding: 24px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.bg-white {
  min-height: 120px;
}
</style>
