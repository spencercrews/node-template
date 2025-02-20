<template>
  <div class="hello-world">
    <h1>{{ apiResponse }}  </h1>
    <p>Welcome to your Vue.js application.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      apiResponse: ''
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch('http://localhost:3000/');
      const data = await response.json();
      console.log(data);
      this.apiResponse = data.message;
    }
  },
  
};
</script>

<style scoped>
.hello-world {
  text-align: center;
  margin-top: 20px;
}
</style>