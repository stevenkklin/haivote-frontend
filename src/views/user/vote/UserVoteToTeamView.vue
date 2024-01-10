<template>
  <div id="content">
    <van-address-list v-for="one in list" :key="one.id"
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        right-icon=""
        default-tag-text="默认"
        add-button-text="投票"
        @add="onAdd(one.teamNumber)"
    />
  </div>


</template>

<script>
import {ref} from "vue";
import axios from "axios";
import * as teamList from "ant-design-vue/es/color-picker/ColorPicker";
import {showToast} from "vant";

export default {
  name: "echartsBox",
  computed: {
    teamList() {
      return teamList
    }
  },
  setup() {
    const chosenAddressId = ref('1');
    const list = [
      {
        id: '1',
        teamNumber: 1,
        name: '队伍1',
        tel: '13000000000',
        address: 'XXXXXXXXXXXXXXXXXXXXXXXX',
      },
      {
        id: '2',
        teamNumber: 2,
        name: '队伍2',
        tel: '1310000000',
        address: 'XXXXXXXXXXXXXXXXXXX',

      },{
        id: '3',
        teamNumber: 3,
        name: '队伍3',
        tel: '1310000000',
        address: 'XXXXXXXXXXXXXXXXXXX',
      },{
        id: '4',
        teamNumber: 4,
        name: '队伍4',
        tel: '1310000000',
        address: 'XXXXXXXXXXXXXXXXXXX',

      },{
        id: '5',
        teamNumber: 5,
        name: '队伍5',
        tel: '1310000000',
        address: 'XXXXXXXXXXXXXXXXXXX',
      },{
        id: '6',
        teamNumber: 6,
        name: '队伍6',
        tel: '1310000000',
        address: 'XXXXXXXXXXXXXXXXXXX',
      },
    ];
    // const disabledList = [
    //   {
    //     id: '3',
    //     name: '王五',
    //     tel: '1320000000',
    //     address: '浙江省杭州市滨江区江南大道 15 号',
    //   },
    // ];

    const onAdd =  (one) =>{
       axios.get('http://localhost:8080/api/vote/team', {
         params: {
           teamNumber : one
         }
      })
          .then(res => {
            if (res.data.code === 0 ) {
              console.log("success get all vote result")
              console.log(teamList.value)
              showToast('投票成功');
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
    return {
      list,
      onAdd,
      chosenAddressId,
    };
  }
};
</script>

<style scoped>
#content {
  margin-top: 5vh;
}


</style>