<template>
  <v-icon class="icon" @click="toggleStar">{{iconType}}</v-icon>
</template>

<script>
  export default {

    data() {
      return {
        starred: false,
      };
    },

    computed: {
      iconType() {
        if (this.starred) {
          return 'star';
        }

        return 'star_border';
      },
    },

    methods: {
      toggleStar() {
        this.starred = !this.starred;
        this.$emit('star-toggled', { starred: this.starred });
      },
    },

  };
</script>

<style scoped>
  .icon {
    cursor: pointer;
  }
</style>
