<template>
    <div>
        <ul class="emojiTab">
            <li v-for="(pannel,index) in pannels" @click="changeActive(index)" :class="{active:index == activeIndex}">
               {{pannel}}
            </li>
        </ul>
        <ul class="emojiTabContent">
            <li v-for="(emojiGroup,index) in emojis" :key="index" v-if="index == activeIndex">
                <a href="javascript:void(0)" v-for="(emoji,index) in emojiGroup" :key="index" @click="selectItem(emoji)">
                    <span :class="'sprite-' + getPureName(emoji)"></span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    import data from '~/static/emoji-data.js'
    export default {
        name:'vueEmoji',
        data () {
            return {
                emojiData:data,
                pannels:['表情','自然','物品','地点','符号'],
                activeIndex:0
            }
        },
        methods:{
            changeActive:function(index){
                this.activeIndex = index;
            },
            getPureName:function(name){
                return name.replace(/:/g,'');
            },
            selectItem:function(emoji){
                this.$emit('select',emoji);
            }
        },
        computed:{
            emojis:function(){
                return this.pannels.map(item=>{
                    return Object.keys(this.emojiData[item]);
                })
            }
        },
        mounted:function(){

        }
    }
</script>
<style>
    @import '../assets/css/emoji-sprite.scss';
    .emojiTab {
        height:36px;
        overflow:hidden;
        margin-bottom:0;
    }
    .emojiTab li {
        float: left;
        width: 76px;
        font-size: 12px;
        line-height: 36px;
        cursor: pointer;
        text-align: center;
        position: relative;
    }
    .emojiTab li.active::after{
         content: '';
         width: 100%;
         height: 1px;
         background: #0689dd;
         left: 0;
         bottom: 4px;
         position: absolute;
    }
    .emojiTabContent {
        height: 140px;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
    }
    .emojiTabContent li {
        font-size: 0;
        padding: 5px;
    }
    .emojiTabContent li a {
        float: left;
        overflow: hidden;
        height: 35px;
        transition: all ease-out .2s;
        border-radius: 4px;
    }
    .emojiTabContent li a:hover {
        background-color: #d8d8d8;
        border-color: #d8d8d8;
    }
    .emojiTabContent li a span {
        width: 25px;
        height: 25px;
        display: inline-block;
        border: 1px solid transparent;
        cursor: pointer;
    }
</style>