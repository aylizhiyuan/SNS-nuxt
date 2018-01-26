<template>
    <div>
        <my-header></my-header>
        <div class="index my-container">
            <div class="row">
                <div class="col-8 main">
                    <!--banner-->
                    <div class="banner">
                        <nuxt-link to="/">
                            <img src="../assets/img/banner1.jpg">
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-4 aside">
                    <div class="board">
                        <nuxt-link to="/">
                            <img src="../assets/img/1.png">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/2.png">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/3.png">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/4.png">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/5.png">
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import myHeader from '../components/myHeader'
    export default {
        components:{
            myHeader
        }
    }
</script>