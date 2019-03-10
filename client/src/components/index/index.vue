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

.no-images {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    p {
        margin: 36px 0 8px;
        font-family: 'Google Sans', Roboto, Arial, sans-serif;
        font-size: 1.6rem;
        font-weight: lighter;
        line-height: 2.4rem;
        color: #202124;
        span {
            color: #1a73e8;
            cursor: pointer;
        }
    }
}

.images-wrap {
    width: 100%;
    margin-top: 36px;
    padding-right: 30px;

    column-count: 1;
    column-gap: 0;

    .img {
        padding: 4px;
        box-sizing: border-box;

        break-inside: avoid;
        img {
            display: flex;
            height: auto;
            flex-direction: column;
            box-sizing: border-box;

            justify-content: center;
            align-items: center;
        }
    }
}

@media only screen and (min-width: 480px) {
    .images-wrap {
        column-count: 2;
    }
}

@media only screen and (min-width: 960px) {
    .images-wrap {
        column-count: 3;
    }
    .no-images {
        width: 600px;
    }
}

@media only screen and (min-width: 1920px) {
    .images-wrap {
        column-count: 5;
    }
}

</style>
