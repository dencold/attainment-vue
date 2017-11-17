<template>
  <v-icon class="icon" @click="toggleStar">{{iconType}}</v-icon>
</template>

<script>
  export default {
    props: {
      starred: {
        type: Boolean,
        default: false,
      },
    },

    // vue doesn't allow mutation of props, so we have a different
    // var representing state that can be changed in the component
    data() {
      return {
        isStarred: this.starred,
      };
    },

    computed: {
      iconType() {
        if (this.isStarred) {
          return 'star';
        }

        return 'star_border';
      },
    },

    methods: {
      toggleStar() {
        this.isStarred = !this.isStarred;
        this.$emit('star-toggled', { starred: this.isStarred });
      },
    },

  };
</script>

<style scoped>
  .icon {
    cursor: pointer;
  }
</style>
