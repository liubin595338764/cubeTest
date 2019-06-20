/**
 * Created by 456 on 2017/6/20.
 */
const _lang = 'INA';

import Vuex from "vuex"
Vue.use(Vuex);
import deposit from './modules/deposit';
let initCompanyInfo = {
    companyid: 0,
    company_token: "",
    company_log_png: "",
    company_log_ico: '',
    company_name_zh_CN: "",
    company_name_zh_TW: "",
    company_name_en_US: " ",
    iosAppDownload: "",
    androidAppDownload: "",
    serverWSUrl: "",
    defaultMessageLang: "",
    appLang: "en",
    customerServiceCompanyId: '',
    customerServiceCompanyToken: '',
};
const store = new Vuex.Store({
    modules:{
        deposit
    },
    state: {
        boLoginInfo: getSessionStorageValue("boLoginInfo", ""),
        loginInfo: getSessionStorageValue("loginInfo", ""),
        companyInfo: getSessionStorageValue("companyInfo", initCompanyInfo),
        /*    lang: getLocalStorageValue("lang",initCompanyInfo.appLang),
         Msglang: getLocalStorageValue("Msglang",initCompanyInfo.defaultMessageLang),*/
        lang: getLocalStorageValue("lang", _lang),
        Msglang: getLocalStorageValue("Msglang", _lang),
        setting: getLocalStorageValue("setting", {
            timeZone: -(new Date().getTimezoneOffset()) / 60,
            orderVoice: "",
            marketModal: "",
            DW: "",
            unit: "2",
            color: "redUp",
            theme: "1"
        }),
        wordsInfo: langInit(initCompanyInfo.appLang),
        platform: "IX",
        proveFileSwitch: "",
        lastLoginInfo: getLocalStorageValue("lastLoginInfo", ""),
        //uuidOb对象的KEY需与基础数据存储对象名相同
        uuidObj: getLocalStorageValue("uuidObj", {
            "account_list": 0,
            "account_group_list": 0,
            "symbolList": 0,
            "symbolCatList": 0,
            "symbolLabelList": 0,
            "languageList": 0,
            "symbolHotList": 0,
            "symbolMarginList": 0,
            "holidayCatList": 0,
            "holidayList": 0,
            "holidayMarginList": 0,
            "scheduleCatList": 0,
            "scheduleList": 0,
            "scheduleMarginList": 0,
            "acGroupSymbolCatList": 0,
            "klineRepairList": 0,
            "symbolSubCatList": 0,
            "symbolSubList": 0,
            "secureDevList": 0,
            "groupSymbolList": 0,
            "groupSymbolCatList": 0,
            "dealList": 0,
            "orderList": 0,
            "positionList": 0,
            "quoteDelayList": 0,
            "eodTimeList": 0
        }),
        account_list: getLocalStorageValue("account_list", []),
        account_liencese_list: getLocalStorageValue("account_liencese_list", []),
        account_group_list: getLocalStorageValue("account_group_list", []),
        symbolList: getLocalStorageValue("symbolList", []),
        symbolCatList: getLocalStorageValue("symbolCatList", []),
        symbolLabelList: getLocalStorageValue("symbolLabelList", []),
        languageList: getLocalStorageValue("languageList", []),
        symbolHotList: getLocalStorageValue("symbolHotList", []),
        symbolMarginList: getLocalStorageValue("symbolMarginList", []),
        holidayCatList: getLocalStorageValue("holidayCatList", []),
        holidayList: getLocalStorageValue("holidayList", []),
        holidayMarginList: getLocalStorageValue("holidayMarginList", []),
        scheduleCatList: getLocalStorageValue("scheduleCatList", []),
        scheduleList: getLocalStorageValue("scheduleList", []),
        scheduleMarginList: getLocalStorageValue("scheduleMarginList", []),
        acGroupSymbolCatList: getLocalStorageValue("acGroupSymbolCatList", []),//right
        klineRepairList: getLocalStorageValue("klineRepairList", []),
        userLoginDataTotal: getLocalStorageValue("userLoginDataTotal", ""),
        symbolSubCatList: getLocalStorageValue("symbolSubCatList", []),
        symbolSubList: getLocalStorageValue("symbolSubList", []),
        secureDevList: getLocalStorageValue("secureDevList", []),
        groupSymbolList: getLocalStorageValue("groupSymbolList", []),
        groupSymbolCatList: getLocalStorageValue("groupSymbolCatList", []),
        dealList: getLocalStorageValue("dealList", []),
        orderList: getLocalStorageValue("orderList", []),
        positionList: getLocalStorageValue("positionList", []),
        quoteDelayList: getLocalStorageValue("quoteDelayList", []),
        eodTimeList: getLocalStorageValue("eodTimeList", []),
        symbolDetail: {deal_status: {}},
        orderResult: {order: {}},
        closeResult: {order: {}},
        submitResult: {order: {}, header: {}},
        orderStatus: getLocalStorageValue("orderStatus", {}),
        currentOrderId: 0,
        quoteWebsocketWS: null,
        quoteInitFlag: true,
        quoteServerTime: 0,
        regParamInfo: getSessionStorageValue("regParamInfo", {}),
        registerType: getSessionStorageValue("registerType", {}),
        userInfo: getSessionStorageValue("userInfo", {}),
        currentBank: null,
        depositObj: {},
        depositUpdate: false,
        payMethod: getSessionStorageValue("payMethod", {}),
        account_isReal: false,
        userType: '',
        companyProperties4Package: null,
        proposalList: [],
    },
    getters:{
        account_liences:(state, getters)=>{
            let account_liences = null,
                account_liencese_list = state.account_liencese_list;
            for(let i=0;i <account_liencese_list.length;i++ ){
              if((!account_liencese_list[i].status ||account_liencese_list[i].status == 0) && account_liencese_list[i].enable ==1){
                account_liences = account_liencese_list[i];
                break;
              }
            }
            return account_liences;
        },
        accountList:(state, getters)=>{
            let loginInfo=state.loginInfo,ac_list = [];
            if (loginInfo && loginInfo != ''&&!window.basicDataIniting) {
            let account_list=state.account_list,account_group_list=state.account_group_list;
            if (account_list && account_group_list) {
                for (let i = 0; i < account_list.length; i++) {
                    let account = account_list[i];
                    if(account.client_type != 1){//not liencese
                        if(account.client_type ==2){//mt4
                            if(!getters.account_liences){
                                continue;
                            }
                        }
                        if((!account.status || account.status ==0) && account.enable ==1){
                            for (let j = 0; j < account_group_list.length; j++) {
                                let group = account_group_list[j];
                                if (account.account_groupid == group.id ) {
                                    if(group.enable == true && (!group.status || group.status == 0) && (!group.client_type || group.client_type==0|| group.client_type==2)){
                                        let isReal = true,type=parseInt(group.type);
                                        if (!group.type || group.type == 0) {
                                            isReal = false;
                                            type = 0;
                                        }
                                        let ac = {
                                            id: account.id, 
                                            currency: group.currency,
                                            account_groupid: account.account_groupid, 
                                            type: type,
                                            isReal: isReal,
                                            client_type: account.client_type ? account.client_type: 0,
                                            ref_accid: account.ref_accid,
                                            balance: account.balance
                                        };
                                        ac_list.push(ac);
                                        if (account.id == loginInfo.account.id) {
                                            loginInfo.account.isReal = isReal;
                                            store.commit('refreshAccountIsReal', isReal);
                                            loginInfo.account.stop_out_level = group.stop_out_level;
                                            loginInfo.account.margin_call_level = group.margin_call_level;
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            }
            return ac_list;
        },
        currencyList:(state, getters)=>{
            let currencyList = [],
                obj, i,
                loginInfo=state.loginInfo,
                account_group_list=state.account_group_list;
            if(loginInfo && account_group_list){
              if(state.userType =="user"){//普通用户
                for(let j=0;j<account_group_list.length;j++){
                  let group = account_group_list[j];
                  if(loginInfo.user.companyid == group.companyid && group.enable==true && (!group.status ||group.status==0) &&(group.type && group.type !=0 &&group.type!=8) &&(!group.client_type || group.client_type==0 || group.client_type==2)&&group.default_type ==1){
                    obj = new Object();
                    obj.groupId = group.id;
                    obj.currency = group.currency;
                    obj.type = group.type;
                    if(group.client_type ==2){
                      obj.client_type = group.client_type;
                    }
                    else{
                      obj.client_type = 0;
                    }
                    for(i =0;i <currencyList.length;i++){
                      if(obj.currency ==currencyList[i].currency && obj.client_type==currencyList[i].client_type && obj.type==currencyList[i].type){
                        break;
                      }
                    }
                    if(i == currencyList.length){
                      currencyList.push(obj);
                    }
                  }
                }
              }
              else if(state.userType =="agent"){//代理用户
                for(let j=0;j<account_group_list.length;j++){
                  let group = account_group_list[j];
                  if(loginInfo.user.companyid == group.companyid && group.enable==true && (!group.status ||group.status==0) &&(group.type &&group.type==8) &&(!group.client_type || group.client_type==0 || group.client_type==2)){
                    obj = new Object();
                    obj.groupId = group.id;
                    obj.currency = group.currency;
                    obj.type = group.type;
                    if(group.client_type ==2){
                      obj.client_type = group.client_type;
                    }
                    else{
                      obj.client_type = 0;
                    }
                    for(i =0;i <currencyList.length;i++){
                      if(obj.currency ==currencyList[i].currency && obj.client_type==currencyList[i].client_type && obj.type==currencyList[i].type){
                        break;
                      }
                    }
                    if(i == currencyList.length){
                      currencyList.push(obj);
                    }
                  }
                }
      
              }
            }
            return currencyList;
        },
        openAccountCurrenyList: (state, getters)=>{
            let list = [],list_mt4=[], j, i,
                currencyList=getters.currencyList,
                accountList=getters.accountList;
            for (j=0;j < currencyList.length;j++) {
                for (i = 0; i < accountList.length; i++) {
                    if(!accountList[i].client_type){
                    accountList[i].client_type =0;
                    }
                    if (currencyList[j].currency == accountList[i].currency && currencyList[j].client_type == accountList[i].client_type && currencyList[j].type == accountList[i].type) {
                    break;
                    }
                }
                if (i == accountList.length) {
                    if(currencyList[j].client_type ==2){//mt4
                    if(getters.account_liences){
                        list_mt4.push(currencyList[j]);
                    }
                    }
                    else{
                    list.push(currencyList[j]);
                    }
                }
            }
            return list.concat(list_mt4);
        },
        accountGroup:(state, getters)=>{
            let accountGroup = {},
                loginInfo=state.loginInfo,
                account_group_list = state.account_group_list,
                group;
            if(loginInfo && account_group_list){
              for(let j=0;j<account_group_list.length;j++){
                group = account_group_list[j];
                if(loginInfo.account.account_groupid == group.id && group.enable==true && (!group.status ||group.status==0)){
                  if(!group.type || group.type==0){
                    store.commit('refreshAccountIsReal', false);
                  }
                  else{
                    store.commit('refreshAccountIsReal', true);
                  }
                  accountGroup = group;
                  break;
                }
              }
            }
            return accountGroup;
        },
        mobileOnlineConfig: (state, getters)=>{
            // BO后台联网属性里面的配置内容
            let data = {};
            if(state.companyInfo && state.companyInfo.mobileOnlineConfig){
                try {
                    data = JSON.parse(state.companyInfo.mobileOnlineConfig);
                } catch (error) {
                    console.log('mobileOnlineConfig', error);
                }
            }
            return data;
        },         
    },
    mutations: {
        refreshCompanyInfo(state, companyInfo){
            state.companyInfo = companyInfo;
            sessionStorage.setItem("companyInfo", JSON.stringify(companyInfo));
        },
        refreshLoginInfo (state, loginInfo) {
            state.loginInfo = loginInfo;
            window.sessionStorage.setItem("loginInfo", JSON.stringify(loginInfo));
        },
        refreshBOLoginInfo (state, boLoginInfo) {
            state.boLoginInfo = boLoginInfo;
            window.sessionStorage.setItem("boLoginInfo", JSON.stringify(boLoginInfo));
        },
        refreshWordsInfo(state, lang){
            state.wordsInfo = langInit(lang);
        },
        refreshLang(state, loadObj){
            state.lang = loadObj.lang;
            try {
                if (loadObj.isStore) {
                    localStorage.setItem("lang", loadObj.lang);
                }
            }
            catch (e) {
                console.log(e.name);
            }
        },
        refreshMsgLang(state, loadObj){
            state.Msglang = loadObj.lang;
            try {
                if (loadObj.isStore) {
                    localStorage.setItem("Msglang", loadObj.lang);
                }
            }
            catch (e) {
                console.log(e.name);
            }
        },
        refreshSetting (state, setting) {
            state.setting = setting;
            localStorage.setItem("setting", JSON.stringify(setting));
        },
        refreshProveFileSwitch(state, switchFlag){
            state.proveFileSwitch = switchFlag;
        },
        /**@payLoad object {proName:"属性名",proValue:"属性值"}
         * state proName需与localstorage proName相同
         * */
        refreshStorageValue(state, payLoad){
            if (payLoad && payLoad.proName && payLoad.proValue) {
                state[payLoad.proName] = payLoad.proValue;
                localStorage.setItem(payLoad.proName, JSON.stringify(payLoad.proValue));
            }
        },
        refreshSymbolDetail(state, data){
            state.symbolDetail = {};
            state.symbolDetail = data;
        },
        refreshOrderVolume(state, data){
            state.symbolDetail.deal_volume = data;
        },
        refreshCloseResult(state, data){
            state.closeResult = data;
        },
        refreshOrderResult(state, data){
            state.orderResult = data;
        },
        refreshSubmitResult(state, data){
            state.submitResult = data;
        },
        getCurrentOrderId(state, data){
            state.currentOrderId = data.symbolid;
        },
        refreshQuoteWebsocketWS(state, data){
            state.quoteWebsocketWS = data;
        },
        refreshQuoteInitFlag(state, data){
            state.quoteInitFlag = data;
        },
        refreshQuoteServerTime(state, data){
            state.quoteServerTime = data;
        },
        refreshRegParamInfo(state, data){
            state.regParamInfo = data;
            sessionStorage.setItem("regParamInfo", JSON.stringify(data));
        },
        refreshRegisterType(state, data){
            state.registerType = data;
            sessionStorage.setItem("registerType", data);
        },
        refreshUserInfo(state, data){
            state.userInfo = data;
            sessionStorage.setItem("userInfo", JSON.stringify(data));
        },
        refreshCurrentBank(state, data){
            state.currentBank = data;
        },
        refreshDepositObj(state, data){
            state.depositObj = data;
        },
        refreshDepositUpdate(state, data){
            state.depositUpdate = data;
        },
        refreshPayMethod(state, data){
            state.payMethod = data;
            sessionStorage.setItem("payMethod", JSON.stringify(data));
        },
        refreshUserType(state, type){
            state.userType = type;
        },
        refreshAccountIsReal(state, type){
            state.account_isReal = type;
        },
        refreshCompanyProperties4Package(state, data){
            if(data) state.companyProperties4Package = data;
        },
        refreshProposalList(state, data){
            state.proposalList = data;
        },
    }
});

export default store; 

function langInit() {
    return require("static/js/lang_INA");
}
/** @pro 属性名
 * @defaultValue 默认值
 * */
function getLocalStorageValue(pro, defaultValue) {
    var dataObj;
    try {
        dataObj = localStorage.getItem(pro) ? JSON.parse(localStorage.getItem(pro)) : defaultValue;//转对象类型
    }
    catch (e) {
        //转对象类弄失败，基本类型
        dataObj = localStorage.getItem(pro) ? localStorage.getItem(pro) : defaultValue;
    }
    return dataObj;

}

/** @pro 属性名
 * @defaultValue 默认值
 * */
function getSessionStorageValue(pro, defaultValue) {
    var dataObj;
    try {
        dataObj = sessionStorage.getItem(pro) ? JSON.parse(sessionStorage.getItem(pro)) : defaultValue;//转对象类型
    }
    catch (e) {
        //转对象类弄失败，基本类型
        dataObj = sessionStorage.getItem(pro) ? sessionStorage.getItem(pro) : defaultValue;
    }
    return dataObj;

}
