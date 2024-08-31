<template>
  <Layout class="layout">
    <LayoutHeader>
      <Menu
        mode="horizontal"
        theme="dark"
        :selectedKeys="[selectedKey]"
        class="menu-center semi-transparent"
      >
        <template v-for="item in routeList" :key="item.name">
          <!-- 如果有多个子菜单 -->
          <SubMenu v-if="item.children && item.children.length > 1" :key="item.name">
            <template #title>
              <span class="nav-link">{{ item.meta?.title }}</span>
            </template>
            <MenuItem v-for="child in item.children" :key="child.name" class="submenu-item">
              <router-link :to="item.path+'/'+child.path" class="nav-link">{{ child.meta?.title}}</router-link>
            </MenuItem>
          </SubMenu>
          <!-- 如果只有一个子菜单，直接显示 -->
          <MenuItem v-else :key="item.name" class="nav-item">
            <router-link :to="item.path+'/'+item.children[0].path" class="nav-link">{{ item.meta?.title }}</router-link>
          </MenuItem>
        </template>
      </Menu>
    </LayoutHeader>
    <LayoutContent class="site-layout-content">
      <RouterView />
    </LayoutContent>
  </Layout>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter, type RouteRecordRaw } from 'vue-router';
import { Layout, LayoutHeader, LayoutContent, Menu, MenuItem, SubMenu } from 'ant-design-vue';

const router = useRouter();
const route = useRoute();
const routeList = ref<Array<RouteRecordRaw>>([]);
const selectedKey = ref(route.name?.toString() || 'home');

onMounted(() => {
  const routes: Array<RouteRecordRaw> = router.getRoutes();
  routes.forEach(item => {
    if (item.children && item.children.length > 0) {
      routeList.value.push(item);
    }
  });
  console.log(routeList.value);
});
</script>

<style scoped>
.layout {
  min-height: 100vh;
}

.menu-center {
  display: flex;
  justify-content: center;
}

.semi-transparent {
  background-color: rgba(28, 27, 27, 0.7); /* 半透明深色背景 */
}

.site-layout-content {
  padding: 24px;
  background: #fff;
}

.nav-item {
  width: 150px; /* 增宽导航项宽度 */
  text-align: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  display: block;
}

.nav-link:hover {
  color: #1890ff; /* 悬停时更改链接颜色 */
  /* background-color: rgba(255, 255, 255, 0.1); 增加背景颜色的变化 */
}

.submenu-item {
  height: 50px; /* 改变子菜单项的高度 */
  width: 100px;
  display: flex;
  align-items: center;
  padding: 0;
}

.ant-menu-submenu-popup {
  width: 150px; /* 将子菜单的宽度调整为与导航项相同 */
}

.ant-menu-submenu-title:hover {
  background-color: rgba(255, 255, 255, 0.1); /* 悬浮时改变子菜单标题背景颜色 */
}
</style>
