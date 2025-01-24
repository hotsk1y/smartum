<template>
  <div class="group inline-block relative">
    <button class="outline-none focus:outline-none flex items-center">
      <span
        class="hover:text-blue-600 text-sm font-medium text-gray-800"
        :class="
          isBurger
            ? 'text-xl font-medium text-white hover:text-gray-300'
            : 'hover:text-blue-600 text-sm font-medium text-gray-800'
        "
      >
        {{ name }}
      </span>
      <span class="ml-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          :stroke-width="isBurger ? 6 : 3"
          :stroke="isBurger ? 'white' : 'black'"
          class="size-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </button>

    <ul
      class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute origin-top min-w-32 shadow-lg"
    >
      <li
        v-for="link in links"
        :key="link.label"
        class="relative rounded-sm px-3 py-3 hover:bg-gray-100 text-gray-800 text-sm"
        ref="submenu"
      >
        <button
          class="w-full text-left flex items-center outline-none focus:outline-none"
        >
          <div class="pr-1 flex-1">{{ link.label }}</div>
          <span class="mr-auto">
            <svg
              class="fill-current h-4 w-4 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>

        <ul
          class="bg-white border rounded-sm absolute top-0 left-[-10px] transition duration-150 ease-in-out min-w-32 shadow-md z-10"
        >
          <li
            v-for="item in link.items"
            :key="item.name"
            class="px-3 py-3 hover:bg-gray-100 cursor-pointer w-full"
          >
            <router-link :to="item.to" class="block text-gray-800">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProgramButton',
  props: {
    name: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
    isBurger: {
      type: Boolean,
      required: false,
    },
  },
  methods: {},
};
</script>

<style scoped>
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>
