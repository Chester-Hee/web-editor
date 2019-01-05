<template>
    <div id="web_editor">
        <div class="editor-handler">
            <a class="J-we-move-up" href="javascript:void(0);"><i class="fa fa-arrow-up"></i> 上移</a>
            <a class="J-we-move-down" href="javascript:void(0);"><i class="fa fa-arrow-down"></i> 下移</a>
            <a class="J-we-usable" href="javascript:void(0);"><i class="fa fa-toggle-on"></i> 启用</a>
            <a class="J-we-edit-item" href="javascript:void(0);" @click="dialogFormVisible = true"><i class="fa fa-pencil-square-o"></i> 编辑</a>
        </div>

        <el-dialog title="" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="内容修改" >
                    <el-input autocomplete="off" v-model="form.content"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Vue from 'vue';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.use(ElementUI);

    export default {
        name: "web_editor",
        data() {
            return {
                dialogFormVisible: false,
                form:{
                    content:''
                }
            }
        },
        props:[
            'title'
        ]
    }
</script>

<style scoped>

</style>