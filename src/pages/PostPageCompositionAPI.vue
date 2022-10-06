<template>
    <div>
        <h1>Страница с постами</h1>
        <MyInput 
            v-model="searchQuery"
            placeholder="Поиск..."
        />
        <div class="app__btns">
            <MyButton 
            @click="showDialog">
            Создать пост
            </MyButton>
            <MySelect 
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
        <PostList 
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div v-else>Идет загрузка...</div>
        <div v-intersection="loadMorePosts" class="observer"></div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyButton from '@/components/UI/MyButton.vue';
import axios from 'axios';
import MySelect from '@/components/UI/MySelect.vue';
import MyInput from '@/components/UI/MyInput.vue';
import {ref} from 'vue';

export default {
    components: {
    PostForm,
    PostList,
    MyButton,
    MySelect,
    MyInput
},
    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержимому'}
            ]
        }
    },
    setup(props) {

        const {posts, totalPages, isPostsloading} = usePosts(10);
        const {sortedPosts, selectedSort} = useSortedPosts(posts);
        const {searchQuery, useSortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

        return {
            posts,
            totalPages,
            isPostsloading,
            sortedPosts, 
            selectedSort,
            searchQuery,
            useSortedAndSearchedPosts
        }
    }
}
</script>

<style>
    .app__btns {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    }
    .page__wrapper {
        display: flex;
        margin-top: 15px;
    }
    .page {
        border: 1px solid black;
        padding: 5px;
        margin-right: 3px;
    }
    .current-page {
        border: 2px solid teal;
        padding: 5px;
    }
    .observer {
        height: 30px;
        background: green;
    }
</style>