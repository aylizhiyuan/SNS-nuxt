<template>
    <div>
        <my-header></my-header>
        <div class="collection my-container">
            <div class="row">
                <div class="col-8 main">
                    <div class="main-top">
                        <nuxt-link to="/u/123" class="avatar-collection">
                            <img src="~assets/img/default-avatar.jpg">
                        </nuxt-link>
                        <a class="btn btn-success follow">
                            <i class="fa fa-plus-square-o"></i>
                            <span>关注</span>
                        </a>
                        <div class="btn btn-hollow">
                            投稿
                        </div>
                        <div class="title">
                            <nuxt-link class="name" to="/collection/123">
                                网易云音乐
                            </nuxt-link>
                        </div>
                        <div class="info">
                            收录了40篇文章 · 14人关注
                        </div>
                    </div>
                    <!---->
                    <ul class="trigger-menu">
                        <li :class="{active:currentTab == 'NewComment'}">
                            <a href="javascript:void(0)" @click="toggleTab('NewComment')">
                                <i class="fa fa-comment"></i>
                                最新评论
                            </a>
                        </li>
                        <li :class="{active:currentTab == 'NewArticle'}">
                            <a href="javascript:void(0)" @click="toggleTab('NewArticle')">
                                <i class="fa fa-weibo"></i>
                                最新收录
                            </a>
                        </li>
                        <li :class="{active:currentTab == 'NewHot'}">
                            <a href="javascript:void(0)" @click="toggleTab('NewHot')">
                                <i class="fa fa-fire"></i>
                                热门
                            </a>
                        </li>
                    </ul>
                    <div id="list-container">
                        <!--动态组件-->
                        <component :is="currentTab" keep-alive></component>
                    </div>
                </div>
                <div class="col-4 aside">
                    <p class="title">专题公告</p>
                    <div class="description">
                        <p>
                            网易云音乐的评论背后都一个故事，让我们一起走进这些故事的背后，倾听那些未知何方的人和事。
                        </p>
                    </div>
                    <div class="share">
                        <span>分享到</span>
                        <a class="option" href="#">
                            <i class="fa fa-weibo"></i>
                        </a>
                        <a class="option" href="#">
                            <i class="fa fa-weixin"></i>
                        </a>
                    </div>
                    <div>
                        <p class="title">管理员</p>
                        <ul class="list collection-editor">
                            <li>
                                <nuxt-link to="/u/123" class="avatar">
                                    <img src="~assets/img/default-avatar.jpg">
                                </nuxt-link>
                                <nuxt-link to="/u/123" class="name">
                                    周九天
                                </nuxt-link>
                                <span class="tag">创建者</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="title">关注的人(14)</div>
                        <ul class="list collection-follower">
                            <li>
                                <nuxt-link to="/u/123" class="avatar">
                                    <img src="~assets/img/default-avatar.jpg">
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/u/123" class="avatar">
                                    <img src="~assets/img/default-avatar.jpg">
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/u/123" class="avatar">
                                    <img src="~assets/img/default-avatar.jpg">
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
    import NewComment from '~/components/collection/NewComment'
    import NewHot from '~/components/collection/NewHot'
    import NewArticle from '~/components/collection/NewArticle'
    export default {
        data () {
          return {
              currentTab:'NewComment'
          }
        },
        methods:{
            toggleTab:function(tab){
              this.currentTab = tab;
            }
        },
        components:{
            myHeader,
            NewComment,
            NewHot,
            NewArticle
        }
    }
</script>
<style>

</style>