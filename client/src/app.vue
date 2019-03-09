<template>
    <div id="app" class="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            data: 1
        };
    },
    methods: {},
    watch: {
        '$route': {
            handler(newData) {
                this.data = newData;
            }
        }
    },
    mounted() {}
};
</script>

<style lang="scss">
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    font-size: 16px;
    color: #5f6368;

    -webkit-text-size-adjust: 100%;
}

body, html, section, article, div, ul, li, h1, h2, h3, h4, h5, p, button {
    margin: 0;
    padding: 0;
    font-weight: normal;
}

button {
    border: 0;
    cursor: pointer;
    outline: none;
    background-color: transparent;
}

li {
    list-style-type: none;
}

a {
    color: #5f6368;
    text-decoration: none;
}

html, body, .app {
    height: 100%;
}

.clear {
    clear: both;
}

</style>
