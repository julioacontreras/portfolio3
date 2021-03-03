<template>
  <div class="grid grid-r3 h-screen">
    <div class="w-full title text-secondary title-page font text-xl lg:text-4xl pt-4 flex justify-center">
      {{ title }}
    </div>
    <div class="w-full flex flex-col ">
      <div class="pt-48 lg:pt-132 flex justify-center content-center font-bold flex-wrap items-center text-lg">
        <p class="text-center leading-normal text-primary text-xl text-glow lg:text-4xl uppercasew-full lg:w-7/12 limit-box">
          Hi! I am <span class="i-am" />
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
      default: 'ABOUT'
    }
  },
  mounted () {
    this.typed = new Typed('.i-am', {
      strings: ['programmer', 'designer ^10', 'entrepreneur ^10', 'god! :) ^10', 'Julio. ^1000 &nbsp; I like to get involved in disruoptive projects and new technologies.'],
      typeSpeed: 30,
      backSpeed: 100,
      backDelay: 900,
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

<style>
.limit-box {
  max-width: 580px;
}
</style>
