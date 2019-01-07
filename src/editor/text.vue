<template>
    <el-dialog :title="dialog_title" :visible.sync="dialog_form_visible">
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
</template>

<script>
    export default {
        name: "text",
        data() {
            return {
                form:{
                    content: ''
                }
            }
        },
        props:[
            'dialog_title',
            'dialog_form_visible'
        ],
    }
</script>

<style scoped>

</style>