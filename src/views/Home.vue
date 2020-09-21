<template>
    <div class="home">
        <h1>Home</h1>
        <a href="/login">Login</a>
    </div>
</template>

<script>
export default {
    name: 'Home',
    metaInfo: {
        title: 'Vin | Home',
        meta: [
            { name: 'description', content: 'Vin is giving you the ability to track your self-growth, customize dashboard, save sensitive data on our platform and analyze your stats.' },
            { name: 'author', content: 'Vin | AndreasDEV' },
            { name: 'og:title', property: 'og:title', content: 'Vin | Home' },
            { name: 'og:type', property: 'og:type', content: 'website' },
            { name: 'og:description', property: 'og:description', content: 'Vin is giving you the ability to track your self-growth, customize dashboard, save sensitive data on our platform and analyze your stats.' }
        ]
    }
}
</script>