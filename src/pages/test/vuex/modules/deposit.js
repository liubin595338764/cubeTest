const deposit = {
    namespaced: true,
    state: {
        banksList: [],
        payMethodList: []
    },
    mutations: {
        refreshPayMethodList(state, data){
            state.payMethodList = data;
        },
        refreshBankList(state, data){
            state.banksList = data;
        },
    },
    getters: {
        /* 印尼支付通道 使用indon_virtual匹配 */
        indonPayMethod(state) {
            const indonPayMethod = state.payMethodList.find(item=>item.gatewayCode=='indon_virtual');      // 固定取印尼的支付通道
            return indonPayMethod || {};
        }
    }
};
export default deposit;
