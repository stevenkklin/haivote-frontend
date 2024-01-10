<template>
<!--  <ContentField v-if="!$store.state.user.pulling_info">-->
<!--    <div class="row justify-content-center">-->
<!--      <div class="col-3">-->
<!--        <form @submit.prevent="login">-->
<!--          <div class="mb-3">-->
<!--            <label for="username" class="form-label">用户名</label>-->
<!--            <input v-model="username" type="text" class="form-control" id="username" placeholder="请输入用户名">-->
<!--          </div>-->
<!--          <div class="mb-3">-->
<!--            <label for="password" class="form-label">密码</label>-->
<!--            <input v-model="password" type="password" class="form-control" id="password" placeholder="请输入密码">-->
<!--          </div>-->
<!--          <div class="error_message">{{ error_message }}</div>-->
<!--          <button type="submit" class="btn btn-primary">提交</button>-->
<!--        </form>-->
<!--      </div>-->
<!--    </div>-->
<!--  </ContentField>-->
  <div class="echarts-box">
    <div id="myEcharts" :style="{ width: '90vw', height: '90vh', margin: 'auto' }"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {onMounted, onUnmounted, reactive} from "vue";
import axios from "axios";
export default {
  name: "echartsBox",
  setup() {
    /// 声明定义一下echart
    let echart = echarts;

    onMounted(async () => {
      await getAllVote();
      initChart();
    });

    onUnmounted(() => {
      echart.dispose();
    });

    let charData = reactive();
    const getAllVote = async () => {
      await axios.get('http://localhost:8080/api/vote/all')
          .then(res => {
            if (res.data.code === 0 ) {
              console.log("teamOne:" + res.data.data.teamOne)
              charData = res.data.data;
              console.log("charData:" + charData.teamOne)
              console.log("success get all vote result")
            } else {
              console.log(res.data.message)
            }
          })
          .catch(() => {

          })
          .then(() => {
            console.log("get all vote result")
          });
    }

    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("myEcharts"));
      // 把配置和数据放这里
      var data = [];
      for (let i = 0; i < 5; ++i) {
        data.push(Math.round(Math.random() * 200));
      }
      let option2 = {
        xAxis: {
          axisLabel: {
            fontSize: 14,  // Adjust the font size for the x-axis labels
            color: 'white'  // Set the font color for the x-axis labels
          },
          max: 'dataMax'
        },
        yAxis: {
          axisLabel: {
            fontSize: 14,  // Adjust the font size for the y-axis labels
            color: 'white'  // Set the font color for the y-axis labels
          },
          type: 'category',
          data: ['队伍1', '队伍2', '队伍3', '队伍4', '队伍5', '队伍6'],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 6 // only the largest 3 bars will be displayed
        },
        series: [
          {
            realtimeSort: true,
            type: 'bar',
            data: [
              charData.teamOne,
              charData.teamTwo,
              charData.teamThree,
              charData.teamFour,
              charData.teamFive,
              charData.teamSix
            ],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ],
        legend: {
          show: true
        },
        animationDuration: 3000,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      };

      // function update() {
      //   var data = option2.series[0].data;
      //   for (var i = 0; i < data.length; ++i) {
      //     if (Math.random() > 0.9) {
      //       data[i] += Math.round(Math.random() * 2000);
      //     } else {
      //       data[i] += Math.round(Math.random() * 200);
      //     }
      //   }
      //   chart.setOption(option2);
      // }
      //


      chart.setOption(option2);
      window.onresize = function() {
        //自适应大小
        chart.resize();
      };
    }
    setInterval(function() {
      getAllVote();
      initChart();
    }, 200);

    return { initChart };
  }
};
</script>

<style scoped>
button {
  width: 100%;
}
.error_message {
  color: red;
}
</style>