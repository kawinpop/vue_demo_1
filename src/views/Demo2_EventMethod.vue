<template>
<div app="demo2">
    <h1>Event and Method</h1>
    <button v-on:click="clickMe">clickMe1</button>
    <button v-on:click="clickMe2('welcome')">clickMe2</button>
    <button @click="clickMe2('welcome to codemobile')">clickMe3</button>
    <h3>{{gettimestamp()}}</h3>
</div>
</template>

<script>
export default {
    name: "Demo2",
    mounted() {
        this.initial()
    },
    methods: {
        initial() {
            console.log("initial")
        },
        clickMe() {
            alert("hi")
        },
        clickMe2(massage) {
            alert(massage)
        },
        gettimestamp() {
            return Date()
        }
    },
}
</script>

<style>

</style>
