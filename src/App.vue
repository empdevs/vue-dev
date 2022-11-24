<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <router-link to="/">
          <a-menu-item key="1">
            <user-outlined />
            <span>Home</span>
          </a-menu-item>
        </router-link>
        <router-link to="/user">
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>User</span>
          </a-menu-item>
        </router-link>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => { collapsed = !collapsed }" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: "App",
  data: function(){
    return {
      users: [],
      collapsed: false,
      selectedKeys: ['1'],
    }
  },
  components: {
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  methods: {
  },
  beforeCreate() {
    console.log("ini before create");
  },
  created() {
    console.log("ini created");
  },
  beforeMount() {
    console.log("ini before mount");
  },
  mounted() {
    console.log("ini mounted");
  }
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
