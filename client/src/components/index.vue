<template>
    <section class="index-wrap">
        <index-header />
        <main>
            <index-nav />
            <section class="images-wrap">
                <div v-for="item in imgList" class="img">
                    <img :src="item" width="100%">
                </div>
            </section>
        </main>

    </section>
</template>

<script>
import indexHeader from "./header.vue";
import indexNav from "./nav.vue";

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
.images-wrap {
    width: 100%;
    margin-top: 36px;
    padding-right: 30px;
    column-count: 2;
    column-gap: 0;
    
    .img {
        box-sizing: border-box;
        break-inside: avoid;
        padding: 10px;
        img {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            // padding: 10px;
            height: auto;
            box-sizing: border-box;
        }
    }
}

@media only screen and (min-width: 960px) {
    .images-wrap {
        column-count: 3;
    }
}

@media only screen and (min-width: 1366px) {
    .images-wrap {
        column-count: 4;
    }
}
</style>
