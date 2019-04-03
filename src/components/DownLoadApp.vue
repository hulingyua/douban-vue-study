<template>
    <div class="down_app">
        <div class="info">
            <img src="../assets/douban-app-logo.png" alt="下载豆瓣">
            <div>
                <strong>豆瓣</strong>
                <div>我们美好的精神角落</div>
            </div>
        </div>
        <a href="#">去 App Store 免费下载 iOS 客户端</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .down_app {
        margin-bottom: 4rem;
        .info {
            margin: 2rem 0;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align: left;
            img {
                width: 5rem;
                height: 5rem;
                margin-right: 1rem;
            }
            strong {
                font-size: 2.2rem;
            }
        }
        a {
            font-size: 1.6rem;
            color: rgb(0, 150, 202);
        }
    }
</style>
