<template>
<div id="loginbox">
 <!-- 卡片组件： 登录的外框 -->
<el-card class="box-card" id="login">
  <div slot="header" class="clearfix">
    <h2>用户登录</h2>
  </div>
  <div class="text item">
   <!-- 表单组件  登录表单 -->
   <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input type="text" v-model="ruleForm2.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pwd">
    <el-input type="password" v-model="ruleForm2.pwd" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</el-card>
</div>
</template>
<script>
 export default {
    data() {
     //   返回的数据
      return {
        ruleForm2: {
          name: '',
          pwd: ''
        },
        // 验证的规则
        rules2: {
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'},
             {min:6,max:12, trigger: 'blur',message: '必须在6到12个数之间'}
          ],
          pwd: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
             {min:6,max:12, trigger: 'blur',message: '必须在6到12个数之间'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push("/")
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
#loginbox{
    
    background: url(../../src/assets/beijing.jpg);
}
#login{
    width:500px;
    height:300px;
    /* 让盒子水平和垂直绝对居中 */
    position: absolute;
    left:0;
    top:0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.el-card__header{
    padding: 0 10px !important;
}

</style>

