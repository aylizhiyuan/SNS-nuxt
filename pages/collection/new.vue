<template>
    <div>
        <my-header></my-header>
        <div class="new-collection my-container">
            <div class="row">
                <div class="col-9 main" style="margin-left:12.5%">
                    <h3>新建专题</h3>
                    <table>
                        <thead>
                        <tr>
                            <th class="setting-head"></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody class="base">
                        <tr>
                            <td>
                                <div class="avatar-collection"><img src="~assets/img/default-avatar.jpg"></div>
                            </td>
                            <td>
                                <a rel="noreferrer" class="btn btn-hollow">
                                    <input unselectable="on" type="file" class="hide">上传专题封面
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="setting-title">名称</td>
                            <td><input type="text" name="nick-name" placeholder="填写名称，不超过50字"></td>
                        </tr>
                        <tr>
                            <td class="setting-title pull-left setting-input">描述</td>
                            <td><textarea placeholder="填写描述"></textarea></td>
                        </tr>
                        <tr class="add-manager">
                            <td class="setting-title pull-left setting-input">其他管理员</td>
                            <td>
                                <div class="user-add">
                                    <input type="text" name="nick-name" placeholder="输入用户名" data-toggle="dropdown">
                                    <ul class="dropdown-menu"></ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="setting-title setting-verticle">是否允许投稿</td>
                            <td>
                                <div>
                                    <input type="radio" name="push" value="true">
                                    <span>允许</span>
                                    <input type="radio" name="push" value="false">
                                    <span>不允许</span>
                                </div>
                            </td>
                        </tr>
                        <tr class="">
                            <td class="setting-title setting-verticle">投稿是否需要审核</td>
                            <td>
                                <div>
                                    <input type="radio" name="verify" value="true">
                                    <span>需要</span>
                                    <input type="radio" name="verify" value="false">
                                    <span>不需要</span>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="btn btn-success follow create">创建专题</div>
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