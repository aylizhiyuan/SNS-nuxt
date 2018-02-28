<template>
    <div>
        <my-header></my-header>
        <div class="person my-container">
            <div class="row">
                <div class="col-8 main"></div>
                <div class="col-4 aside">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import myHeader from '~/components/myHeader'
    export default {
        components:{
            myHeader
        }
    }
</script>
<style>

</style>