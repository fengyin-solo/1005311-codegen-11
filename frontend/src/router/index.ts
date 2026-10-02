import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
const Station = () => import('@/views/station/index.vue')
const Panel = () => import('@/views/panel/index.vue')
const Inverter = () => import('@/views/inverter/index.vue')
const Combiner = () => import('@/views/combiner/index.vue')
const Tracker = () => import('@/views/tracker/index.vue')
const Cleaning = () => import('@/views/cleaning/index.vue')
const Defect = () => import('@/views/defect/index.vue')
const Generation = () => import('@/views/generation/index.vue')
const Irradiance = () => import('@/views/irradiance/index.vue')
const Grid = () => import('@/views/grid/index.vue')
const Subsidy = () => import('@/views/subsidy/index.vue')
const Spare = () => import('@/views/spare/index.vue')
const Team = () => import('@/views/team/index.vue')
const Patrol = () => import('@/views/patrol/index.vue')
const Safety = () => import('@/views/safety/index.vue')
const Rescue = () => import('@/views/rescue/index.vue')
const Insurance = () => import('@/views/insurance/index.vue')
const Bill = () => import('@/views/bill/index.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/station', name: 'station', component: Station },
    { path: '/panel', name: 'panel', component: Panel },
    { path: '/inverter', name: 'inverter', component: Inverter },
    { path: '/combiner', name: 'combiner', component: Combiner },
    { path: '/tracker', name: 'tracker', component: Tracker },
    { path: '/cleaning', name: 'cleaning', component: Cleaning },
    { path: '/defect', name: 'defect', component: Defect },
    { path: '/generation', name: 'generation', component: Generation },
    { path: '/irradiance', name: 'irradiance', component: Irradiance },
    { path: '/grid', name: 'grid', component: Grid },
    { path: '/subsidy', name: 'subsidy', component: Subsidy },
    { path: '/spare', name: 'spare', component: Spare },
    { path: '/team', name: 'team', component: Team },
    { path: '/patrol', name: 'patrol', component: Patrol },
    { path: '/safety', name: 'safety', component: Safety },
    { path: '/rescue', name: 'rescue', component: Rescue },
    { path: '/insurance', name: 'insurance', component: Insurance },
    { path: '/bill', name: 'bill', component: Bill },
  ],
})

export default router
