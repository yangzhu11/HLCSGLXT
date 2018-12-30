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
            <h3>用户添加</h3>
          </div>
          <div class="text item">
            <!-- 模板内容 -->
            <!-- 表单组件  登录表单 -->
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" label-position="top" class="demo-ruleForm">
              <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="ruleForm2.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input type="password" v-model="ruleForm2.pwd" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="用户组" prop="region">
                <el-select v-model="ruleForm2.region" placeholder="请选择会员类型">
                  <el-option label="vip会员" value="vip会员"></el-option>
                  <el-option label="普通会员" value="普通会员"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
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
    // 自定义验证两次密码是否一致
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.ruleForm2.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    //   返回的数据
    return {
      data: {},
      ruleForm2: {
        name: "",
        pwd: "",
        checkPass: "",
        region: ""
      },
      // 验证的规则
      rules2: {
        name: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
          { min: 6, max: 12, trigger: "blur", message: "必须在6到12个数之间" }
        ],
        pwd: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 1, max: 12, trigger: "blur", message: "必须在1到12个数之间" }
        ],
        checkPass: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          { min: 1, max: 12, trigger: "blur", message: "必须在1到12个数之间" },
          //  调用两次方法是否一致
          { validator: validatePass2, trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择会员类型", trigger: "change" }
        ]
      }
    };
  },
  components: {
    //注册组件
    LeftMenu,
    RightTop,
    RightBottom
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

