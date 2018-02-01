<template>
    <div>
        <my-header></my-header>
        <div class="note">
            <!--文章区域-->
            <div class="post">
                <!--正文-->
                <div class="article">
                    <h1 class="title">
                        月薪三千，就该去死吗？
                    </h1>
                    <div class="author">
                        <nuxt-link class="avatar" to="/u/123">
                            <img src="../../assets/img/default-avatar.jpg">
                        </nuxt-link>
                        <div class="info">
                            <span class="name">测试用户</span>
                            <a class="btn-sm" href="javascript:void(0)" :class="followObj" @click="isFollow" @mouseover="noFollow" @mouseleave="beFollow">
                                <i class="fa" :class="iconObj" ref="icon"></i>
                                <span ref="followWord">关注</span>
                            </a>
                            <div class="meta">
                                <span>2018.01.23 16:09</span>
                                <span>字数 2273</span>
                                <span>阅读 882</span>
                                <span>评论 7</span>
                                <span>喜欢 34</span>
                            </div>
                        </div>
                    </div>
                    <div class="show-content">
                       <p>可能是春节快要到了，游子回家的旋律吹响，一年一度的“比头疼大赛”又要拉开大幕。比什么？比工作，比资产，比儿女，比婚姻。都市人携带着远方不为所知的辛苦，在同学相聚时，多了些虚伪；在朋友重逢时，少了些真诚。
                       </p>
                        <p>家乡是个让人又爱又恨的地方。有时，常看见有人自嘲：在外大老板，回乡二胖子；在外大哥大，回镇三孙子；在外大名媛，回村小豆子；在外喜当爹，回家好多爹——亲爹不倒，干爹飘飘。
                        </p>
                    </div>
                    <div class="show-foot">
                        <nuxt-link to="/nb/123" class="notebook">
                            <i class="fa fa-book"></i>
                            <span>我的文集</span>
                        </nuxt-link>
                        <div class="copyright">
                            © 著作权归作者所有
                        </div>
                    </div>
                    <div class="follow-detail">
                        <div class="info">
                            <nuxt-link class="avatar" to="/u/123">
                                <img src="../../assets/img/default-avatar.jpg">
                            </nuxt-link>
                            <a class="btn btn-success" href="javascript:void(0)" :class="followObj" @click="isFollow" @mouseover="noFollow" @mouseleave="beFollow">
                                <i class="fa" :class="iconObj" ref="icon2"></i>
                                <span ref="followWord2">关注</span>
                            </a>
                            <nuxt-link class="title" to="/u/123">
                                测试用户
                            </nuxt-link>
                            <i class="fa fa-mars"></i>
                            <p>
                                写了 46873 字，被 26 人关注，获得了 95 个喜欢
                            </p>
                        </div>
                        <div class="signature">
                            为城市里的不安和孤寂发声。微信公众号：得及
                        </div>
                    </div>
                    <div class="meta-bottom">
                        <div class="like">
                            <div class="btn like-group" :class="{active:active_like}">
                                <div class="btn-like">
                                    <a href="javascript:void(0)" @click="isLike">
                                        <i class="fa fa-heart-o"></i>
                                        <span>喜欢</span>
                                    </a>
                                </div>
                                <div class="modal-wrap">
                                    <a>{{like_number}}</a>
                                </div>
                            </div>
                        </div>
                        <div class="share-group">
                            <a v-b-tooltip.hover title="分享到微博" href="javascript:void(0)">
                                <i class="fa fa-weibo weibo"></i>
                            </a>
                            <a v-b-tooltip.hover title="分享到微信" href="javascript:void(0)">
                                <i class="fa fa-weixin weixin"></i>
                            </a>
                            <a v-b-tooltip.hover title="分享到qq" href="javascript:void(0)">
                                <i class="fa fa-qq qq"></i>
                            </a>
                            <a class="more-share" href="javascript:void(0)" id="popoverButton-sync" variant="primary">
                                更多分享
                            </a>
                            <b-popover :show.sync="showPop" target="popoverButton-sync" placement="top" triggers="focus">
                                <ul class="share-list">
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="fa fa-twitter twitter"></i>
                                            <span>分享到Twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="fa  fa-facebook-square facebook"></i>
                                            <span>分享到Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="fa fa-google-plus google"></i>
                                            <span>分享到Google</span>
                                        </a>
                                    </li>
                                </ul>
                            </b-popover>
                        </div>
                    </div>
                </div>
            </div>
            <!--悬浮的操作框-->
            <div class="side-bar"></div>
            <!--对应的推荐阅读-->
            <div class="note-bottom"></div>
        </div>
    </div>
</template>
<script>
    import myHeader from '~/components/myHeader'
    export default {
        data () {
            return {
                followObj:{
                    'follow':true,
                    'following':false
                },
                iconObj:{
                    'fa-plus-square-o':true,
                    'fa-check':false
                },
                like_number:30,
                active_like:false,
                showPop:false
            }
        },
        components:{
            myHeader
        },
        methods:{
            isFollow:function(){
                let word = this.$refs.followWord.innerHTML;
                /*这里预留关注的ajax操作*/
                this.followObj.follow = !this.followObj.follow;
                this.followObj.following = !this.followObj.following;
                this.iconObj['fa-plus-square-o'] = !this.iconObj['fa-plus-square-o'];
                this.iconObj['fa-check'] = !this.iconObj['fa-check'];
                this.$refs.followWord.innerHTML = word == '关注' ? '已关注' : '关注';
                this.$refs.followWord2.innerHTML = word == '关注' ? '已关注' : '关注';
            },
            noFollow:function(){
                let word = this.$refs.followWord.innerHTML;
                if(word == '已关注'){
                    this.$refs.followWord.innerHTML = '取消关注';
                    this.$refs.icon.className = 'fa fa-close';
                    this.$refs.followWord2.innerHTML = '取消关注';
                    this.$refs.icon2.className = 'fa fa-close';
                }
            },
            beFollow:function(){
                let word = this.$refs.followWord.innerHTML;
                if(word == '取消关注'){
                    this.$refs.followWord.innerHTML = '已关注';
                    this.$refs.icon.className = 'fa fa-check';
                    this.$refs.followWord2.innerHTML = '已关注';
                    this.$refs.icon2.className = 'fa fa-check';
                }
            },
            isLike:function(){
                if(this.active_like == true){
                    //不喜欢了
                    --this.like_number
                }else{
                    //喜欢
                    ++this.like_number
                }
                //将最新的like_number值直接发送给后台
                this.active_like = !this.active_like;
            }
        }
    }
</script>