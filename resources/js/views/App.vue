<template>
    <div class="main">
        <Navbar/>
        <section class="section">
            <div class="container">
                <router-view/>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';

    export default {
        name: "App",

        components: {
            Navbar,
            Footer
        }
    }
</script>

<style scoped>
    .main {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    .section {
        flex: 1;
    }
</style>
