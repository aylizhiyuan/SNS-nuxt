<template>
    <div>
        <div id="comment-list" class="comment-list">
            <!--提交的留言表单-->
            <form class="new-comment">
                <nuxt-link class="avatar" to="/u/213">
                    <img src="../assets/img/default-avatar.jpg">
                </nuxt-link>
                <textarea @focus="sendCommentBtn=true" placeholder="写下你的评论" v-model="commentData"></textarea>
                <transition :duration="200" name="fade">
                    <div v-if="sendCommentBtn" class="write-function-block clearfix">
                        <div class="emoji-modal-wrap">
                            <a href="javascript:void(0)" @click="showEmoji=!showEmoji" class="emoji">
                                <i class="fa fa-smile-o"></i>
                            </a>
                            <transition :duration="200" name="fade">
                                <div v-if="showEmoji" class="emoji-modal arrow-up">
                                    <vue-emoji @select="selectEmoji"></vue-emoji>
                                </div>
                            </transition>
                        </div>
                        <div class="hint">
                            Ctrl+Enter 发表
                        </div>
                        <a class="btn btn-send" href="javascript:void(0)" @click="sendComment">发送</a>
                        <a class="cancel" href="javascript:void(0)" @click="sendCommentBtn=false">取消</a>
                    </div>
                </transition>
            </form>
            <!--留言的列表-->
            <div id="normal-comment-list" class="normal-comment-list">
                <!--留言的排序-->
                <div class="top-title">
                    <span>25条评论</span>
                    <a class="author-only" href="javascript:void(0)">
                        只看作者
                    </a>
                    <div class="pull-right">
                        <a class="active" href="javascript:void(0)">
                            按喜欢排序
                        </a>
                        <a href="javascript:void(0)">
                            按时间正序
                        </a>
                        <a href="javascript:void(0)">
                            按时间倒序
                        </a>
                    </div>
                </div>
                <!--留言的正文-->
                <div class="comment-placeholder" style="display:none">
                    <div class="author">
                        <div class="avatar"></div>
                        <div class="info">
                            <div class="name"></div>
                            <div class="meta"></div>
                        </div>
                    </div>
                    <div class="title"></div>
                    <div class="title animated-delay"></div>
                    <div class="tool-group">
                        <i class="fa fa-thumbs-up"></i>
                        <div class="zan"></div>
                        <i class="fa fa-comment"></i>
                        <div class="zan"></div>
                    </div>
                </div>
                <div :id="'comment-'+comment.id" :keys="index" v-for="(comment,index) in comments" class="comment">
                    <div class="comment-content">
                        <div class="author">
                            <nuxt-link class="avatar" to="/u/123">
                                <img :src="comment.user.avatar">
                            </nuxt-link>
                            <div class="info">
                                <nuxt-link class="name" to="/u/123">
                                    {{comment.user.nick_name}}
                                </nuxt-link>
                                <div class="meta">
                                    <span>
                                        {{comment.floor}}楼·
                                        {{comment.create_at |formatDate}}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="comment-wrap">
                            <p>
                                {{comment.compiled_content}}
                            </p>
                            <div class="tool-group">
                                <a href="javascript:void(0)">
                                    <i class="fa fa-thumbs-o-up"></i>
                                    <span>
                                        {{comment.likes_count}}人点赞
                                    </span>
                                </a>
                                <a href="javascript:void(0)" @click="showSubCommentForm(index,'top','')">
                                    <i class="fa fa-comment-o"></i>
                                    <span>回复</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="sub-comment-list">
                        <div v-show="comment.children.length != 0" v-for="(subComment,nindex) in comment.children" :id="'comment-' + subComment.id" class="sub-comment" :keys="nindex">
                            <p>
                                <nuxt-link to="/u/123">
                                    {{subComment.user.nick_name}}
                                </nuxt-link>
                                :
                                <span v-html="subComment.compiled_content"></span>
                            </p>
                            <div class="sub-tool-group">
                                <span>{{subComment.create_at|formatDate}}</span>
                                <a href="javascript:void(0)" @click="showSubCommentForm(index,subComment.id,subComment.user.nick_name)">
                                    <i class="fa fa-comment-o"></i>
                                    <span>回复</span>
                                </a>
                            </div>
                        </div>
                        <div v-show="comment.children.length != 0" class="sub-comment more-comment">
                            <a class="add-comment-btn" @click="showSubCommentForm(index,'bottom','')" href="javascript:void(0)">
                                <i class="fa fa-pencil"></i>
                                <span>添加新评论</span>
                            </a>
                        </div>
                        <!--要显示的表单-->
                        <transition :duration="200" name="fade">
                            <form v-if="activeIndex.includes(index)" class="new-comment">
                            <textarea v-focus placeholder="写下你的评论"  ref="content" v-model="subCommentList[index]"></textarea>
                                <div class="write-function-block clearfix">
                                    <div class="emoji-modal-wrap">
                                        <a href="javascript:void(0)" class="emoji" @click="showSubEmoji(index)">
                                            <i class="fa fa-smile-o"></i>
                                        </a>
                                        <transition :duration="200" name="fade">
                                            <div v-if="emojiIndex.includes(index)" class="emoji-modal arrow-up">
                                                <vue-emoji ref="emoji" @select="selectSubEmoji"></vue-emoji>
                                            </div>
                                        </transition>
                                    </div>
                                    <div class="hint">
                                        Ctrl+Enter 发表
                                    </div>
                                    <a class="btn btn-send" href="javascript:void(0)" @click="sendSubCommentData(index)">
                                        发送
                                    </a>
                                    <a class="cancel" href="javascript:void(0)" @click="closeSubComment(index)">
                                        取消
                                    </a>
                                </div>
                            </form>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import vueEmoji from '~/components/vueEmoji'
    export default {
        name:'myComment',
        data () {
            return {
                sendCommentBtn:false,
                showEmoji:false,
                commentData:'',
                comments:[
                    {
                        id:19935725,
                        floor:2,
                        liked:true,
                        likes_count:20,
                        note_id:23054702,
                        user_id:6780849,
                        user:{
                            avatar:'/default-avatar.jpg',
                            id:6780849,
                            is_author:false,
                            nick_name:'七岁就很拽',
                            badge:null,

                        },
                        create_at:'2018-01-25T09:38:14.000+08:00',
                        children_count:4,
                        compiled_content:'今年25岁的我，年纪轻轻月薪就已经达到2800了，加上提成满勤再加上我天生的睿智头脑，平常帮客人拿下拖鞋点下烟得点小费可以拿到3100。觉得自己这几年过得也不容易，现在这么有钱，都不知道怎么花了，开始花钱大手大脚了，以前网吧包夜都是喝自来水，现在敢喝红茶了，还是一晚上买两瓶，甚至打电话出去叫炒河粉而且还要加个鸡蛋，我觉得现在有点迷失自我，有什么办法？希望能回到初心！',
                        children:[
                            {
                                id:20116365,
                                user_id:2604707,
                                user:{
                                    id:2604707,
                                    nick_name:'Bowman_'
                                },
                                parent_id:19935725,                                         create_at:'2018-01-30T11:23:03.000+08:00',
                                compiled_content:'兄die,我也和你有着一样的困惑，甚至一度迷失自我...'
                            },
                            {
                                id:20122216,
                                user_id:9933465,
                                user:{
                                    id:9933465,
                                    nick_name:'美女荷官'
                                },
                                parent_id:19935725,                                         create_at:'2018-01-30T14:25:32.000+08:00',
                                compiled_content:'是你李大钊飘了,还是我陈独秀拿不动刀了'
                            },
                            {
                                id:20122226,
                                user_id:9964877,
                                user:{
                                    id:9964877,
                                    nick_name:'保坤文化传媒'
                                },
                                parent_id:19935725,                                         create_at:'2018-01-30T14:25:49.000+08:00',
                                compiled_content:'哈哈。。'
                            },
                        ]
                    },
                    {
                        id:19935796,
                        floor:3,
                        liked:false,
                        likes_count:30,
                        create_at: "2018-01-25T09:40:18.000+08:00",
                        note_id:23054702,
                        user_id:6780849,
                        user:{
                            avatar:'/default-avatar.jpg',
                            id:6780849,
                            is_author:false,
                            nick_name:'七岁就很拽',
                            badge:null,

                        },
                        compiled_content:'作为一名混凝土方块移动工程师，我一直以3000的月薪骄傲，甚至一度迷失自我。。。看了楼主这篇文章，我找回了初心',
                        children_count:3,
                        children:[
                            {
                                id:19949215,
                                parent_id:19935796,
                                user_id:5954136,
                                user:{
                                    id:5954136,
                                    nick_name:'与笑颜开'
                                },
                                create_at:'2018-01-25T16:55:40.000+08:00',
                                compiled_content:'混凝土方块移动工程师是啥子工作，我咋没听过？我也做过混凝土这行'
                            },
                            {
                                id:20062029,
                                parent_id:19935796,
                                user_id:8914781,
                                user:{
                                    id:8914781,
                                    nick_name:'向天再借5厘米'
                                },
                                create_at:'2018-01-28T21:06:14.000+08:00',
                                compiled_content:'<a href="/users/88ad9c9678a6" class="maleskine-author" target="_blank" data-user-slug="88ad9c9678a6">@与笑颜开</a> 搬砖'
                            },
                            {
                                id:20122231,
                                parent_id:19935796,
                                user_id:9964877,
                                user:{
                                    id:9964877,
                                    nick_name:'保坤文化传媒'
                                },
                                create_at:'2018-01-25T16:55:40.000+08:00',
                                compiled_content:'好有意思。'
                            },
                        ]
                    },
                    {
                        children: [],
                        children_count:0,
                        compiled_content: "楼上评论的都是大佬啊",
                        create_at: "2018-01-29T11:26:53.000+08:00",
                        floor:4,
                        id:20080144,
                        liked:false,
                        likes_count:2,
                        note_id: 23054702,
                        user:
                            {
                                id: 3160769,
                                nick_name: "yuebiubiu",
                                is_author:false,
                                avatar:'/default-avatar.jpg'
                            },
                        user_id:3160769
                    }
                ],
                activeIndex:[],
                emojiIndex:[],
                subCommentList:[],
                commentFormState:[],
                commentId:[]
            }
        },
        methods:{
            selectEmoji:function(code){
                this.showEmoji = false;
                this.commentData += code;
            },
            sendComment:function(){
                console.log('发送');
            },
            showSubCommentForm:function(index,id,name){
               let ID = id.toString();
               if(this.commentId[index] == ID){
                   //点两次
                   this.activeIndex.splice(this.activeIndex.indexOf(index),1);
                   this.commentId[index] = '';
               }else{
                   //点一次
                   //清除表单内容
                   this.subCommentList[index] = '';
                   //表情关掉
                   this.emojiIndex = [];
                   if(!this.activeIndex.includes(index)){
                       this.activeIndex.push(index);
                   }
                   // 判断用户名是否存在，如果存在添加
                   if(name != ''){
                       this.subCommentList[index] = `@${name} `;
                   }
                   //存一下上一个回复列表对应点击的按钮
                   this.commentId[index] = ID;
               }
            },
            sendSubCommentData:function(value){
                let index = this.activeIndex.indexOf(value);
                this.activeIndex.splice(index,1);
                //value是下标
                console.log(this.subCommentList[value]);
            },
            closeSubComment:function(value){
                let index = this.activeIndex.indexOf(value);
                this.activeIndex.splice(index,1);
            },
            showSubEmoji:function(value){
                if(this.emojiIndex.includes(value)){
                    this.emojiIndex = [];
                }else{
                    this.emojiIndex = [];
                    this.emojiIndex.push(value);
                }
            },
            selectSubEmoji:function(code){
                //当前下标
                let index = this.emojiIndex[0];
                //将表情所代表的code值放入表单当中.
                if(this.subCommentList[index] == null){
                    this.subCommentList[index] = '';
                }
                this.subCommentList[index] += code;
                //关掉emoji弹出框
                this.emojiIndex = [];
                //聚焦一下
                let num = this.activeIndex.indexOf(index);
                this.$refs.content[num].focus();
            }
        },
        components:{
            vueEmoji,
        },
        directives: {
            // 除了默认设置的核心指令( v-model 和 v-show ),Vue 也允许注册自定义指令。
            // 对纯 DOM 元素进行底层操作
            // 注册局部指令，在模板中任何元素上使用新的 v-focus 属性
            "focus": {
                // 钩子函数：bind inserted update componentUpdated unbind
                // 钩子函数的参数：el，binding，vnode，oldVnode
                bind:function(el,binding,vnode,oldVnode){
                    el.focus();
                },
                inserted: function (el) {
                    // 聚焦元素
                    el.focus()
                }
            }
        },
        watch:{
            subCommentList:function(val){
                console.log(val);
            }
        }
    }
