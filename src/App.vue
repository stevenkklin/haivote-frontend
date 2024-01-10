<template>

<!--  <NavBar/>-->
  <router-view></router-view>
</template>


<script>
// import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// import axios from 'axios';
// import $ from 'jquery';
export default {
  components: {
    // NavBar
  },
  setup() {
    // // 注册
    // axios.post('http://localhost:3000/user/account/register/', {
    //   username: 'yxc5',
    //   password: 'pyxc',
    //   confirmedPassword: 'pyxc',
    // })
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(res => {
    //   console.log(res)
    // })
    // .then(() => {
    //   console.log("register")
    // });
    //
    //
    //
    // // getInfo by token
    // axios.get('http://localhost:3000/user/account/info/', {
    //   headers:{
    //     Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJjMzdiYjNkZTA4Mzg0NTk1OGI2YmFmYTllYWMxNWM0ZCIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY3ODg4Mzk2MSwiZXhwIjoxNjgwMDkzNTYxfQ.Im5d1FLpU7UosPBoHAWRWIBV9yDmduaLf7EsM55Ac8k",
    //   }
    // })
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(res => {
    //   console.log(res)
    // })
    // .then(() => {
    //   console.log("getInfoByToken")
    // });


    // $.ajax({
    //   url: "http://localhost:3000/user/account/token2",
    //   type: "post",
    //   data: {
    //       username: "linchao",
    //       password: "123",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // })


  }


}
</script>

<style>
body {
  background-image: url("@/assets/images/gradual.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0; /* 可以清除默认的body边距 */
  height: 100vh; /* 设置body的高度为视口高度 */
  overflow: hidden; /* 可以防止页面内容溢出屏幕时出现滚动条 */
}
</style>
