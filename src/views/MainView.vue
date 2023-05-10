<template>  
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <RouterLink to="/Home" style="text-decoration:none">
            <a-menu-item key="1" @click="handleSelectedKeys('1')" v-bind:class="(selectedKeys[0] == '1') ? 'ant-menu-item-selected active' : '' " >
              <span>Home</span>
            </a-menu-item>
        </RouterLink>
        <RouterLink to="/User" style="text-decoration:none">
          <a-menu-item key="2" @click="handleSelectedKeys('2')" v-bind:class="(selectedKeys[0] == '2') ? 'ant-menu-item-selected active' : '' ">
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
          <menu-fold-outlined 
            v-else 
            class="trigger" 
            @click="() => (collapsed = !collapsed)" 
          />
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
    import IMainState from '../Types';

    export default defineComponent({
      name:"Main",
      components: {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
      },
      data(){
        return {
          selectedKeys : [''],
          collapsed: false,
        };
      },
      methods:{
        handleSelectedKeys(key:string){
          this.selectedKeys = [key];
        }
      },
      mounted(){
        const routerHome : any = `${window.location.protocol}//${window.location.host}/Home`;
        const routerUser : any = `${window.location.protocol}//${window.location.host}/User`;
        
        switch (window.location.href) {
          case routerHome:
            this.selectedKeys = ['1'];
          break;
          case routerUser:
            this.selectedKeys = ['2'];
          break;
          default:
          break;
        }
      }
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
  .ant-layout.ant-layout-has-sider{
    height: 100vw;
  }
  </style>
  