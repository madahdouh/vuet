<template>
    <p>All of your components html goes inside these template tags</p>
</template>

<script>
    // All of your components JS code lives within this section
    // we can still do things such as `import lib from 'lib'` should we wish
    export default {
        name: "simple-component",
        data() {
            return {
                msg: "My Profile Component"
            };
        }
    };
</script>

<style scoped>
    p {
        background-color: blue;
    }
</style>