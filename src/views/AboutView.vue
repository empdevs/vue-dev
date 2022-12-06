<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  export default defineComponent({
    name:"AboutView",
    data:function(){
      const route = useRoute();
       const id = route.params.id;
      console.log(id);
      return{}
    }
  });
</script>