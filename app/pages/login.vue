<template>
    <div class="login-page">
        <h1>Login</h1>
    </div>
</template>
<script setup>
    onMounted(async () => {
        try {
        // Check if user is technically authenticated and get their basic info
        const userData = await localforage.getItem('user')
        if (userData) {
            console.log('User data loaded:', userData)
        }
        } catch (error) {
        // If not technically authenticated, redirect to signup
        await navigateTo('/')
        }
    })
</script>