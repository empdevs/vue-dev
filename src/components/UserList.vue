<template>
    <a-table :columns="columns" :data-source="data" :size="'small'" :pagination="false" :loading="loading">
        <template #bodyCell="{ column, record }">
            <VSwitch :case="column.key">
                <template #id>
                    <a>
                        {{record.id}}
                    </a>
                </template>
                <template #name>
                    <a>
                        {{record.name}}
                    </a>
                </template>
                <template #username>
                        {{record.username}}
                </template>
                <template #email>
                        {{record.email}}
                </template>
                <template #phone>
                        {{record.phone}}
                </template>
                <template #website>
                        {{record.website}}
                </template>
                <template #address>
                        {{record.address}}
                </template>
                <template #company>
                        <p>{{record.company.bs}}, {{record.company.catchPhrase}}, {{record.company.name}}</p>
                </template>
                <template #tags>
                    <span>
                        <a-tag v-for="tag in record.tags" :key="tag"
                            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                            {{ tag.toUpperCase() }}
                        </a-tag>
                    </span>
                </template>
            </VSwitch>
        </template>
    </a-table>
</template>
<script lang="ts">
// import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import VSwitch from '@lmiller1990/v-switch';
import axios from 'axios';
import IUsers from '../Types';
// import CreateUser from './CreateUser.vue';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Website',
        key: 'website',
        dataIndex: 'website',
    },
    {
        title: 'Company',
        key: 'company',
    },
];

//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];
// let data : IUsers[] = [];
export default defineComponent({
    name:"UserList",
    components: {
        // DownOutlined,
        VSwitch,
    },
    data() {
        return {
            data: [],
            columns,
            loading:false,
        };
    },
    created(){
        this.getData();
    },
    methods:{
        async getData(){
            this.loading = true;
            await axios.get("http://localhost:3004/users")
            .then((response) =>{
                this.data = response.data;
                this.loading = false;
            })
            .catch(function(error){
                console.log(error);
            });

            console.log(this.data);
        }
    }
});
</script>