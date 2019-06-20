<template>
    <div id="app">
        <!-- <router-view ref="page" @sendMessage="sendMessage" @sendRealTime="sendRealTime" @sendUserLoginData="sendUserLoginData" @closeWebsocket="closeWebsocket" @login="login" @BOLogin="BOLogin" @refreshCompanyInfo="refreshCompanyInfo"></router-view> -->
        <div class="mtop">
            <cube-select class="cellMTop" v-model="result.statement" title=" " :placeholder="PleaseSelect" :confirmTxt="ConfirmText" :cancelTxt="CancelText" :options="statementOpts"></cube-select>
        </div>
    </div>
</template>

<script>

const PleaseSelect = "Silakan pilih";
const CancelText = "Membatalkan";
const ConfirmText = "Memastikan";
export default {
    name: "app",
    data() {
        return {
            websocketWS: "",
            CancelText,
            ConfirmText,
            PleaseSelect,
            deviceInfo: 'deviceInfo',
            statementOpts: [{ text: "Ya", value: true }, { text: "Tidak", value: false }],
            result:{
                statement:''
            }
        };
    },
};
</script>

<style lang="scss">
html {
    font-size: 10vw;
}
html,
body {
    font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
    -webkit-overflow-scrolling: touch;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #4c6072;
    height: 100%;
    overflow-y: visible;
    overflow-x: hidden;
    font-size: 14px;
    &:empty::after{
        content: "\e643";
        font-family: "iconfont" !important;
        position: absolute;
        width: 20px;
        height: 20px;
        left: 50%;
        right: 50%;
        top: 40%;
        font-size: 20px;
        transform: translate3d(-50%, 50%,0);
        will-change: transform;
        animation: loading 1.5s linear infinite;
    }
}
</style>
