<template>
    <section class="intro-background">
        <section class="intro-wrap">
            <div class="intro">
                <h2 class="title">与世界分享你的美好</h2>
                <a href="/index" class="explore">开始探索</a>
                <div class="advantages">
                    <div class="advantage">
                        <h3>易用</h3>
                        <p>只需一行命令即可部署，免去繁琐的配置</p>
                    </div>
                    <div class="advantage">
                        <h3>灵活</h3>
                        <p>长期维护，持续更新，不断繁荣的生态系统</p>
                    </div>
                    <div class="advantage">
                        <h3>高效</h3>
                        <p>20kB min+gzip 大小带来极致的性能体验</p>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.intro-background {
    width: 100%;
    height: 100%;
    background-image: url('../images/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.intro-wrap {
    display: flex;
    width: 100%;
    height: 100%;
    color: #FFF;
    text-align: center;
    background: rgba(18, 184, 244, .7);

    justify-content: center;
    align-items: center;
    h2, h3, p, div {
        font-weight: 100;
    }
    .intro {
        height: 50%;
        .title {
            font-size: 36px;
            letter-spacing: 5px;
            cursor: pointer;
        }
        .explore {
            display: inline-block;
            margin-top: 48px;
            padding: 12px 30px;
            font-size: 14px;
            color: #FFF;
            border-radius: 4px;
            transition: background-color 300ms ease-out;
            text-decoration: none;
            text-transform: uppercase;
            background-color: #4285F4;
        }
        .explore:hover {
            background-color: #2E6DD3;
        }
        .advantages {
            display: flex;
            width: 600px;
            margin-top: 60px;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: center;
            align-content: stretch;
            .advantage {
                width: 30%;
                cursor: pointer;
                h3 {
                    font-size: 24px;
                }
                p {
                    margin-top: 24px;
                }
            }
        }
    }
}
</style>
