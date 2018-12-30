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
        <h3>密码修改</h3>
      </div>
      <div  class="text item">
      <!-- 密码内容 -->
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" label-position="top" class="demo-ruleForm">
  <el-form-item label="原密码" prop="name">
    <el-input type="password" v-model="ruleForm2.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="新密码" prop="pwd">
    <el-input type="password" v-model="ruleForm2.pwd" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认新密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">修改</el-button>
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
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

   //   返回的数据
      return {
        ruleForm2: {
          name: '',
          pwd: '',
          checkPass:''
        },
        // 验证的规则
        rules2: {
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'},
             {min:6,max:12, trigger: 'blur',message: '必须在6到12个数之间'}
          ],
          pwd: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
             {min:1,max:12, trigger: 'blur',message: '必须在1到12个数之间'}
          ],
          checkPass:[
             { required: true, message: '确认密码不能为空', trigger: 'blur' },
             {min:1,max:12, trigger: 'blur',message: '必须在1到12个数之间'},
            //  调用两次方法是否一致
              { validator: validatePass2, trigger: 'blur' }
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
  },
  components: {
    //注册组件
    LeftMenu,
    RightTop,
    RightBottom
  }
};
</script>

