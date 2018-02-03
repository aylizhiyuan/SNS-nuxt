<template>
  <div id="default-template">
    <nuxt/>
  </div>
</template>
<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
//时间过滤器
Vue.filter('formatDate',function(value){
    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    function fillZero(num){
        return num > 10 ? num : '0' + num;
    }
    return fillZero(year) + '.' + fillZero(month) + '.' + fillZero(day) + ' ' + fillZero(hour) + ':' + fillZero(minute);
})
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {

}
</script>
