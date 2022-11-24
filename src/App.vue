<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/user">User</router-link>
  </nav>
  <router-view/> -->

  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <RouterLink to="/">
        <a-menu-item key="1">
          <!-- <user-outlined /> -->
          <span>Home</span>
        </a-menu-item>
      </RouterLink>
      <RouterLink to="/User">
        <a-menu-item key="2">
          <!-- <video-camera-outlined /> -->
          <span>User</span>
        </a-menu-item>
      </RouterLink>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <RouterView/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
  import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons-vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    components: {
      MenuUnfoldOutlined,
      MenuFoldOutlined,
    },
    setup() {
      return {
        selectedKeys: ref<string[]>(['1']),
        collapsed: ref<boolean>(false),
      };
    },
  });
</script>
<style>
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
