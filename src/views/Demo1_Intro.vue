<template>
<div id="demo1">
    <h1>Demo1 v-model</h1>
    <input v-model="massage" type="text" placeholder="Enter your massage">
    <div>{{massage}}</div>
    <button @click="massage = ''">Reset</button>
</div>
</template>

<script>
export default {
    name: "demo1",
    data() {
        return {
            massage: ""
        }
    },
}
</script>

<style>

</style>
