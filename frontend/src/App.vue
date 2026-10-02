<template>
  <div class="app-shell">
    <aside class="app-side">
      <h1 class="app-title">光伏电站智能运维平台</h1>
      <nav class="nav-list">
        <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" class="nav-item">
          {{ item.label }}
        </RouterLink>
      </nav>
    </aside>
    <main class="app-main">
      <header class="app-head">
        <span class="head-desc">面向电站台账、组件与逆变器设备、清洗与缺陷整治、发电计量、辐照观测与电费结算的一体化光伏运维后台。</span>
        <span class="head-user">当前值班：{{ store.operator }} · {{ store.shiftLabel }}</span>
      </header>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useSessionStore } from '@/stores/session'

const store = useSessionStore()

const navItems = [{ label: "运营概览", path: "/" }, { label: "电站台账", path: "/station" }, { label: "组件台账", path: "/panel" }, { label: "逆变器管理", path: "/inverter" }, { label: "汇流箱管理", path: "/combiner" }, { label: "跟踪支架", path: "/tracker" }, { label: "组件清洗", path: "/cleaning" }, { label: "缺陷整治", path: "/defect" }, { label: "发电计量", path: "/generation" }, { label: "辐照观测", path: "/irradiance" }, { label: "并网调度", path: "/grid" }, { label: "补贴申报", path: "/subsidy" }, { label: "备件领用", path: "/spare" }, { label: "运维班组", path: "/team" }, { label: "巡视路线", path: "/patrol" }, { label: "安全培训", path: "/safety" }, { label: "应急抢修", path: "/rescue" }, { label: "保险理赔", path: "/insurance" }, { label: "电费结算", path: "/bill" }]
</script>
