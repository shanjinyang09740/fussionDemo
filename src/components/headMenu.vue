<template>
  <div class="headMenu">
    <template v-for="headMenu in headMenus">
        <!-- 最后一级菜单 -->
      <el-menu-item v-if="!headMenu.childs&&headMenu.entity"
                    :key="headMenu.entity.id" :data="headMenu" :index="headMenu.entity.name" 
                   >
        <i :class="headMenu.entity.icon"></i>
        <span slot="title">{{headMenu.entity.alias}}</span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu v-if="headMenu.childs&&headMenu.entity"
                  :key="headMenu.entity.id" :data="headMenu" :index="headMenu.entity.name">
        <template slot="title">
          <i :class="headMenu.entity.icon"></i>
          <span> {{headMenu.entity.alias}}</span>
        </template>
        <!-- 递归 -->
        <headMenu :headMenus="headMenu.childs"></headMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'HeadMenu',
    props: ['headMenus'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>
</style>