<template>
  <div class="grid grid-r3 h-screen">
    <div class="w-full title text-secondary title-page font text-xl lg:text-4xl pt-4 flex justify-center">
      {{ title }}
    </div>
    <div class="w-full flex flex-col ">
      <div class="pt-48 lg:pt-132 flex justify-center content-center font-bold flex-wrap items-center text-lg">
        <p class="text-center leading-normal text-primary text-xl text-glow lg:text-4xl uppercase w-full lg:w-7/12">
          <List v-show="selected === 0" v-bind="inspiration" />
          <List v-show="selected === 1" v-bind="concept" />
          <List v-show="selected === 2" v-bind="frontend" />
          <List v-show="selected === 3" v-bind="backend" />
          <List v-show="selected === 4" v-bind="system" />
        </p>
      </div>
    </div>
    <div class="flex flex-col lg:hidden w-full justify-center text-secondary items-center uppercase mb-56 sm:mb-0">
      <div class="flex w-full justify-center">
        <a class="font text-secondary link text-xs cursor-pointer" @click="selected=0">
          Inspiration
        </a>
        <span class="mx-2"> | </span>
        <a class="font text-secondary link text-xs cursor-pointer" @click="selected=1">
          Concept &amp; Art
        </a>
        <span class="mx-2"> | </span>
        <a class="font text-secondary link text-xs cursor-pointer" @click="selected=2">
          Frontend
        </a>
      </div>
      <div class="flex w-full justify-center">
        <a class="font text-secondary link text-xs cursor-pointer" @click="selected=3">
          Backend
        </a>
        <span class="mx-2"> | </span>
        <a class="font text-secondary link text-xs cursor-pointer" @click="selected=4">
          System
        </a>
        <span class="mx-2"> | </span>
        <a class="font text-secondary link text-xs cursor-pointer" @click="back">
          Back
        </a>
      </div>
    </div>

    <div class="hidden lg:flex w-full justify-center text-secondary items-center uppercase">
      <a class="font text-secondary link text-base cursor-pointer" @click="selected=0">
        Inspiration
      </a>
      <span class="mx-2"> | </span>
      <a class="font text-secondary link text-base cursor-pointer" @click="selected=1">
        Concept &amp; Art
      </a>
      <span class="mx-2"> | </span>
      <a class="font text-secondary link text-base cursor-pointer" @click="selected=2">
        Frontend
      </a>
      <span class="mx-2"> | </span>
      <a class="font text-secondary link text-base cursor-pointer" @click="selected=3">
        Backend
      </a>
      <span class="mx-2"> | </span>
      <a class="font text-secondary link text-base cursor-pointer" @click="selected=4">
        System
      </a>
      <span class="mx-2"> | </span>
      <a class="font text-secondary link text-base cursor-pointer" @click="back">
        Back
      </a>
    </div>
  </div>
</template>

<script>
import List from '~/components/sections/List'

export default {
  components: {
    List
  },
  props: {
    title: {
      type: String,
      default: 'EXPERIENCE'
    }
  },
  data () {
    return {
      selected: 0,
      inspiration: {
        title: 'Idea & Inspiration',
        items: [
          'Brainstorm',
          'Diagram',
          'Pinterest',
          'Dribble'
        ]
      },
      concept: {
        title: 'Concept & Art',
        items: [
          'Figma',
          'Inkscape',
          'Krita',
          'Blender3D'
        ]
      },
      frontend: {
        title: 'Frontend',
        items: [
          'Nuxtjs',
          'Tailwind CSS',
          'HTML5 & CSS3',
          'Phaser',
          'ThreeJS'
        ]
      },
      backend: {
        title: 'Backend',
        items: [
          'Javascript',
          'NodeJS',
          'ExpressJS',
          'Socket.IO',
          'Strapi'
        ]
      },
      system: {
        title: 'System & CI',
        items: [
          'Centos',
          'NGNIX',
          'Jenkins',
          'Netlify',
          'Slack'
        ]
      }
    }
  },
  methods: {
    back () {
      this.$emit('click', 'home')
    }
  }
}
</script>
