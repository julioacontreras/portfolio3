<template>
  <div>
    <audio ref="audio" class="invisible">
      <source :src="mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  props: {
    mp3: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$refs.audio.volume = 0.2
    this.$refs.audio.loop = true
  },
  methods: {
    play () {
      this.$refs.audio.play()
    },
    stop () {
      this.$refs.audio.pause()
    }
  }
}
</script>
