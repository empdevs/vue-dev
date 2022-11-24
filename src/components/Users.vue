<template>
    <li v-for="item in users" v-bind:key="item">
     {{item}}
    </li>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import axios from 'axios';

    export default defineComponent({
        name: 'Users',
        data: function(){
            return{
                users:[]
            }
        },
        methods:{
            async getUser(){
                await axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response:any)=>{
                    this.users = response.data     
                })
                .catch((error:Error)=>{
                    console.log(error)
                });
            }
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
            this.getUser();
        }
    });
</script>
<style>
</style>