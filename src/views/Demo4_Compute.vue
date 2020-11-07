<template>
<div id="demo4">
    <h2>{{fullname}}</h2>
    <h1 style="background-color: gray;">
        Random No form computed: {{ getrandomno}}
    </h1>
    <h1 style="background-color: gray;">
        Random No form computed: {{ getrandomno}}
    </h1>
    <h1 style="background-color: gray;">
        Random No form computed: {{ getrandomno}}
    </h1>
    <h1>
        Random No form method: {{ getrandomno1() }}
    </h1>
    <h1>
        Random No form method: {{ getrandomno1() }}
    </h1>
</div>
</template>

<script>
export default {
    name: "demo4",
    data() {
        return {
            firstname: "kawinpop",
            lastname: "prammanee"
        }
    },
    methods: {
        getrandomno1: function () {
            return Math.random()
        }
    },
    computed: {
        fullname() {
            return this.firstname + " " + this.lastname
        },
        getrandomno: function () {
            return Math.random()
        }
    }
}
</script>

<style>

</style>
