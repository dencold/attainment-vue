<template>
  <div id="editor">
    <textarea id="textarea" v-model="rawInput" @blur="toggleEdit" v-show="editing"></textarea>
    <div id="markdown" v-html="compiledMarkdown" @click="toggleEdit" v-show="!editing"></div>
  </div>
</template>

<script>
  const marked = require('marked');

  export default {

    data() {
      return {
        rawInput: '',
        editing: false,
      };
    },

    computed: {
      compiledMarkdown: function compiledMarkdown() {
        return marked(this.rawInput);
      },
    },

    methods: {
      toggleEdit() {
        this.editing = !this.editing;
      },
    },

  };
</script>

<style>
  p {
    margin: 0 0 10px 0;
    padding: 0;
  }

  ul {
    list-style: square outside none;
  }

  #markdown {
    min-height: 30px;
    padding: 10px;
    background-color: #f4f0f5;
  }
</style>
