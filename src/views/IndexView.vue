<template>
  <div class="tablet-wrapper h-[40rem] w-full flex flex-col items-center justify-center select-none">
    <div class="tablet-power-button relative w-[80rem] h-2 flex">
      <div class="absolute tablet-button-off bg-red-600 w-16 h-full left-36 rounded-t-sm cursor-pointer"
      @click="toggleDisplaymode()">
      </div>
    </div>
    <main class="tablet h-[40rem] w-[80rem] rounded-xl border-4 border-white flex flex-col bg-black">
      <header class="tablet-header w-full bg-background_color_child h-10 rounded-t-lg flex items-center justify-between text-text_color px-6"
      v-if="tablet_displaymode !== 'off'">
        <h1> {{ current_time }} </h1>
        <Reception/>
      </header>
      <main class="tablet-main rounded-b-lg h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden"
      v-if="tablet_displaymode !== 'off'">
        <component :is="active_component" class="w-full h-full rounded-b-lg"/>
      </main>
    </main>
  </div>
</template>

<script>
import TabletHome from '../components/tablet/Home.vue';
import Reception from '../components/misc/index/header/Reception.vue'

export default {
  name: 'Index',
  components: {
    TabletHome,
    Reception
  },
  data() {
    return {
      current_time: this.getCurrentTime(),
      active_component: 'TabletHome',
      tablet_displaymode: 'on',
    }
  },
  methods: {
    getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    },
    updateCurrentTime() {
      this.current_time = this.getCurrentTime()
    },
    screenChange() {
      if (this.screen_bool === false) {
          this.screen_bool = true;
          this.background_bool = false;
      } else if (this.screen_bool === true) {
          this.screen_bool = false;
          this.background_bool = true;
      }
    },
    toggleDisplaymode() {
      if (!this.tablet_power_action) {
        if (this.tablet_displaymode === 'on') {
          this.tablet_displaymode = 'off'
        } else {
          this.tablet_displaymode = 'on'
        }
      }
    }
  },
  mounted() {
    this.time_interval = setInterval(this.updateCurrentTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.time_interval)
  }
}
</script>