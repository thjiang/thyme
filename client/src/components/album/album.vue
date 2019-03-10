<template>
    <section class="index-wrap">
        <index-header />
        <main>
            <index-nav />
            <section v-if="imgList.length === 9" class="no-images">
                <img src="http://ssl.gstatic.com/social/photosui/images/empty_state_photos_646x328dp.svg" alt="no-images" width="100%">
                <p>您还没有照片，点击<span> 这里 </span>开始上传</p>
            </section>
            <section v-else class="images-wrap">
                <div v-for="item in imgList" class="img">
                    <img :src="item" width="100%">
                </div>
            </section>
        </main>
    </section>
</template>

<script>
import indexHeader from "../header.vue";
import indexNav from "../nav.vue";

export default {
    data: function() {
        return {
            imgList: []
        };
    },
    mounted() {
        for (let i = 0; i < 9; i++) {
            this.imgList.push(`https://usr.ink/const/thyme/${i + 1}.jpg`);
        }
    },
    components: {
        indexHeader,
        indexNav
    }
};
</script>

<style lang="scss" scoped>
main {
    display: flex;
    justify-content: space-between;
}

</style>
