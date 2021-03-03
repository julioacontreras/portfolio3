<template>
  <div class="grid grid-r3 h-screen">
    <div class="w-full title text-secondary title-page font text-xl lg:text-4xl pt-4 flex justify-center">
      {{ title }}
    </div>
    <div class="w-full flex flex-col ">
      <div class="pt-48 lg:pt-132 flex justify-center content-center font-bold flex-wrap items-center text-lg">
        <p class="text-center leading-normal text-primary text-xl text-glow lg:text-4xl uppercase w-7/12">
          <a href="https://www.linkedin.com/in/julio-contreras-6579b623/">
            <span class="get-in-touch" />
          </a>
        </p>
      </div>
    </div>
    <div class="flex w-full justify-center text-secondary items-center mb-56 sm:mb-0">
      <a class="font text-secondary link text-xl lg:text-4xl cursor-pointer" @click="back">
        BACK
      </a>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js'

export default {
  props: {
    title: {
      type: String,
      default: 'CONTACT'
    }
  },
  mounted () {
    this.typed = new Typed('.get-in-touch', {
      strings: ['Get in touch!^100', 'Loading...^10', 'Click here!^500'],
      typeSpeed: 30,
      backSpeed: 100,
      smartBackspace: true,
      loop: false
    })
  },
  methods: {
    back () {
      this.$emit('click', 'home')
    }
  }
}
</script>
