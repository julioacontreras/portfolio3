<template>
  <div class="grid grid-r3 h-screen">
    <div />
    <div class="w-full flex flex-col ">
      <div class="pt-48 lg:pt-132 flex justify-center content-center font-bold flex-wrap items-center text-lg">
        <p class="text-center leading-normal text-2xl sm:text-4xl lg:text-5xl text-primary uppercase w-full lg:w-7/12">
          <pre class="title text-glow" />
        </p>
      </div>
    </div>
    <div class="flex w-full justify-center text-secondary items-center uppercase pb-20 sm:pb-0">
      <a class="font  lg:text-secondary link text-base lg:text-xl cursor-pointer" @click="about">
        About
      </a>
      <span class="mx-2"> | </span>
      <a class="font text-secondary link text-base lg:text-xl cursor-pointer" @click="experience">
        Experience
      </a>
      <span class="mx-2"> | </span>
      <a class="font text-secondary link text-base lg:text-xl cursor-pointer" @click="contact">
        Contact
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
    this.typed = new Typed('.title', {
      strings: ['Julio Contreras ^100\n Full circle developer'],
      typeSpeed: 30,
      backSpeed: 100,
      smartBackspace: true,
      loop: false,
      showCursor: false
    })
  },
  methods: {
    about () {
      this.$emit('click', 'about')
    },
    experience () {
      this.$emit('click', 'experience')
    },
    contact () {
      this.$emit('click', 'contact')
    }
  }
}
</script>
