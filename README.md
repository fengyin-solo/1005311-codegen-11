# 光伏电站智能运维平台

面向电站台账、组件与逆变器设备、清洗与缺陷整治、发电计量、辐照观测与电费结算的一体化光伏运维后台。

这是一个**纯前端**管理平台：Vue 3 + Vite + TypeScript，仓库里没有后端服务。业务数据由
`frontend/src/data/` 下的本地数据层提供：首次打开用示例数据播种，之后的登记、筛选与状态流转
结果都持久化在浏览器 `localStorage` 里，刷新或重开浏览器都还在。dev server 已关掉自动打开页面，
启动后按终端打印的地址手工打开。

## 目录结构

```text
.
├── frontend/                 Vue 3 + Vite + TypeScript 前端（唯一运行单元）
│   ├── src/views/            每个业务模块一个页面
│   ├── src/api/local-service.ts   本地数据服务：列表、筛选、动作流转、导出
│   ├── src/data/             模块元数据 / 示例数据 / localStorage 持久化
│   ├── src/stores/           会话与筛选状态
│   └── vite.config.ts        dev server 配置（open: false，无 /api 代理）
├── .gitignore
└── docker-compose.yml
```

## 启动

```bash
cd frontend
npm install
npm run dev
```

前端默认监听 `http://127.0.0.1:5173/`，dev server 不会自动打开浏览器，需要自己访问。

生产构建：

```bash
cd frontend
npm run build
```

## 业务模块

| 模块 | 目录 | 业务对象 | 主要字段 |
| --- | --- | --- | --- |
| 电站台账 | `station` | 光伏电站 | 电站编号、电站名称、装机容量 |
| 组件台账 | `panel` | 光伏组件 | 组件编号、组件型号、所属方阵 |
| 逆变器管理 | `inverter` | 逆变器 | 设备编号、设备型号、所属方阵 |
| 汇流箱管理 | `combiner` | 汇流箱 | 汇流箱编号、所属方阵、接入路数 |
| 跟踪支架 | `tracker` | 跟踪支架 | 支架编号、所属方阵、跟踪方式 |
| 组件清洗 | `cleaning` | 清洗作业 | 作业编号、清洗方阵、清洗方式 |
| 缺陷整治 | `defect` | 设备缺陷 | 缺陷编号、缺陷类型、所属设备 |
| 发电计量 | `generation` | 发电量 | 计量编号、计量日期、所属电站 |
| 辐照观测 | `irradiance` | 辐照观测站 | 观测站编号、安装位置、辐照强度 |
| 并网调度 | `grid` | 并网点 | 并网点编号、所属电站、电压等级 |
| 补贴申报 | `subsidy` | 补贴申报单 | 申报单号、申报年度、所属电站 |
| 备件领用 | `spare` | 运维备件 | 备件编号、备件名称、备件类别 |
| 运维班组 | `team` | 运维班组 | 班组编号、班组名称、负责区域 |
| 巡视路线 | `patrol` | 巡视任务 | 任务编号、巡视路线、负责班组 |
| 安全培训 | `safety` | 培训场次 | 培训编号、培训主题、培训类型 |
| 应急抢修 | `rescue` | 抢修任务 | 抢修编号、故障设备、故障现象 |
| 保险理赔 | `insurance` | 理赔单 | 理赔单号、事故类型、受损设备 |
| 电费结算 | `bill` | 结算单 | 结算单号、结算月份、所属电站 |

## 约定

- 每个模块的页面在 `frontend/src/views/<模块>/index.vue`，页面只负责渲染，读写统一走
  `frontend/src/api/local-service.ts`。
- 字段、状态、动作与流转目标集中在 `frontend/src/data/modules.ts`；示例数据在
  `frontend/src/data/seed.ts`。
- 状态流转只允许在 `local-service.ts` 里改，页面组件不做业务判断。
- 想回到初始数据：清掉浏览器里 `pv-plant-ops:entries` 这一项，或调用 `resetModule(模块)`。
