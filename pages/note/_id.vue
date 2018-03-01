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
                            <i class="fa fa-plus"></i>
                            <span>关注</span>
                        </a>
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
                        <li :class="{active:currentTab == 'NewArticle'}">
                            <a href="javascript:void(0)" @click="toggleTab('NewArticle')">
                                <i class="fa fa-comment"></i>
                                最新发布
                            </a>
                        </li>
                        <li :class="{active:currentTab == 'NewComment'}">
                            <a href="javascript:void(0)" @click="toggleTab('NewComment')">
                                <i class="fa fa-weibo"></i>
                                最新评论
                            </a>
                        </li>
                        <li :class="{active:currentTab == 'Contents'}">
                            <a href="javascript:void(0)" @click="toggleTab('Contents')">
                                <i class="fa fa-fire"></i>
                                目录
                            </a>
                        </li>
                    </ul>
                    <div id="list-container">
                        <!--动态组件-->
                        <component :is="currentTab" keep-alive></component>
                    </div>
                </div>
                <div class="col-4 aside">
                    <div class="share">
                        <span>分享到</span>
                        <a class="option" href="#">
                            <i class="fa fa-weibo"></i>
                        </a>
                        <a class="option">
                            <i class="fa fa-weixin"></i>
                        </a>
                    </div>
                    <div>
                        <p class="title">文集作者</p>
                        <ul class="list collection-editor">
                            <li>
                                <nuxt-link to="/u/123" class="avatar">
                                    <img src="~assets/img/default-avatar.jpg">
                                </nuxt-link>
                                <nuxt-link to="/u/123" class="name">
                                    周九天
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
    import NewArticle from '~/components/note/NewArticle'
    import NewComment from '~/components/note/NewComment'
    import Contents from '~/components/note/Contents'
    import myHeader from '~/components/myHeader'
    export default {
        data () {
            return {
                currentTab:'NewArticle'
            }
        },
        methods:{
            toggleTab:function(tab){
                this.currentTab = tab;
            }
        },
        components:{
            myHeader,
            NewArticle,
            NewComment,
            Contents
        }
    }
</script>