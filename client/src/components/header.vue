<template>
    <header class="index-header">
        <button class="header-icon header-show-icon">
            <svg width="24px" height="24px" class="v1262d JUQOtc" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
        </button>
        <div class="logo">
            <img src="../images/logo.png" alt="logo" height="100%">
        </div>
        <div class="options">
            <button class="header-icon header-new-icon">
                <svg width="24px" height="24px" class="v1262d JUQOtc" viewBox="0 0 24 24"><path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path></svg>
            </button>
            <button class="header-icon header-upload-icon">
                <svg width="24px" height="24px" class="v1262d JUQOtc" viewBox="0 0 24 24"><path d="M4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2m4.41-7.59L11 7.83V16h2V7.83l2.59 2.59L17 9l-5-5-5 5 1.41 1.41z"></path></svg>
            </button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.index-header {
    height: 64px;
    padding: 0 30px;
    line-height: 64px;
    .header-icon, .logo, .options {
        display: inline-block;
        cursor: pointer;
        vertical-align: middle;
    }
    .header-icon {
        position: relative;
        width: 48px;
        height: 48px;
        border-radius: 48px;
        transition: background-color 300ms ease-out;
        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .header-icon:hover {
        background-color: #CCC;
    }
    .logo {
        height: 48px;
    }
    .options {
        float: right;
    }
}
</style>
