<template>
  <div class="relative">
    <div class="absolute left-0 top-0 z-30 pt-6 sm:pt-3 px-3" @click="toggleMusic">
      <img v-if="isPlay" src="/img/sound.gif" class="w-3 h-3">
      <img v-if="!isPlay" src="/img/no-sound.gif" class="w-3 h-3">
    </div>
    <Music ref="music" mp3="/mp3/bg.mp3" />
    <div class="absolute top-0 left-0 w-full h-screen z-10">
      <Monument />
    </div>
    <div class="absolute top-0 left-0 w-full z-20">
      <Home v-if="selected === 'home'" @click="show" />
      <About v-if="selected === 'about'" @click="show" />
      <Contact v-if="selected === 'contact'" @click="show" />
      <Experience v-if="selected === 'experience'" @click="show" />
    </div>
  </div>
</template>

<script>
import About from '~/components/sections/About'
import Home from '~/components/sections/Home'
import Monument from '~/components/sections/Monument'
import Contact from '~/components/sections/Contact'
import Experience from '~/components/sections/Experience'
import Music from '~/components/elements/Music'

export default {
  components: {
    Monument,
    Home,
    About,
    Contact,
    Experience,
    Music
  },
  data () {
    return {
      isPlay: false,
      selected: 'home'
    }
  },
  methods: {
    show (screen) {
      this.selected = screen
    },
    toggleMusic () {
      this.isPlay = !this.isPlay
      if (this.isPlay) {
        this.$refs.music.play()
      } else {
        this.$refs.music.stop()
      }
    }
  }
}
</script>
