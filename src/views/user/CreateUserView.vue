<template lang="ts">
    <div class="container">
        <div class="row mb-3">
            <label class="p-0">First Name</label>
            <a-input :value="firstName" @input="inputChangeFirstName" placeholder="First Name" />
            {{firstName}}
        </div>
        <div class="row mb-3">
            <label class="p-0">Last Name</label>
            <a-input :value="lastName" @input="inputChangeLastName" placeholder="Last Name" />
            {{lastName}}
        </div>
        <div class="row text-end">
            <div class="col-lg-12">
                <a-button type="primary" @click="saveData" >Save</a-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name:"CreateUser",
    setup(){
        const firstName = ref<string>("");
        const lastName = ref<string>("");

        return{
            firstName,
            lastName
        }
    },
    methods:{
        inputChangeFirstName(e:any){
            this.firstName = e.target.value 
        },
        inputChangeLastName(e:any){
            this.lastName = e.target.value 
        },
        saveData(e:any){
            console.log(this.firstName);
            console.log(this.lastName);
        }
    }
});
</script>
<style>
    
</style>