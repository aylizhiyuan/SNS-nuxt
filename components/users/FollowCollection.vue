<template>
    <div>
        <ul class="user-list">
            <li>
                <nuxt-link class="avatar-collection" to="/collection/123">
                    <img src="~assets/img/book.png">
                </nuxt-link>
                <div class="info">
                    <nuxt-link class="name" to="/collection/123">赏心何止三两枝</nuxt-link>
                    <div class="meta">
                        <a href="/u/123">简书</a>
                        收录了20篇文章,5人关注
                    </div>
                </div>
                <a class="btn btn-success follow">
                    <i class="fa fa-plus-square-o"></i>
                    <span>关注</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"FollowCollection"
    }
</script>