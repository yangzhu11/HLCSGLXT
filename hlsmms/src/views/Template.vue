<template>
  <el-container id="home">
    <!-- 左侧 -->
       <LeftMenu></LeftMenu>
  <!-- 右侧 -->
  <el-container id="mainContent">
    <!-- 顶部 -->
    <rightTop></rightTop>
    <!-- 右中 -->
    <el-main>
     <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>系统信息</h3>
      </div>
      <div  class="text item">
      <!-- 模板内容 -->
      </div>
    </el-card>

      
    </el-main>
    <!-- 底部 -->
    <rightBottom></rightBottom>
  </el-container>
</el-container>
</template>

<script>
// @ is an alias to /src
//引入导航组件
import LeftMenu from '../components/leftMenu';
import RightTop from '../components/rightTop';
import RightBottom from '../components/rightBottom';

export default {
  data() {
    return {
      
    };
  },
  components: {
    //注册组件
    LeftMenu,
    RightTop,
    RightBottom
  },
};
</script>

