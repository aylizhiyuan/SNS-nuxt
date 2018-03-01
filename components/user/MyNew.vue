<template>
    <div>
        <ul class="note-list">
            <!--赞了评论-->
            <li>
                <div class="content">
                    <div class="author">
                        <a class="avatar" href="/users/ff207ae140f1">
                            <img src="~assets/img/default-avatar.jpg">
                        </a>
                        <div class="info">
                        <a class="nickname" href="/u/123">我不是和么</a>
                        <em> · </em>
                        <span class="time"> 赞了评论 · 02.28 11:51</span>
                    </div>
                    </div>
                    <p class="comment">每一份小菜里都是爱😄😄</p>
                    <blockquote>
                        <div class="origin-author single-line">
                            <a href="/u/123">雾锁微澜</a>
                            <span>评论自<a href="/p/123">津味儿炸酱面</a></span>
                        </div>
                    </blockquote>
                </div>
            </li>
            <!--发表了文章带图片-->
            <li class="have-img">
                <nuxt-link class="wrap-img" to="/p/123">
                    <img src="~assets/img/pic.jpg">
                </nuxt-link>
                <div class="content">
                    <div class="author">
                        <nuxt-link class="avatar" to="/u/123">
                            <img src="~assets/img/default-avatar.jpg">
                        </nuxt-link>
                        <div class="info">
                            <nuxt-link to="/u/123" class="nickname">简宝玉</nuxt-link>
                            <span class="time">发表了文章 · 5分钟前</span>
                        </div>
                    </div>
                    <nuxt-link class="title" to="/p/123">
                        提现没有到账怎么办?
                    </nuxt-link>
                    <p class="abstract">

                        提现多久可以到账 简书的提现，一般3个“工作日”会到账，到账后，你可以在支付宝，“我的-账单”里确认，转账方为”上海佰集信息科技有限公司“。 如何在简书内，查看提现是否到账 ...
                    </p>
                    <div class="meta">
                        <nuxt-link class="tag" to="/p/123">
                            <i class="fa fa-eye"></i>
                            100
                        </nuxt-link>
                        <nuxt-link class="tag" to="/p/123">
                            <i class="fa fa-comment"></i>
                            200
                        </nuxt-link>
                        <span>
                            <i class="fa fa-heart"></i>
                            15
                        </span>
                    </div>
                </div>
            </li>
            <!--发表了文章-->
            <li>
                <div class="content">
                    <div class="author">
                        <nuxt-link class="avatar" to="/u/123">
                            <img src="~assets/img/default-avatar.jpg">
                        </nuxt-link>
                        <div class="info">
                            <nuxt-link to="/u/123" class="nickname">简宝玉</nuxt-link>
                            <span class="time">发表了文章 · 5分钟前</span>
                        </div>
                    </div>
                    <nuxt-link to="/p/123" class="title">
                        提现没有到账怎么办?
                    </nuxt-link>
                    <p class="abstract">

                        提现多久可以到账 简书的提现，一般3个“工作日”会到账，到账后，你可以在支付宝，“我的-账单”里确认，转账方为”上海佰集信息科技有限公司“。 如何在简书内，查看提现是否到账 ...
                    </p>
                    <div class="meta">
                        <nuxt-link class="tag" to="/p/123">
                            <i class="fa fa-eye"></i>
                            100
                        </nuxt-link>
                        <nuxt-link class="tag" to="/p/123">
                            <i class="fa fa-comment"></i>
                            200
                        </nuxt-link>
                        <span>
                            <i class="fa fa-heart"></i>
                            15
                        </span>
                    </div>
                </div>
            </li>
            <!--发表了评论-->
            <li>
                <div class="content">
                    <div class="author">
                        <nuxt-link class="avatar" to="/u/123">
                            <img src="~assets/img/default-avatar.jpg">
                        </nuxt-link>
                        <div class="info">
                            <nuxt-link to="/u/123" class="nickname">简宝玉</nuxt-link>
                            <span class="time">发表了评论 · 2018.1.17 14:30</span>
                        </div>
                    </div>
                    <p class="comment">更新了下</p>
                    <blockquote>
                        <nuxt-link to="/p/123" class="title">简书文章代码高亮指南</nuxt-link>
                        <p class="abstract">
                            简书是否支持代码高亮 支持，出于加载速度的考虑，目前仅电脑端网页会展示高亮效果 为什么我写的代码没有高亮 简书的代码高亮，需要指定语言，才能生效 指定语言效果如下 更多关于M...
                        </p>
                        <div class="meta">
                            <div class="origin-author">
                                <nuxt-link to="/u/123">简宝玉</nuxt-link>
                            </div>
                            <nuxt-link class="tag" to="/p/123">
                                <i class="fa fa-eye"></i>
                                1414
                            </nuxt-link>
                            <nuxt-link class="tag" to="/p/123">
                                <i class="fa fa-comment"></i>
                                5
                            </nuxt-link>
                            <span>
                                <i class="fa fa-heart"></i>
                                18
                            </span>
                        </div>

                    </blockquote>
                </div>
            </li>
            <!--关注了作者-->
            <li>
                <div class="content">
                    <div class="author">
                        <nuxt-link to="/u/123" class="avatar">
                            <img src="~assets/img/default-avatar.jpg">
                        </nuxt-link>
                        <div class="info">
                            <nuxt-link to="/u/123" class="nickname">
                                猫左先生
                            </nuxt-link>
                            <span class="time">
                                关注了作者 · 2017.10.22 22:30
                            </span>
                        </div>
                    </div>
                    <div class="follow-detail">
                        <div class="info">
                            <nuxt-link to="/u/123" class="avatar">
                                <img src="~assets/img/default-avatar.jpg">
                            </nuxt-link>
                            <a class="btn btn-success follow">
                                <i class="fa fa-plus-square-o"></i>
                                <span>关注</span>
                            </a>
                            <nuxt-link to="/u/123" class="title">
                                丧心病狂刘老师
                            </nuxt-link>
                            <p>写了390041字,被13963人关注,获得了15462个喜欢</p>
                        </div>
                        <div class="signature">
                            一个不务正业的大学老师o(^o^)o
                            约稿请私信
                            转载及出版事宜请联系我的经纪人bingo_
                            我已委托“维权骑士”（rightknights.com）为我的文章进行维权行动
                        </div>
                    </div>
                </div>
            </li>
            <!--关注了专题-->
            <li>
                <div class="content">
                    <div class="author">
                        <nuxt-link to="/u/123" class="avatar">
                            <img src="~assets/img/default-avatar.jpg">
                        </nuxt-link>
                        <div class="info">
                            <nuxt-link to="/u/123" class="nickname">
                                猫左先生
                            </nuxt-link>
                            <span class="time">
                                关注了专题 · 2017.10.22 22:30
                            </span>
                        </div>
                    </div>
                    <div class="follow-detail">
                        <div class="info">
                            <nuxt-link to="/collection/123" class="avatar-collection">
                                <img src="~assets/img/movie.jpg">
                            </nuxt-link>
                            <a class="btn btn-success follow">
                                <i class="fa fa-plus-square-o"></i>
                                <span>关注</span>
                            </a>
                            <nuxt-link class="title" to="/collection/123">旅行咋路上</nuxt-link>
                            <p>
                                <nuxt-link class="creater" to="/u/123">
                                    简书
                                </nuxt-link>
                                编，92647 篇文章，1703985 人关注
                            </p>
                        </div>
                        <div class="signature">
                            邂逅一座城池，讲述一段故事，分享你的旅行。欢迎来到「旅行·在路上」专题。
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"MyNew"
    }
</script>