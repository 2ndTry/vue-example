<template>
    <div class="navbar">
        <div>VUE 3 EXAMPLE</div>
        <div class="navbar__btns">
            <MyButton @click="$router.push('/')">Домой</MyButton>
            <MyButton @click="$router.push('/posts')" style="margin-left: 20px">Посты</MyButton>
            <MyButton @click="$router.push('/store')" style="margin-left: 20px">Хранилище</MyButton>
            <MyButton @click="$router.push('/composition')" style="margin-left: 20px">Композиция</MyButton>
            <MyButton @click="$router.push('/about')" style="margin-left: 20px">О сайте</MyButton>
        </div>
    </div>
</template>

<script>
import MyButton from './MyButton.vue';
    export default {
    components: { MyButton }
}
</script>

<style scoped>
    .navbar {
        height: 50px;
        background-color: lightgray;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }
    .navbar__btns {
        margin-left: auto;
    } 
</style>