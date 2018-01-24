<template>
    <div class="sign">
        <!--logo-->
        <div class="logo">
            <nuxt-link to="/">
                <img src="../assets/img/logo.png">
            </nuxt-link>
        </div>
        <!--登录表单-->
        <div class="main">
            <div class="title">
                <h4>
                    <nuxt-link class="active" to="/sign-in">
                        登录
                    </nuxt-link>
                    <b>·</b>
                    <nuxt-link to="/sign-up">
                        注册
                    </nuxt-link>
                </h4>
            </div>
            <div class="js-sign-in">
                <form method="post">
                    <div class="input-prepend">
                        <input type="text" placeholder="手机号或邮箱" value="" name="" class="top-radius">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="input-prepend">
                        <input type="text" placeholder="密码" value="" name="" class="bottom-radius">
                        <i class="fa fa-lock"></i>
                    </div>
                    <div class="remember">
                        <input type="checkbox">&nbsp;
                        <span>记住我</span>
                    </div>
                    <div class="help">
                        <nuxt-link to="/help">
                            登录遇到问题?
                        </nuxt-link>
                    </div>
                    <input class="btn btn-primary" type="button" value="登录">
                </form>
                <div class="more-sign">
                    <p>社交账号登录</p>
                    <ul>
                        <li class="weibo">
                            <a href="#">
                                <i class="fa fa-weibo"></i>
                            </a>
                        </li>
                        <li class="weixin">
                            <a href="#">
                                <i class="fa fa-weixin"></i>
                            </a>
                        </li>
                        <li class="qq">
                            <a href="#">
                                <i class="fa fa-qq"></i>
                            </a>
                        </li>
                        <li class="other">
                            <a href="#">
                                其他
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import 'assets/css/sign.css'
    export default {
        layout:'sign',//指明当前页面所使用的默认模板是layouts文件夹下的sign.vue
        head () {
            return {
                title:"登录-简书",
                meta:[
                    {hide:'description',name:'description',content:'登录页面'}
                ]
            }
        }
    }
</script>
