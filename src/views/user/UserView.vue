<template>
    <div class="user">
        <RouterLink to="/CreateUser">
            <a-button type="primary">Primary Button</a-button>
        </RouterLink>
        <User/>
        <RouterView/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import User from '@/components/UserList.vue'; // @ is an alias to /src
  
  export default defineComponent({
    name: 'HomeView',
    components: {
        User,
    },
  });
  </script>
  