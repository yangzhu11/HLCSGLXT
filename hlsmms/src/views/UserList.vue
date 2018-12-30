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
        <h3>用户列表</h3>
      </div>
      <div  class="text item">
      <!-- 用户列表内容 -->

      <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="用户名称"
      width="300">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="用户组"
      width="300">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.grouping }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="管理">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i>编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i>删除</el-button>
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
import LeftMenu from '../components/leftMenu';
import RightTop from '../components/rightTop';
import RightBottom from '../components/rightBottom';

export default {
  data() {
     return {
        tableData: [{
          name: '张三',
          grouping: '超级管理员',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '李四',
          grouping: '普通会员',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          name: '王五',
          grouping: '普通会员',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          name: '赵六',
          grouping: '超级管理员',
          address: '上海市普陀区金沙江路 1516 弄'
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
  },
};
</script>

