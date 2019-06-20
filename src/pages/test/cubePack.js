import util from "static/js/util";
function install(Vue) {
    /* loading */
    Vue.prototype.$loading = function(txt='', mask=true) {
        if(typeof(txt)=='boolean'){
            mask = txt;
            txt='';
        }
        const toast = this.$createToast({
            txt,
            mask
        });
        toast.show();
        return toast;
    };
    /* alert弹窗 */
    Vue.prototype.$alert = function(msg) {
        const defaultConf = {
            type: "alert",
            title: "Tip",
            content: msg,
            confirmBtn: {
                text: "Konfirmasi",
                active: true,
                disabled: false,
                href: "javascript:;"
            }
        };
        let config;
        if (typeof msg === "object") {
            config = Object.assign({}, defaultConf, msg);
        } else {
            config = defaultConf;
        }
        this.$createDialog(config).show();
    };

    /* toast弱提示 */
    Vue.prototype.$toast = function(msg, timer = 3000) {
        if (!msg) return false;
        let popDiv = document.createElement("div");
        popDiv.className = "toastPop AnimFadeIn";

        let toastDiv = document.createElement("div");
        toastDiv.className = "toastContent";
        toastDiv.innerHTML = msg;

        popDiv.appendChild(toastDiv);
        document.body.appendChild(popDiv);

        /* 动画结束后执行 */
        const animationEndFn = function(e) {
            const target = e.target,
                classlist = target.classList;
            if (classlist.contains("AnimFadeIn")) {
                classlist.remove("AnimFadeIn");
            } else if (classlist.contains("AnimFadeOut")) {
                toastRemove();
            }
        };
        /* 删除toast */
        const toastRemove = function() {
            popDiv.parentNode.removeChild(popDiv);
            popDiv = null;
            toastDiv = null;
        };
        popDiv.addEventListener("animationend", animationEndFn, false);
        popDiv.addEventListener("webkitAnimationEnd", animationEndFn, false);
        setTimeout(() => {
            popDiv.classList.add("AnimFadeOut");
            setTimeout(() => {
                if (popDiv) toastRemove();
            }, 1000);
        }, timer);
    };

    /* http请求 */
    Vue.prototype.$http = function(opts) {
        const defaultOpts = {
            url: "",
            type: "post",
            dataType: "json",
            data: {}
        };
        return new Promise((resolve, reject) => {
            const ajax = $.ajax(Object.assign({}, defaultOpts, opts));
            ajax.done((data, textStatus, jqXHR) => {
                resolve(data);
            }).fail((jqXHR, textStatus, errorThrown) => {
                reject('Kesalahan data'+' '+errorThrown);
            });
        });
    };
    /** httpcatch请求
     *  和上一个方法的区别是会自动捕获错误，toast提示
     */
    Vue.prototype.$httpCatch = function(opts) {
        const $this = this;
        const defaultOpts = {
            url: "",
            type: "post",
            dataType: "json",
            data: {}
        };
        return new Promise((resolve, reject) => {
            const ajax = $.ajax(Object.assign({}, defaultOpts, opts));
            ajax.done((data, textStatus, jqXHR) => {
                if (data.ret != 0) {
                    let errorInfo = util.serverErrorCode(data.ret, $this.$store.state.wordsInfo);
                    $this.$toast(errorInfo);
                    reject(errorInfo);
                    return false;
                }
                let msg = data.msg;
                try {
                    msg = JSON.parse(msg);
                } catch (error) {
                    console.log(error);
                    return false;
                }
                if (msg.code == "SUCCESS" && msg.result && msg.result.newRet == "OK") {
                    resolve(data);
                } else {
                    let languageErrorCode = util.languageErrorCode(
                        $this.$store.state.languageList,
                        $this.$store.state.lang,
                        msg.result.newRet
                    );
                    if (languageErrorCode == msg.result.newRet) {
                        languageErrorCode = msg.result.newComment;
                    }
                    $this.$toast(languageErrorCode);
                    reject(languageErrorCode);
                }
            }).fail((jqXHR, textStatus, errorThrown) => {
                reject(errorThrown);
            });
        });
    };

    /* bo/call接口封装 */
    Vue.prototype.$bocall = function(opts) {
        if (!opts || !opts.call_bo_url) return false;
        const dataOpts = {
            call_bo_method: 3
        };
        const ajaxOpts = {
            url: window.serverUrl + "/bo/call",
            data: Object.assign({}, dataOpts, opts)
        };
        return new Promise((resolve, reject) => {
            const ajax = this.$http(ajaxOpts);
            ajax.then((data, textStatus, jqXHR) => {
                try {
                    if (data && data.ret == 0) {
                        resolve(JSON.parse(data.msg));
                    } else {
                        reject(data.msg);
                    }
                } catch (error) {
                    reject(error);
                }
            }).catch((jqXHR, textStatus, errorThrown) => {
                reject(errorThrown);
            });
        });
    };

    /**
     *  bo/call接口封装
     * 和 $bocall 接口的区别是会自动提示错误
     */
    Vue.prototype.$bocallCatch = function(opts) {
        if (!opts || !opts.call_bo_url) return false;
        const dataOpts = {
            call_bo_method: 3
        };
        const ajaxOpts = {
            url: window.serverUrl + "/bo/call",
            data: Object.assign({}, dataOpts, opts)
        };
        return new Promise((resolve, reject) => {
            const ajax = this.$http(ajaxOpts);
            ajax.then((data, textStatus, jqXHR) => {
                try {
                    if (data && data.ret == 0) {
                        const res = JSON.parse(data.msg);
                        if (res.code == "SUCCESS" && res.result && res.result.newRet == "OK") {
                            resolve(res.result.context.data);
                        } else {
                            let languageErrorCode = util.languageErrorCode(
                                this.languageList,
                                this.lang,
                                res.result.newRet
                            );
                            if (languageErrorCode != res.result.newRet) {
                                this.$toast(languageErrorCode);
                                reject(languageErrorCode);
                            } else {
                                this.$toast(res.result.newComment);
                                reject(res.result.newComment);
                            }
                        }
                    } else {
                        this.$toast(data.msg);
                        reject(data.msg);
                    }
                } catch (error) {
                    this.$toast(error);
                    reject(error);
                }
            }).catch((error) => {
                this.$toast(error);
                reject(error);
            });
        });
    };
}
export default install;
