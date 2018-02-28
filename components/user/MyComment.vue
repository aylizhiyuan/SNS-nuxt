<template>
    <div>
        <ul class="note-list">
            <li>
                <div class="content">
                    <div class="author">
                        <nuxt-link to="/u/123" class="avatar">
                            <img src="~assets/img/default-avatar.jpg">
                        </nuxt-link>
                        <div class="info">
                            <nuxt-link to="/u/123" class="nickname">简宝玉</nuxt-link>
                            <span class="time">5分钟前</span>
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
        </ul>
    </div>
</template>
<script>
    export default {
        name:"MyComment"
    }
</script>