</script>
<style>
    .fade-enter-active,.fade-leave-active {
        opacity: 1;
        transition: .3s;
        -webkit-transition: .3s
    }
    .fade-enter,.fade-leave-to {
        opacity: 0;
        transform: translate3d(0,-5%,0);
        -webkit-transform: translate3d(0,-5%,0);
        transition: .3s;
        -webkit-transition: .3s
    }
    .note .post .comment-list {
        padding-top:20px;
    }
    .note .post .comment-list .new-comment {
        position:relative;
        margin-left:48px;
        margin-bottom:20px;
        padding:5px 0;
    }
    .note .post .comment-list .avatar {
        width:38px;
        height:38px;
        display:inline-block;
        margin-right:5px;
    }
    .note .post .comment-list .new-comment .avatar {
        position:absolute;
        left:-48px;
    }
    .note .post .comment-list .new-comment textarea {
        width:100%;
        height:80px;
        padding:10px 15px;
        border:1px solid #ccc;
        border-radius: 4px;
        display:inline-block;
        vertical-align: top;
        outline-style: none;
        resize: none;
        font-size:13px;
        background:#f8f8f8;
    }
    .note .post .comment-list .new-comment .emoji-modal-wrap {
        position:relative;
    }
    .note .post .comment-list .new-comment .emoji {
        float:left;
        margin-top:14px;
    }
    .note .post .comment-list .new-comment .emoji i {
        font-size:25px;
        color:#969696;
    }
    .note .post .comment-list .new-comment .emoji i:hover {
        color:#333;
    }
    .note .post .comment-list .new-comment .hint {
        float:left;
        margin:20px 0 0 20px;
        font-size:13px;
        color:#969696;
    }
    .note .post .comment-list .new-comment .cancel {
        float:right;
        font-size:16px;
        margin:18px 30px 0 0;
        color:#969696!important;
    }
    .note .post .comment-list .new-comment .cancel:hover {
        color:#333!important;
    }
    .note .post .comment-list .new-comment .btn-send {
        float:right;
        width:78px;
        padding:8px 18px;
        margin:10px 0;
        font-size:16px;
        background:#42c02e;
        border-radius: 20px;
        color:#fff!important;
        box-shadow: none;
    }
    .note .post .comment-list .new-comment .btn-send:hover {
        background:#3db922;
    }
    .note .post .comment-list .new-comment .emoji-modal-wrap .emoji-modal {
        position:absolute;
        top:50px;
        left:-48px;
        width:402px;
        height:208px;
        padding:10px;
        border:1px solid #d9d9d9;
        border-radius:4px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
        background:#fff;
        z-index:10001;
    }
    .arrow-up:after {
        content:'';
        display:inline-block;
        position:absolute;
        left:53px;
        top:-1px;
        width:10px;
        height:10px;
        border-left: 1px solid #d9d9d9;
        border-top: 1px solid #d9d9d9;
        background:#fff;
        transform: translate3d(0,-50%,0) rotate(45deg);
    }
    .note .post .comment-list .normal-comment-list {
        margin-top:30px;
    }
    .note .post .comment-list .top-title {
        padding-bottom:20px;
        border-bottom:1px solid #f0f0f0;
    }
    .note .post .comment-list .top-title span {
        font-size:17px;
        font-weight:700;
    }
    .note .post .comment-list .top-title .author-only {
        font-size:12px;
        padding:4px 8px;
        border:1px solid #e1e1e1;
        border-radius:12px;
        color:#969696!important;
        margin-left:10px;
    }
    .note .post .comment-list .top-title .pull-right a {
        margin-left:10px;
        font-size:12px;
        color:#969696!important;
    }
    .note .post .comment-list .top-title .pull-right a.active {
        color:#2f2f2f!important;
    }
    .note .post .comment-list .comment {
        padding:20px 0 30px 0;
        border-bottom:1px solid #f0f0f0;
    }
    .note .post .comment-list .comment .author {
        margin-bottom:15px;
    }
    .note .post .comment-list .info {
        display:inline-block;
        vertical-align: middle;
    }
    .note .post .comment-list .info .name {
        font-size:15px;
    }
    .note .post .comment-list .info .meta {
        font-size:12px;
        color:#969696;
    }
    .note .post .comment-list .comment p {
        font-size:16px;
        margin:10px 0;
        line-height:1.5;
        word-break: break-word!important;
    }
    .note .post .comment-list .comment .tool-group a {
        color:#969696!important;
        margin-right:10px;
    }
    .note .post .comment-list .comment .tool-group a i {
        font-size:18px;
        margin-right:5px;
    }
    .note .post .comment-list .comment .tool-group a span {
        font-size:14px;
    }
    .note .post .comment-list .sub-comment-list {
        border-left:2px solid #d9d9d9;
        margin-top:20px;
        padding:0 0 0 20px;
    }
    .note .post .comment-list .sub-comment {
        padding-bottom:15px;
        margin-bottom:15px;
        border-bottom:1px dashed #f0f0f0;
    }
    .note .post .comment-list .sub-comment-list .sub-comment:last-child {
        margin: 0;
        padding: 0;
        border: none;
    }
    .note .post .comment-list .sub-comment p {
        font-size:14px;
        line-height:1.5;
        margin-bottom:5px;
    }
    .note .post .comment-list .sub-comment p a {
        color:#3194d0!important;
    }
    .note .post .comment-list .sub-tool-group {
        font-size:12px;
        color:#969696;
    }
    .note .post .comment-list .sub-tool-group a {
        margin-left:10px;
    }
    .note .post .comment-list .sub-tool-group a i {
        margin-right:5px;
    }
    .note .post .comment-list .more-comment {
        font-size:14px;
        color:#969696;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border:none;
    }
    .note .post .comment-list .more-comment a:hover {
        color:#333!important;
    }
    .note .post .comment-list .more-comment i {
        margin-right:5px;
    }
    .note .post .comment-list .sub-comment-list .new-comment {
        margin: 0;
    }
</style>