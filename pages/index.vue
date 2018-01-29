<template>
    <div>
        <my-header></my-header>
        <div class="index my-container">
            <div class="row">
                <div class="col-8 main">
                    <!--banner-->
                    <div v-swiper:mySwiper="swiperOption" class="banner">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="banner in banners">
                                <img :src=banner>
                            </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-white"></div>
                        <div class="swiper-button-prev swiper-button-white"></div>
                        <div class="swiper-button-next swiper-button-white"></div>
                    </div>
                </div>
                <div class="col-4 aside">
                    <div class="board">
                        <nuxt-link to="/">
                            <img src="../assets/img/1.png">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/2.png">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/3.png">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/4.png">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/5.png">
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import myHeader from '../components/myHeader'
    export default {
        data () {
          return {
              banners: [ '/banner1.jpg', '/banner2.jpg', '/banner3.jpg','/banner4.jpg'],
              swiperOption:{
                  autoplay:{
                   delay:3000,//切换时间
                   stopOnLastSlide:false,//是否停止在最后一张
                   disableOnInteraction:false,//禁止轮播
                  },
                  pagination:{
                      el:'.swiper-pagination'
                  },
                  navigation:{
                      nextEl:'.swiper-button-next',
                      prevEl:'.swiper-button-prev'
                  }
                  // some swiper options...
              }
          }
        },
        components:{
            myHeader
        },
        mounted() {

        }
    }
</script>