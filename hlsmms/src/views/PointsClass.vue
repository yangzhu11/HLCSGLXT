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
        <h3>分类管理</h3>
      </div>
      <div  class="text item">
      <!-- 模板内容 -->
       <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="分类名称"
      width="600">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
  
  
    <el-table-column label="管理">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
      </template>
    </el-table-column>
  </el-table>





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
import LeftMenu from "../components/leftMenu";
import RightTop from "../components/rightTop";
import RightBottom from "../components/rightBottom";

export default {
  data() {
     return {
        tableData: [{
          name: '舒肤佳',
        }, {
          name: '海飞丝',
        }, {
          name: '食品',
        }, {
          name: '优乐美',
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  },
  components: {
    //注册组件
    LeftMenu,
    RightTop,
    RightBottom
  }
};
</script>

