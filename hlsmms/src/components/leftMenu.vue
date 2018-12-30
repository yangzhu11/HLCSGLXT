<template>
  <el-aside width="200px">
    <!-- 左侧菜单 -->
    <div class="top">
      <h1>华联超市管理系统</h1>
      <p>你好，admin</p>
      <p>
        <span>
          <router-link to="/">管理首页</router-link>
        </span>|
        <span>退出系统</span>
      </p>
    </div>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :unique-opened="isOpened">

      <!-- 第一个菜单 -->
      <el-submenu index="1">
        <template slot="title">
          <span>分类管理</span>
        </template>
        <el-menu-item index="/pointsclass">
          <router-link to="/pointsclass">分类管理</router-link>
        </el-menu-item>
        <el-menu-item index="/pointsadd">
          <router-link to="/pointsadd">添加分类</router-link>
        </el-menu-item>
      </el-submenu>
      <!-- 第二个菜单 -->
      <el-submenu index="2">
        <template slot="title">
          <span>商品管理</span>
        </template>
        <el-menu-item index="1-1">商品管理</el-menu-item>
        <el-menu-item index="1-2">添加商品</el-menu-item>
      </el-submenu>
      <!-- 第三个菜单 -->
      <el-submenu index="3">
        <template slot="title">
          <span>进货管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <!-- 第四个菜单 -->
      <el-submenu index="4">
        <template slot="title">
          <span>出货管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <!-- 第五个菜单 -->
      <el-submenu index="5">
        <template slot="title">
          <span>统计管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>

      <!-- 第六个菜单 -->
      <el-submenu index="6">
        <template slot="title">
          <span>账号管理</span>
        </template>
        <el-menu-item index="/useradd">
          <router-link to="/useradd">用户添加</router-link>
        </el-menu-item>
        <el-menu-item index="/userlist">
          <router-link to="/userlist">用户列表</router-link>
        </el-menu-item>
        <el-menu-item index="/pwdedit">
          <router-link to="/pwdedit">修改密码</router-link>
        </el-menu-item>
      </el-submenu>

      <!-- 第7个菜单 -->
      <el-submenu index="7">
        <template slot="title">
          <span>分类管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>

      <!-- 第八个菜单 -->
      <el-submenu index="8">
        <template slot="title">
          <span>分类管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      isOpened: true
    };
  },
  //菜单展开和收起的方法
  methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    }
  }
};
</script>

<style>
</style>