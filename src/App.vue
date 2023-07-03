<script setup>
import GsTreeTransfer from './components/GsTreeTransfer/';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
const fromData = [
  {
    id: 1,
    pid: 0,
    name: "测试左侧",
    children: [
      {
        id: 2,
        pid: 1,
        name: "水电费是打发斯蒂芬斯蒂芬gas噶水电费噶地方死光光",
        // disabled: true,
        children: [],
      },
      {
        id: 3,
        pid: 1,
        name: "11-3",
        children: [],
      },
      /*    {
        id: 4,
        pid: 1,
        name: "11-4",
        children: [
          {
            id: 5,
            pid: 4,
            name: "11-5",
            children: [
              {
                id: 111,
                pid: 5,
                name: "11-111"
              }
            ]
          },
          {
            id: 6,
            pid: 4,
            name: "11-6",
            children: []
          }
        ]
      } */
    ],
  },
  {
    id: 7127,
    pid: 0,
    name: "debug",
    children: [
      {
        id: 71272,
        pid: 7127,
        name: "debug22",
        // disabled: true,
        children: [],
      },
      {
        id: 71273,
        pid: 7127,
        name: "debug11",
        children: [],
      },
    ],
  },
]; // 穿梭框 - 源数据 - 树形
const toData = [
  /*  {
    id: 1,
    pid: 0,
    name: "测试左侧",
    children: [
      {
        id: 2,
        pid: 1,
        name: "水电费是打发斯蒂芬斯蒂芬gas噶水电费噶地方死光光",
        children: [
          {
            id: 22222222,
            pid: 2,
            name: "2222222222"
          }
        ]
      }
    ]
  } */
]; // 穿梭框 - 目标数据 - 树形
const fromArray = [
  {
    id: "1",
    name: "1",
    pid: "0",
  },
  {
    id: "2",
    name: "2",
    pid: "0",
  },
  {
    id: "1-1",
    name: "1-1",
    pid: "1",
  },
  {
    id: "1-2",
    name: "1-2",
    pid: "1",
  },
  {
    id: "1-1-1",
    name: "1-1-1",
    pid: "1-1",
  },
  {
    id: "1-1-1-1",
    name: "1-1-1-1",
    pid: "1-1-1",
  },
  {
    id: "2-1",
    name: "2-1",
    pid: "2",
  },
  {
    id: "2-2",
    name: "2-2",
    pid: "2",
  },
];
const toArray = [];
const defaultCheckedKeys = []; // 左侧默认选中数据

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <GsTreeTransfer height="540px" node_key="id" :defaultProps="{ label: 'name', children: 'children' }"
        :from_data="fromData" :to_data="toData" title="title" mode="transfer">
        <span slot="title-right" class="my-title-right" @click="handleTitleRight">自定义内容</span>
      </GsTreeTransfer>
    </div>
  </header>

  <main>

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
