<template>
    <a-table :columns="columns" :data-source="data">
        <template #bodyCell="{ column, record }">
            <template v-switch="column.key">
                <template v-case="'name'">
                    <a>
                        {{ record.name }}
                    </a>
                </template>
                <template v-case="'tags'">
                    <span>
                        <a-tag v-for="tag in record.tags" :key="tag"
                            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                            {{ tag.toUpperCase() }}
                        </a-tag>
                    </span>
                </template>
                <template v-case="'action'">
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
            </template>
        </template>
    </a-table>
</template>
<script lang="ts">
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import App, { defineComponent } from 'vue';
import VSwitch from '@lmiller1990/v-switch';

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
    components: {
        // SmileOutlined,
        DownOutlined,
    },
    data() {
        return {
            data,
            columns,
        };
    },
});
</script>