
<template>
<div class="flex-col my-10 ">
  2006年，参演电视剧《与青春有关的日子》，开始在影视圈崭露头角 [1]  [71]  。2005年，拍摄古装剧《锦衣卫》。2007年，主演赵宝刚导演的青春剧《奋斗》 [2]  ；同年，主演首部电影《走着瞧》。2008年，主演滕华涛执导的电视剧《蜗居》，饰演80后城市青年小贝 [1]  。2009年，在电影《海洋天堂》中扮演自闭症患者王大福；同年，参演抗战剧《雪豹》 [3]  。2011年，主演的电视剧《裸婚时代》播出 [4]  ；同年，连续2年获得北京大学生电影节 [5-6]  最受大学生欢迎男演员奖。2012年，凭借电影《失恋33天》获得第31届大众电影百花奖最佳男主角奖 [7]  ；同年，成立北京君竹影视文化有限公司，并导演第一部影视作品《小爸爸》。2013年2月，主演的电影《西游·降魔篇》在全国上映 [8]  。2014年3月28日，主演的爱情片《我在路上最爱你》上映。2014年，在姜文执导的动作喜剧片《一步之遥》中扮演武七一角。2016年，主演电视剧《少帅》 [9]  和《剃刀边缘》 [10]  。2017年，凭借导演的电影《陆垚知马俐》获得第31届中国电影金鸡奖导演处女作奖 [11-12]  。2018年9月30日，主演的喜剧动作电影《胖子行动队》上映 [13]  。2021年8月20日，主演的电影《测谎人》上映
   </div>
  

</template>
  
  <script lang="ts">
  import { useRouter } from "vue-router";
  import {ref} from 'vue'
  import type { Ref } from 'vue'

  import { defineComponent, computed } from "vue";
  import { userDetail } from '@/service/userApi'
  import {toast} from '@/utils/notification'
  let userName:any = ref("")
  userDetail().then((res:any)=>{
    console.log(res)
    
    userName.value = res.result?.userName || "默认";
    toast(res.message,"success")


}).catch((err:any)=>{
    console.log(err)
    toast(err.message,"success")
});

  export default defineComponent({
    name: "Header",
  
})
  </script>
