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
            <h3>添加管理</h3>
          </div>
          <div class="text item">
            <!-- 模板内容 -->

            <!-- 下拉菜单 -->
            <h4>所属分类：</h4>
            <el-select v-model="value8" filterable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>

            <!-- 表单 -->
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" label-position="top" class="demo-ruleForm">
              <el-form-item label="分类名称" prop="name">
                <el-input type="text" v-model="ruleForm2.name" autocomplete="off"></el-input>
              </el-form-item>

              <!-- 单选 -->
              <h4>状态：</h4>
              <el-radio-group v-model="radio2">
                <el-radio :label="3">启用</el-radio>
                <el-radio :label="6">禁用</el-radio>
              </el-radio-group>

              <!-- 添加 -->
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">添加</el-button>
              </el-form-item>
            </el-form>

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
      radio2: 3,
      data: {},
      ruleForm2: {
        name: ""
      },
      rules2: {
        name: [{ required: true, message: "分类名称不能为空", trigger: "blur" }]
      },

      options: [
        {
          value: "选项1",
          label: "奶类"
        },
        {
          value: "选项2",
          label: "生活用品"
        },
        {
          value: "选项3",
          label: "床上用品"
        },
        {
          value: "选项4",
          label: "吃的"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value8: ""
    };
  },
  components: {
    //注册组件
    LeftMenu,
    RightTop,
    RightBottom
  }
};
</script>

