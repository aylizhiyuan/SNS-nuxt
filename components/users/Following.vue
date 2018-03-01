<template>
    <div>
        <ul class="user-list">
            <li>
                <nuxt-link class="avatar" to="/u/213">
                    <img src="~assets/img/default-avatar.jpg">
                </nuxt-link>
                <div class="info">
                    <nuxt-link class="name" to="/u/123">天空的影舞者</nuxt-link>
                    <div class="meta">
                        <span>关注 84</span>
                        <span>粉丝 89</span>
                        <span>文章 28</span>
                    </div>
                    <div class="meta">
                        写了54081 字,获得了 181 个喜欢
                    </div>
                </div>
                <a class="btn btn-success follow">
                    <i class="fa fa-plus"></i>
                    <span>关注</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"Following"
    }
</script>