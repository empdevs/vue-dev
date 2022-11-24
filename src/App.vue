<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/user">User</router-link>
  </nav>
  <router-view/>
</template>
<!-- <template>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
          <router-link to="/user">
            <a-menu-item key="1">
              <user-outlined />
              <span>User</span>
            </a-menu-item>
          </router-link>
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <upload-outlined />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => {
                collapsed = !collapsed
            }"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
</template> -->
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons-vue';
// import "../node_modules/ant-design-vue/dist/antd.css"; 

  export default defineComponent({
    name: "App",
    data:function(){
      return {
        users:ref<any[]>([]),
        collapsed:ref<boolean>(false),
        selectedKeys:ref<string[]>(['1'])
      }
    },
    components:{
      // UserOutlined,
      // VideoCameraOutlined,
      // UploadOutlined,
      // MenuUnfoldOutlined,
      // MenuFoldOutlined,
    },
    methods:{
    },
    beforeCreate(){
      console.log("ini before create");
    },
    created(){
      console.log("ini created");
    },
    beforeMount(){
      console.log("ini before mount");
    },
    mounted(){
      console.log("ini mounted");
    }
  });
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
  .site-layout .site-layout-background {
    background: #fff;
  }
</style>
