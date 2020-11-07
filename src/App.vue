<template>
<div>
    <h1>v-model</h1>
    <input v-model="massage" type="text" placeholder="Enter your massage">
    <div>{{massage}}</div>
    <button @click="massage = ''">Reset</button>

    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            massage: ""
        }
    },
}
</script>

<style>

</style>
