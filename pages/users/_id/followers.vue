<template>
    <div>
        <my-header></my-header>
        <div class="person my-container">
            <div class="row">
                <div class="col-8 main">
                    <div class="main-top">
                        <nuxt-link class="avatar" to="/u/123">
                            <img src="~assets/img/default-avatar.jpg">
                        </nuxt-link>
                        <button class="off  user-follow-button">
                            <i class="fa fa-plus"></i>
                            <span>关注</span>
                        </button>
                        <div class="title">
                            <nuxt-link class="name" to="/u/123">
                                我是不和么
                            </nuxt-link>
                        </div>
                        <div class="info">
                            <ul>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/users/123/following">
                                            <p>88</p>
                                            关注
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/users/123/followers">
                                            <p>55</p>
                                            粉丝
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/u/123">
                                            <p>32</p>
                                            文章
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>5000</p>
                                        字数
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>100</p>
                                        收获喜欢
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul class="trigger-menu">
                        <li :class="{active:currentTab == 'Following'}">
                            <a href="javascript:void(0)" @click="toggleTab('Following')">
                                关注用户 998
                            </a>
                        </li>
                        <li :class="{active:currentTab == 'Followers'}">
                            <a href="javascript:void(0)" @click="toggleTab('Followers')">
                                粉丝  128
                            </a>
                        </li>
                    </ul>
                    <div id="list-container">
                        <!--动态组件-->
                        <component :is="currentTab" keep-alive></component>
                    </div>
                </div>
                <div class="col-4 aside">
                    <div class="title">个人介绍</div>
                    <div class="description">
                        <div class="js-intro">
                            逃跑医生，预防医学专家，抗衰老顾问，创业者，奶爸！人生意义思考者，东方智慧践行者。非著名作家坯子。
                        </div>
                    </div>
                    <ul class="list user-dynamic">
                        <li>
                            <nuxt-link to="/users/123/collection">
                                <i class="fa fa-book"></i>
                                <span>他关注的专题/文集</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/users/123/like">
                                <i class="fa fa-heart-o"></i>
                                <span>他喜欢的文章</span>
                            </nuxt-link>
                        </li>
                    </ul>
                    <div>
                        <!--创建的专题-->
                        <div class="title">
                            他创建的专题
                        </div>
                        <ul class="list">
                            <li>
                                <nuxt-link to="/collection/123" class="avatar-collection">
                                    <img src="~assets/img/movie.jpg">
                                </nuxt-link>
                                <nuxt-link to="/collection/123" class="name">
                                    朱焘源值班报告
                                </nuxt-link>
                            </li>
                        </ul>
                        <!--管理的专题-->
                        <div class="title">
                            他管理的专题
                        </div>
                        <ul class="list">
                            <li>
                                <nuxt-link to="/collection/123" class="avatar-collection">
                                    <img src="~assets/img/movie.jpg">
                                </nuxt-link>
                                <nuxt-link to="/collection/123" class="name">
                                    朱焘源值班报告
                                </nuxt-link>
                            </li>
                        </ul>
                        <!--创建的文集-->
                        <div class="title">
                            他创建的文集
                        </div>
                        <ul class="list">
                            <li>
                                <nuxt-link to="/note/123" class="avatar-collection">
                                    <i class="fa fa-book"></i>
                                </nuxt-link>
                                <nuxt-link to="/note/123" class="name">
                                    朱焘源值班报告
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import myHeader from '~/components/myHeader'
    import Following from '@/components/users/Following'
    import Followers from '@/components/users/Followers'
    export default {
        name:'',
        data () {
            return {
                currentTab:'Followers'
            }
        },
        methods:{
            toggleTab:function(tab){
                this.currentTab = tab;
            }
        },
        components:{
            myHeader,
            Following,
            Followers
        }
    }
</script>