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
        <el-alert
      title="成功提示的文案"
      type="success"
      show-icon>
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info"
      show-icon>
  </el-alert>
   <!-- 栅格 一行两列 -->
   <el-row  :gutter="40">
     <!-- 左边栅格 -->
  <el-col :span="12">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <h3>销量排行</h3>
  </div>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="goodsname"
      label="商品名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="salenum"
      label="销量"
      width="180">
    </el-table-column>
  </el-table>
</el-card>
  </el-col>

  
  <!-- 右边栅格 -->
  <el-col :span="12"><el-card class="box-card">
  <div slot="header" class="clearfix">
    <h3>缺货商品</h3>
  </div>
   <el-table
    :data="tableDatas"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="商品名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="num"
      label="销量"
      width="180">
    </el-table-column>
  </el-table>
</el-card></el-col>
</el-row>
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
      tableData: [
        { goodsname: "测试商品1", salenum: 10 },
        { goodsname: "测试商品2", salenum: 20 },
        { goodsname: "测试商品3", salenum: 90 },
        { goodsname: "测试商品4", salenum: 40 },
        { goodsname: "测试商品5", salenum: 50 }
      ],
      tableDatas:[
        { name: "护肤1", num: 10 },
        { name: "护肤2", num: 99 },
        { name: "护肤3", num: 100 },
      ]
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

