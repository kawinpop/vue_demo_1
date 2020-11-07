<template>
<div>
    <h1>Data</h1>
    <button @click="count++">Count++</button>
    <span>{{count}}</span>
    <div>{{massage}}</div>
    <div>{{isLogin}}</div>
    <input type="text" placeholder="Enter massage" v-model="massage">
    <h2 v-if="massage == 'codemobiles'">yahoo</h2>
    <div>{{account.username}} {{account.password}}</div>
    <div>{{courses[0]}}</div>
    <ul>
        <li v-for="(item, index) in courses" :key="index">{{index+1}}. {{item}}</li>
    </ul>
</div>
</template>

<script>
export default {
    name: "Demo3",
    mounted() {
        this.massage = "welcome"
    },
    data() {
        return {
            count: 0,
            massage: "",
            isLogin: false,
            account: {
                username: "admin",
                password: "1234"
            },
            courses: [
                "angular",
                "vueJS",
                "React"
            ]
        }
    },
}
</script>

<style scoped>
li {
    color: red;
}
</style>
