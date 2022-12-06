<template>
    <a-table :columns="columns" :data-source="data">
        <template #bodyCell="{ column, record }">
            <VSwitch :case="column.key">
                <template #name>
                    <a>
                        {{record.name}}
                    </a>
                </template>
                <template #age>
                        {{record.age}}
                </template>
                <template #address>
                        {{record.address}}
                </template>
                <template #tags>
                    <span>
                        <a-tag v-for="tag in record.tags" :key="tag"
                            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                            {{ tag.toUpperCase() }}
                        </a-tag>
                    </span>
                </template>
                <template #action>
                    <span>
                        <a>Invite 一 {{ record.name }}</a>
                        <a-divider type="vertical" />
                        <a>Delete</a>
                        <a-divider type="vertical" />
                        <a class="ant-dropdown-link">
                            More actions
                            <down-outlined />
                        </a>
                    </span>
                </template>
            </VSwitch>
        </template>
    </a-table>
</template>
<script lang="ts">
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import VSwitch from '@lmiller1990/v-switch';
// import CreateUser from './CreateUser.vue';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
    },
    {
        title: 'Action',
        key: 'action',
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default defineComponent({
    name:"UserList",
    components: {
        // SmileOutlined,
        DownOutlined,
        VSwitch,
        // CreateUser
    },
    data() {
        return {
            data,
            columns,
        };
    },
});
</script>