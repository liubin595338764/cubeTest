/**
/**
 * Created by 456 on 2017/6/9.
 */
window.marketName={
  "0":"enSH", // 沪股 SH
    "1":"enSZ", // 深股 SZ
    "2":"enHK", // 港股 HK
    "3":"enSF", // 上海股指期货--没用
    "4":"enSC", // 上海商品--没用
    "5":"enDC", // 大连商品--没用
    "6":"enZC", // 郑州商品--没用
    "7":"enGW", // 盖威全市场--没用
    "8":"enFX", // 外汇 FX
    "9":"enUS", //美股 US
    "10":"enPM", //贵金属 PM
    "11":"enIND", //指数 IND
    "12":"enFUT",//期货 FUT
    "13":"enCRYPTO",//数字货币
    "100":""
};
//默认人类名称
window.defalMarketName = "OTH";
window.symLabelColor =["#4886C9", "#EBAD62", "#4886C9", "#4886C9", "#4886C9", "#4886C9", "#4886C9", "#4886C9",
  "#4886C9", "#4886C9", "#4886C9", "#4886C9", "#4886C9", "#4886C9", "#4886C9", "#4886C9"];

window.quoteServerTimeFlag = true;
window.pbkey="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHM9qA9gJoKc7XgXeaO3qrio3fP2KvNeOeLl4uivL7I7yrhkoQ3Y9hxXcP+x7asA6+Cztu6hle2z5DyAG2usMIsilzpOpiW9DaSeA/sdgPR9RaJBGxCk9tt3Jq9qh90kT5x+z8rQh1LcLeY6Wk5RIhAMOw4PaDeD21ucvBQ7D8+QIDAQAB";
window.prKey="MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAJ6v/7EwJXWq0vkh3LX9LDdBbP+/UqYNo8GVcVDeWK9DUfMaoihUehiFsIO3e54HWmtlPsMTiNCMQ1MTNkjMNiXR9uP7HPM6b2YWNdNld7Ql4gs+Uvm0VEvPhJ9KvJuddiUIbNEZ+0xu1xaxd2/WEt+l3K923PMEfCMR29RRYN8lAgMBAAECgYAHeOYjY87/wXF5xbxs3WUNnQkS6eFsbEv/u5fAZRfr+NGNDv3/xCqTqQfsy+EISfRaBkR0TyEsIM6yxL7ToroR7tJ7txik1+kqetIx2FXIXwzkBnLsOzvs5wIWX7QcaO4qs9paCIoENX/b+kR9Qns6fJVoe89rFDcl8+C+pSzuAQJBANZqOLjDa7FSz6yJpeFZsNxPfzEnXzpQprvzwZXqLabjDkBvg/JNi4Wr/Qbiv5w6K2+KDJSa5zIEN/U3ZU2RN+UCQQC9duPem5EcxXO9EdNh+HVdYITOYKNsOwwyAuXacYdC2HhVwWrHckum9uG+c4ulJm+KcrwAS8LaFNsZbqKepBZBAkEA1cHf+pMYchfU4nX34cnBAGJgs2hFD6YIE6jXfdWQ3afPNX33VUDpr8He51Z3IBD97Jz8HcqwYrTB9L3dSI9V4QJBAJT6Aztq/7Or3tHwTlJe14pQ9pyAiH/1/iTk+m/FjSIWrKhhqeCiErJ6tg7XNBrsGhC3HvTsnY51j8JzqBMt2wECQQCcbA1I8EFlrjYvN8PMKz/2t9aqkdV6UEkFoXlvYKPykcMFZi6MytNnWA5xxBDYjhakjyxMjJqktVtzNtxxRN+4";
window.emailReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
window.kType = {
  MIN_1:0,
  MIN_5:1,
  HOUR_1:2,
  DAY:3,
  MIN_15:4,
  MIN_30:5,
  HOUR_4:6,
  WEEK:3,
  MONTH:3
}
window.basicDataIniting = false;//基础数据是否初始化----登录和切换账户时需置为true
window.account_type={
  0:"virtuals",
    1:"standard",
    2:"mini",   //bingo
    3:"manager",
    4:"turnover",
    5:"room",
    6:"diamond",
    8:"agent"
};
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 function dateFormat(date,fmt)
{
  if(!date) return "";
  var o = {
    "M+" : date.getMonth()+1,                 //月份
    "d+" : date.getDate(),                    //日
    "h+" : date.getHours(),                   //小时
    "m+" : date.getMinutes(),                 //分
    "s+" : date.getSeconds(),                 //秒
    "q+" : Math.floor((date.getMonth()+3)/3), //季度
    "S"  : date.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}
/**四舍五入转化为指定小数位数，不足补0
 * @num number 转换的数
 * @pNum int 小数点的位数
 */
function decimalPoint(num,pNum){
  if(num !=undefined && num !=null && pNum != undefined && pNum != null ){
    var rNum = parseFloat(num).toFixed(pNum).toString();//四舍五入返回指定位数小数，不补0
    var numArr =  rNum.split("."),pidx =0;
    if(numArr.length >1){
      pidx = numArr[1].length;
    }
    else{
      rNum +=".";
    }
    for(var i = pidx;i<pNum;i++){
      rNum +="0";
    }
    return rNum;
  }
  else {
    return num;
  }
}


/**
 * 去请求url后的参数
 */
function getRequest2(){
  var url = window.location.search; //获取url中"?"符及其后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

/**
 * 去请求url后的参数
 */
function getRequest(){
  var url = window.location.hash; //获取url中"?"符及其后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(url.indexOf("?")+1);
    var strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
//得到对应语言的字段名
function getLangPro(lang){
  var name = "";
  switch(lang){
    case "zh_TW":
    {
      name = "nameTW";
      break;
    }
    case "zh_CN":
    {
      name = "nameCN";
      break;
    }
    case "en_US":
    {
      name = "nameEN";
      break;
    }
    default :{
      name = "nameEN";
    }
  }
  return name;
}
//印尼语暂时用英文显示
function getLang(lang) {
  if(lang == 'INA'){
    return 'en_US';
  }else{
    return lang;
  }
}

/*
@eMsg string
*/
function requestError (eMsg) {
  var message="";
  var lang = localStorage.getItem('lang');
  if(!lang){
    lang =JSON.parse(sessionStorage.getItem('companyInfo')).appLang;
  }
  try{
    var eMsgObj = JSON.parse(eMsg);
    if(eMsgObj.result && eMsgObj.result.constructor ==String && eMsgObj.result!=""){
      message = eMsgObj.result;
    }
    else if(eMsgObj.result && eMsgObj.result.constructor == Object){
      message = eMsgObj.result.newComment || (eMsgObj.result.error?eMsgObj.result.error.message:'');
    }
  }
  catch(e) {
    message = eMsg;
  }
  finally{
    if(!message || message==""){
      if(lang == 'INA'){
        message = "Kesalahan jaringan";
      }else{
        message = "NetWork Error";
      }
    }
    $('#errorModal .modal-title').html(message);
    $('#errorModal').modal({
      keyboard: true
    });
  }
}

function serverErrorCode(ret,wordsInfo){
  var msg = wordsInfo.request_error;
  switch(ret){
    case -1:{
      msg="not login";
      break;
    }
    case 1:{
      msg=wordsInfo.system_error;
      break;
    }
    case 2:{
      msg=wordsInfo.param_error;
      break;
    }
    case 3:{
      msg=wordsInfo.invaild_param;
      break;}
    case 4:{
      msg=wordsInfo.session_error;
      break;
    }
    case 5:{
      msg=wordsInfo.none_get_code;
      break;
    }
    case 6:{
      msg=wordsInfo.code_no_valid;
      break;
    }
    case 7:{
      msg=wordsInfo.request_error;
      break;
    }
    case 10:{
      msg=wordsInfo.login_tip9;
      break;
    }
    default:{
    }
  }
  return msg;
}

function languageErrorCode(languageList,lang,result){
  var errorTip = result;
  if(lang == 'INA'){
    lang = 'en_US';
  }
  for (var j = 0; j < languageList.length; j++) {
    if (result == languageList[j].name_space && languageList[j].country == lang) {
      errorTip = languageList[j].value;
      break;
    }
  }
  return errorTip;
}
function Base64(imgFile, imgId, width, height,fileSize,message){
    this.imgFile = imgFile;
    this.width = width || 200;
    this.height = height || 200;
    this.fileSize =fileSize&&fileSize<5?fileSize:5 ;//最大5M
    var filePath = this.imgFile.value;
    if(!filePath || filePath==""){return;}
  // 定义方法
    var pattern = /(\.*.jpg$)|(\.*.png$)|(\.*.jpeg$)|(\.*.gif$)|(\.*.bmp$)/;
    if(!pattern.test(filePath)) {
      requestError(message.img_file);
      this.imgFile.focus();
    }else {
      try {
        //判断浏览器类型
        if (document.all && !imgFile.files) {
          //兼容IE6-IE9
        /*  var fileSystem = new ActiveXObject("Scripting.FileSystemObject");//浏览器需允许ActiveXObject访问
          var file = fileSystem.GetFile(filePath);
          if (this.fileMaxsize(file, this.fileSize, message)) {
            //this.ieBase64(imgFile, document.getElementById(imgId), this.width, this.height, message);
          }
          else {
            this.imgFile.value = "";
          }*/
        } else {
          //兼容主流浏览器,包括IE10
          if (this.fileMaxsize(this.imgFile.files[0], this.fileSize, message)) {
            //this.mainBase64(imgFile, document.getElementById(imgId), this.width, this.height, message);
          }
          else {
            this.imgFile.value = "";
          }
        }
      }
      catch(e){
        requestError(message.filereader_no);
      }
    }

  };
  Base64.prototype = {
    fileMaxsize:function(file,fileSize,message){
      var size =  file.size/ 1024;
      var filemaxsize = 1024*fileSize;
      if(size>filemaxsize){
        requestError(message.max+fileSize+"M！");
        return false;
      }
      else if(size==0){
        requestError(message.min+"0M！");
        return false;
      }
      return true;
    },
    ieBase64: function(imgFile, imgDom, width, height,message){//IE6-9
      var realPath, xmlHttp, xml_dom, tmpNode, imgBase64Data;
      realPath = imgFile.value;//获取文件的真实本地路径.
      xmlHttp = new ActiveXObject("MSXML2.XMLHTTP");
      xmlHttp.open("POST",realPath, false);//允许访问后，本地页面访问IE6-IE9支持；服务器访问需 -IE/Internet 选项/安全/Internet/自定义级别/通过域访问数据源/启用
      xmlHttp.send("");
      xml_dom = new ActiveXObject("MSXML2.DOMDocument");
      tmpNode = xml_dom.createElement("tmpNode");
      tmpNode.dataType = "bin.base64";
      tmpNode.nodeTypedValue = xmlHttp.responseBody;
      imgBase64Data = "data:image/bmp;base64," + tmpNode.text.replace(/\n/g,"");
      imgDom.src=imgBase64Data;//渲染图片
      $(imgFile).parent().find('.remove').css({display:'block'})
    },
    mainBase64: function(imgFile, imgDom, width, height,message){
      var file=imgFile.files[0],fileReader, imgData;
      fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = function () {
        imgData = this.result; //base64数据
        imgDom.src = imgData; //渲染图片
        $(imgFile).parent().find('.remove').css({display:'block'})
      }
    }
  }

function severBase64(formId,ImgMsg){
  var defer = $.Deferred();
  $("#"+formId).ajaxForm({
    url:window.serverUrl+"/picture_proc",
    dataType:"json",
    success:function(data){
      try{
        if(data.ret ==0 && data.base64){
            defer.resolve(data.base64)
        }
        else if(data.ret ==11){
          defer.reject(ImgMsg.max+"5M");
        }
        else if(data.ret==12){
          defer.reject(ImgMsg.min+"0M");
        }
        else{
          defer.reject(ImgMsg.error);
        }
      }
      catch(e){
        defer.reject(ImgMsg.error);
      }
    },
    error:function (XMLHttpRequest, textStatus, errorThrown) {
      defer.reject(ImgMsg.excp);
    }
  }).submit();
  return defer;
}

//得到上传文件id
function　getUploadFiledId(fileType,boLoginInfo){
  var id="",customerInfoFileParams = boLoginInfo.user.result.result.customerInfoFileParams;
  for(var i=0;i<customerInfoFileParams.length;i++){
    if(fileType == customerInfoFileParams[i].fileType){
      id = customerInfoFileParams[i].id;
      break;
    }
  }
  return id;
}
function  ajaxFormUploadFile(dom,boLoginInfo,ImgMsg){
  var defer = $.Deferred();
  $(dom).parent("form").ajaxSubmit({
    url:window.serverUrl+"/upload_file_new",
    type:"post",
    dataType:"json",
    success:function(data){
      var fileNames = $(dom).val().split("\\");
      var file;
      try{
        if(data.ret ==0 && data.msg && JSON.parse(data.msg).code=="SUCCESS" && JSON.parse(data.msg).result && JSON.parse(data.msg).result.newRet=="OK"){
          var msg = JSON.parse(data.msg),fileName = dom.id;
          file = {};
          if(fileName.includes('_up')){
              fileName = fileName.replace('_up','');
          }
          file.filePath = msg.result.context.data.fileStorePath;
          file.ftpFilePath = msg.result.context.data.webFilePath;
          file.fileName =fileNames[fileNames.length-1];
          file.fileType = fileName;
          file.gts2CustomerId = boLoginInfo.gts2CustomerId;
          file.id = getUploadFiledId(file.fileType,boLoginInfo);
          defer.resolve(file);
        }
        else if(data.ret ==11){
          defer.reject(ImgMsg.max+"5M");
        }
        else if(data.ret==12){
          defer.reject(ImgMsg.min+"0M");
        }
        else{
          defer.reject(data.msg);
        }
      }
      catch(e){
        defer.reject(data.msg);
      }
    },
    error:function (XMLHttpRequest, textStatus, errorThrown) {
      defer.reject(textStatus);
    }
  });
  return defer;
}


//单个文件上传,ajax base64
 function uploadFile(domArrs,boLoginInfo){
   var defer = $.Deferred();
   var files=[],dom,img_id,fileNames,file;
   for(var i=0;i<domArrs.length;i++){
     dom = domArrs[i];
     img_id = dom.id+"_img";
     fileNames = $(dom).val().split("\\"),fileStr =$("#"+img_id).attr("src") ,fileStrStartIdx = fileStr.indexOf("base64,");
     $.ajax2(window.serverUrl+"/upload_file",{
       type:"post",
       data:{companyId:boLoginInfo.companyId,fileName:fileNames[fileNames.length-1],fileStr:fileStr.substring(fileStrStartIdx+"base64,".length)},
       success:function(data){
         try{
           if(data.ret ==0 && data.msg && JSON.parse(data.msg).code=="SUCCESS" && JSON.parse(data.msg).result && JSON.parse(data.msg).result.newRet=="OK"){
             var msg = JSON.parse(data.msg);
             file = {};
             file.filePath = msg.result.context.data.fileStorePath;
             file.ftpFilePath = msg.result.context.data.webFilePath;
             file.fileName =fileNames[fileNames.length-1];
             file.fileType = dom.id;
             file.gts2CustomerId = boLoginInfo.gts2CustomerId;
             file.id = getUploadFiledId(file.fileType,boLoginInfo);
             files.push(file);
             if(files.length==domArrs.length){
               defer.resolve(files);
             }
           }
           else{
             defer.reject(data.msg);
           }
         }
         catch (e){
           defer.reject(data.msg);
         }

       },
       error:function (XMLHttpRequest, textStatus, errorThrown) {
         defer.reject(textStatus);
       }
     });
   }
   return defer;
 }

//单个文件上传,ajax base64
function uploadImage(res,imgId,boLoginInfo){
    var defer = $.Deferred(),file;
    $.ajax2(window.serverUrl+"/upload_image",{
        type:"post",
        data:{companyId:boLoginInfo.companyId,fileName:res.origin.name,fileStr:res.base64},
        success:function(data){
            try{
                if(data.ret ==0 && data.msg && JSON.parse(data.msg).code=="SUCCESS" && JSON.parse(data.msg).result && JSON.parse(data.msg).result.newRet=="OK"){
                    var msg = JSON.parse(data.msg);
                    file = {};
                    file.filePath = msg.result.context.data.fileStorePath;
                    file.ftpFilePath = msg.result.context.data.webFilePath;
                    file.fileName =res.origin.name;
                    file.fileType = imgId;
                    file.gts2CustomerId = boLoginInfo.gts2CustomerId;
                    file.id = getUploadFiledId(file.fileType,boLoginInfo);
                    defer.resolve(file);
                }
                else{
                    defer.reject(data.msg);
                }
            }
            catch (e){
                defer.reject(data.msg);
            }

        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            defer.reject(XMLHttpRequest);
        }
    });
    return defer;
}

function updateCustomerFiles(files,boLoginInfo){
  var defer = $.Deferred();
  $.ajax2(window.serverUrl+"/update_customer_files",{//更新对应上传文件信息
    type:"post",
    data:{companyId:boLoginInfo.companyId,gts2CustomerId:boLoginInfo.gts2CustomerId,files:JSON.stringify(files),isAutoApprove:true},
    success:function(data){
      try{
        if(data.ret ==0 && data.msg && JSON.parse(data.msg).code == "SUCCESS" && JSON.parse(data.msg).result&& JSON.parse(data.msg).result.newRet=="OK"){
          var customerInfoFileParams = boLoginInfo.user.result.result.customerInfoFileParams, i, j,pro;
          for(i=0;i <files.length;i++)
          {
            for(j=0;j<customerInfoFileParams.length;j++){
              if(files[i].fileType == customerInfoFileParams[j].fileType){
                for(pro in files[i]){
                  customerInfoFileParams[j][pro] = files[i][pro];
                }
                break;
              }
            }
          }
          window.localStorage.setItem("boLoginInfo",JSON.stringify(boLoginInfo));
          defer.resolve();
        }
        else{
          defer.reject(data.msg);
        }
      }
      catch (e){
        defer.reject(data.msg);
      }

    },
    error:function (XMLHttpRequest, textStatus, errorThrown) {
      defer.reject(textStatus);
    }
  });
  return defer;
}


function input_placeHolder_init(){
  /*input占位符*/
  $('.input-element input').focusin(function(){
    $(this).parent().addClass('active');
    $(this).parent().removeClass('input_active');
  });
  $('.input-element input').blur(function(){
    if(!$(this).val().length > 0) {
      $(this).parent().removeClass('input_active');
      $(this).parent().removeClass('active');
    }
    else{
      $(this).parent().addClass('input_active');
    }
  });
  $('.input-element label,.input-element input').on('click',function(){
    $(this).parent().addClass('active');
    $(this).parent().removeClass('input_active');
  });
}
/*******格式化金额**********/
function outputMoney(s,n) {
  if (!s || s == "") return '0.00';
  try{
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    if(s=="NaN"){
      return "";
    }
  }
  catch(e) {
   return "";
  }

  var l = s.split(".")[0].split("").reverse(),
    r = s.split(".")[1];
  var t = "";
  for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  if(n){
    n = n > 0 && n <= 20 ? n : 2;
    /*带小数*/
    return t.split("").reverse().join("") + "." + r;
  }else{
    /*不带小数*/
    return t.split("").reverse().join("");
  }
}

function disabledStyleBtn(selector){
  $(selector).css({opacity:'0.65'});
}

function unDisabledStyleBtn(selector){
  $(selector).css({opacity:'1'});
}

function disabledBtn(selector){
  $(selector).attr("disabled",true);
  disabledStyleBtn(selector);
}

function unDisabledBtn(selector){
  $(selector).attr("disabled",false);
  unDisabledStyleBtn(selector);
}
/*Number.prototype.toFixed=function(len)
{
  var add = 0;
  var s,temp;
  var s1 = this + "";
  var start = s1.indexOf(".");
  if(s1.substr(start+len+1,1)>=5)add=1;
  var temp = Math.pow(10,len);
  s = Math.floor(this * temp) + add;
  return s/temp;
}*/
/***********************************/
/**
 * 得到账户组对应的权限列表
 * @account_groupid int 账户组id
 * @acGroupSymbolCatList Array 产品分类与产品权限列表
 * **/
function getAccountRight(account_groupid,acGroupSymbolCatList){
  var accountRight = [];
  for(var j=0;j<acGroupSymbolCatList.length;j++){
    if(acGroupSymbolCatList[j].account_groupid == account_groupid && (!acGroupSymbolCatList[j].status ||acGroupSymbolCatList[j].status==0)&&
      (!acGroupSymbolCatList[j].type ||acGroupSymbolCatList[j].type==0)){
      accountRight.push(acGroupSymbolCatList[j]);
    }
  }
  return accountRight;
}
/**
 * 得到父级分类
 *@cateId int 分类id
 * @symcatList Array 产品分类列表
 * @status  bool 是否需要判断状态
 * **/
function getParentSymbolCat(catId,symcatList,status){//
  var symbolCat=null;
  for(var i=0;i<symcatList.length;i++){
    if(catId == symcatList[i].id ){
      if(!symcatList[i].status || symcatList[i].status==0){
        if(!symcatList[i].parentid || symcatList[i].parentid==0){//1 level
          if(status){
            if(symcatList[i].marketid !=100){
              symbolCat = symcatList[i];
            }
          }
          else{
            symbolCat = symcatList[i];
          }
        }
        else{
          if(status){
            if(symcatList[i].marketid ==100){
              return symbolCat;
            }
          }
          symbolCat =getParentSymbolCat(symcatList[i].parentid,symcatList,false);//父分类不需要判断marketid
        }
      }
      break;
    }
  }
  return symbolCat;
}
/**
 * 得到分类下的子分类id
 * @cateid int 分类id
 * @symcatList Array 分类列表
 * **/
function getSymbolCateChildrenIds(cateid, symcatList){
  var childIds = {};
  for(var i=0;i<symcatList.length;i++){
    if(cateid==symcatList[i].parentid && (!symcatList[i].status || symcatList[i].status == 0)&& symcatList[i].marketid !=100){
      childIds[symcatList[i].id]=symcatList[i].id;
    }
  }
  return childIds;
}
/**
 * 得到分类下的产品列表
 * @cateids object 分类ids
 * @symbolList Array 产品列表
 * **/
function getSymbolList(cateids,symbolList){
  var syList = [];
  for(var j=0;j < symbolList.length;j++){
    if(cateids[symbolList[j].symbol_cataid] &&(!symbolList[j].status || symbolList[j].status==0) && symbolList[j].enable == true){
      syList.push(Object.assign({},symbolList[j]));
    }
  }
  return syList;
}

/**
 * 得到账户产品分类
 * @account Object 账户组id
 * @acGroupSymbolCatList Array 产品分类与产品权限列表
 * @symcatList Array 产品分类列表
 * @symbolList Array 产品列表
 * **/
function getAccountSymbolCate(account,acGroupSymbolCatList,symcatList,symbolList,symbolHotList,companyid,symbolSubList){
  var accountRight = getAccountRight(account.account_groupid,acGroupSymbolCatList),symbolCatList = [],hotCateSymbol=[],hotCate={id:0},mySubSymbol=[],mySubCate={id:-1},cateids;
  if(accountRight.length==0){//no right limit
    for(var w=0;w <symcatList.length;w++){
      if((!symcatList[w].status || symcatList[w].status==0) && symcatList[w].marketid !=100){
        if(!symcatList[w].parentid || symcatList[w].parentid==0){ //show 1 level
          cateids =getSymbolCateChildrenIds(symcatList[w].id,symcatList);//子分类
          cateids[symcatList[w].id] = symcatList[w].id;//包含自己
          //对应分类下的产品
          symbolCatList.push(Object.assign({"symbolList": getSymbolList(cateids,symbolList)},symcatList[w]));
        }
        //热门分类产品
        var i, t,r;
        for(i=0;i<symbolList.length;i++){
          if(symbolList[i].symbol_cataid ==symcatList[w].id && symbolList[i].enable == true && (!symbolList[i].status || symbolList[i].status==0)){
            for (t = 0; t < symbolHotList.length; t++) {
              if ( symbolList[i].id == symbolHotList[t].symbolid && symbolHotList[t].companyid == companyid && (!symbolHotList[t].status || symbolHotList[t].status == 0)) {
                hotCateSymbol.push(Object.assign({},symbolList[i]));
                break;
              }
            }
            for(r =0;r < symbolSubList.length;r++){
              if(symbolSubList[r].accountid == account.id && (!symbolSubList[r].status || symbolSubList[r].status == 0)&& symbolList[i].id==symbolSubList[r].symbolid){
                mySubSymbol.push(Object.assign({symSubId:symbolSubList[r].id},symbolList[i]));
                break;
              }
            }
          }
        }
      }
    }
  }
  else{//right limit
    var symCat,syList, j, t, r,k1,k;
    for(var i=0;i<accountRight.length;i++){
      syList=[];
      if(!accountRight[i].symbol_cataid ||accountRight[i].symbol_cataid==0){ //symbol right
        if(accountRight[i].symbolid && accountRight[i].symbolid != 0){//judge symbol right
          for(j=0;j < symbolList.length;j++){
            if(accountRight[i].symbolid==symbolList[j].id){
              if( (!symbolList[j].status || symbolList[j].status==0) && symbolList[j].enable == true){
                symCat =getParentSymbolCat(symbolList[j].symbol_cataid,symcatList,false);//产品正常，分类需要判断status , 不需要判断marketid
                if(symCat){
                  syList.push(Object.assign({},symbolList[j]));//分类下的产品
                  //热门产品
                  for (t = 0; t < symbolHotList.length; t++) {
                    if ( symbolList[j].id == symbolHotList[t].symbolid && symbolHotList[t].companyid == companyid && (!symbolHotList[t].status || symbolHotList[t].status == 0)) {
                      hotCateSymbol.push(Object.assign({},symbolList[j]));
                      break;
                    }
                  }
                  for(r =0;r < symbolSubList.length;r++){
                    if(symbolSubList[r].accountid == account.id && (!symbolSubList[r].status || symbolSubList[r].status == 0)&& symbolList[j].id==symbolSubList[r].symbolid){
                      mySubSymbol.push(Object.assign({symSubId:symbolSubList[r].id},symbolList[j]));
                      break;
                    }
                  }
                }
              }
              break;
            }
          }
        }
      }
      else{//symbol cat right
        symCat =getParentSymbolCat(accountRight[i].symbol_cataid,symcatList,true);//分类需判断status与marketid!=100,父分类不需要判断marketid
        if(symCat){
          for(k1=0;k1 < symbolList.length;k1++){
            if((!symbolList[k1].status || symbolList[k1].status==0) && symbolList[k1].enable == true &&accountRight[i].symbol_cataid == symbolList[k1].symbol_cataid){
              syList.push(Object.assign({},symbolList[k1]));
              //热门产品
              for (t = 0; t < symbolHotList.length; t++) {
                if ( symbolList[k1].id == symbolHotList[t].symbolid && symbolHotList[t].companyid == companyid && (!symbolHotList[t].status || symbolHotList[t].status == 0)) {
                  hotCateSymbol.push(Object.assign({},symbolList[k1]));
                  break;
                }
              }
              for(r =0;r < symbolSubList.length;r++){
                if(symbolSubList[r].accountid == account.id && (!symbolSubList[r].status || symbolSubList[r].status == 0)&& symbolList[k1].id==symbolSubList[r].symbolid){
                  mySubSymbol.push(Object.assign({symSubId:symbolSubList[r].id},symbolList[k1]));
                  break;
                }
              }
            }
          }
        }
      }
      if(symCat){
        for(k=0;k<symbolCatList.length;k++){//判断是否存在同样分类
          if(symbolCatList[k].id == symCat.id){
            if(symbolCatList[k].symbolList && syList.length >0){
              for(var k2=0;k2<syList.length;k2++){
                symbolCatList[k].symbolList.push(syList[k2]);//对应分类下的产品
              }
            }
            break;
          }
        }
        if(k==symbolCatList.length){//不存在同样分类
          symCat.symbolList = syList;
          symbolCatList.push(Object.assign({},symCat));//对应分类
        }
      }
    }
  }
  hotCate.symbolList = hotCateSymbol;
  symbolCatList.splice(0,0,hotCate);
  mySubCate.symbolList = mySubSymbol;
  symbolCatList.splice(0,0,mySubCate);
  return symbolCatList;
}

function add(a, b) {
  var c, d, e;
    try {
      c = parseFloat(a).toString().split(".")[1].length;
    } catch (f) {
      c = 0;
    }
    try {
      d = parseFloat(b).toString().split(".")[1].length;
    } catch (f) {
      d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}

function sub(a, b) {
  var c, d, e;
    try {
      c = parseFloat(a).toString().split(".")[1].length;
    } catch (f) {
      c = 0;
    }
    try {
      d = parseFloat(b).toString().split(".")[1].length;
    } catch (f) {
      d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
}

function mul(a, b) {
  var c = 0,
      d = parseFloat(a).toString(),
      e = parseFloat(b).toString();
    try {
      c += d.split(".")[1].length;
    } catch (f) {}
    try {
      c += e.split(".")[1].length;
    } catch (f) {}
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}
function div(a, b) {
  var c, d, e = 0, f = 0;
    try {
      e = parseFloat(a).toString().split(".")[1].length;
    } catch (g) {}
    try {
      f = parseFloat(b).toString().split(".")[1].length;
    } catch (g) {}
    return c = Number(parseFloat(a).toString().replace(".", "")), d = Number(parseFloat(b).toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}
/*****取余*****/
function Rem(a,b) {
    var  d;
    try {
        if(b.toString().indexOf('.') != -1){
            d = parseFloat(b).toString().split(".")[1].length;
        }else{
            d = 0;
        }
    } catch (f) {
        d = 0;
    }
   return mul(parseFloat(a) , Math.pow(10,d)) % mul(parseFloat(b) , Math.pow(10,d)) ;

}


function isOutVolumeSection(isChange,dealMount,requestVolume,unit,contractSizeNew,volumeMax,volumeMin,volumeStep) {
    var volumeCur=0; //当前数量
    if(unit == '2' && contractSizeNew){
        volumeMax = mul(contractSizeNew,volumeMax);
        volumeMin = mul(contractSizeNew,volumeMin);
        volumeStep = mul(contractSizeNew,volumeStep);
    }
    if(!isChange){
        if(unit == '2' && contractSizeNew){
            volumeCur = mul(contractSizeNew,dealMount);
        }else{
            volumeCur = parseFloat(dealMount);
        }
    }else{
        if(unit == '2' && contractSizeNew){
            volumeCur = mul(contractSizeNew,requestVolume);
        }else{
            volumeCur = parseFloat(requestVolume);
        }
    }
     if(isNaN(volumeCur)){ return true;}
     if(volumeCur > volumeMax || volumeCur < volumeMin || (Rem(volumeCur,volumeStep) !=0 && volumeCur!=volumeMin)){
         return true;
     }else{
         return false;
     }
}

/**
 * 得到产品区间
 * **/
function getSection(level,digits) {
    if(!level){
        level = 1;
    }
  return  parseFloat(level/Math.pow(10,digits));
}
/**
 * 得到顶层价格
 * @isBid 是否为卖出价
 * @digits 小数位数
 * **/
function getFirstPrice(tickDeep,isBid,digits) {
  if(tickDeep){
      if(isBid){
        return parseFloat(decimalPoint(tickDeep[0].price_bid/Math.pow(10,digits),digits));
      }else{
        return parseFloat(decimalPoint(tickDeep[0].price_ask/Math.pow(10,digits),digits));
      }
  }
}
/**
 * 得到流通量价格
 * @volume 数量
 * @tickDeep 深度
 * @isBid 是否是买
 * @digits 小数位数
 * @return 平均价
 * **/
function getTurnPrice(volume,tickDeep,isBid,digits) {
    var turnPrice=0,volumeSum= 0,i;
    if(tickDeep){
        if(isBid){
            for(i =0;i < tickDeep.length;i++){
                if(volume == ''){
                    volume = tickDeep[0].volume_bid/10000;
                }
                if(volume - volumeSum <=(tickDeep[i].volume_bid/10000)){
                    turnPrice += tickDeep[i].price_bid*(volume - volumeSum);
                    volumeSum += volume - volumeSum;
                    break;
                }
                else{
                    turnPrice += tickDeep[i].price_bid*(tickDeep[i].volume_bid/10000);
                    volumeSum += (tickDeep[i].volume_bid/10000);
                }
            }
            if(isNaN(volumeSum)){  //流通量为0的时候取厅层价
                return tickDeep[0].price_bid/Math.pow(10,digits);
            }
            //超过最大部分
            if(volume - volumeSum > 0){
                turnPrice += (volume - volumeSum)*tickDeep[tickDeep.length-1].price_bid;
            }
        }
        else{
            for(i =0;i < tickDeep.length;i++){
                if(volume == ''){
                    volume = tickDeep[0].volume_ask/10000;
                }
                if(volume - volumeSum <=(tickDeep[i].volume_ask/10000)){
                    turnPrice += tickDeep[i].price_ask*(volume - volumeSum);
                    volumeSum += volume - volumeSum;
                    break;
                }
                else{
                    turnPrice += tickDeep[i].price_ask*(tickDeep[i].volume_ask/10000);
                    volumeSum += (tickDeep[i].volume_ask/10000);
                }
            }
            if(isNaN(volumeSum)){  //流通量为0的时候取厅层价
                return tickDeep[0].price_ask/Math.pow(10,digits);
            }
            //超过最大部分
            if(volume - volumeSum > 0){
                turnPrice += (volume - volumeSum)*tickDeep[tickDeep.length-1].price_ask;
            }
        }

        turnPrice = parseFloat(turnPrice/(volume*Math.pow(10,digits)));

    }
    return  turnPrice;
}


/**
 * 得到价格区间
 * @dealType 订单类型
 * @direction 方向
 * @ask  顶层买入价
 * @bid  顶层卖出价
 * @maxSec  最大区间
 * @minSec  最小区间
 * @digits  小数位
 * @isMin   是否为最小值
 * **/

function getPriceSection(dealType,direction,ask,bid,maxSec,minSec,digits,isMin) {
  if(dealType == '2'){
    if(direction == 1){
      if(isMin){
        return decimalPoint(sub(ask, maxSec),digits);
      }else{
        return decimalPoint(sub(ask , minSec),digits);
      }
    }else{
      if(isMin){
        return decimalPoint(add(bid , minSec),digits);
      }else{
        return decimalPoint(add(bid , maxSec),digits);
      }
    }
  }else if(dealType == '3'){
    if(direction == 1){
      if(isMin){
        return decimalPoint(add(ask ,minSec),digits);
      }else{
        return decimalPoint(add(ask, maxSec),digits);
      }
    }else{
      if(isMin){
        return decimalPoint(sub(bid ,maxSec),digits);
      }else{
        return decimalPoint(sub(bid ,minSec),digits);
      }
    }
  }
}
/**
 * 得到价格区间
 * @dealType 订单类型
 * @direction 方向
 * @dealPrice    订单价格
 * @dealPrice_limit  限价订单价格
 * @maxSec  最大区间
 * @minSec  最小区间
 * @digits  小数位
 * @isMin   是否为最小值
 * **/

function getYinSection(dealType,direction,dealPrice,dealPrice_limit,maxSec,minSec,digits,isMin) {
  var dealPrice = parseFloat(dealPrice);
  var dealPrice_limit = parseFloat(dealPrice_limit);
  if(direction == 1){
    if(dealType == '1' || !dealType){
      if(isMin){
        return decimalPoint((dealPrice + minSec),digits);
      }else{
        return decimalPoint((dealPrice + maxSec),digits);
      }
    }else{
      if(isMin){
        return decimalPoint((dealPrice_limit + minSec),digits);
      }else{
        return decimalPoint((dealPrice_limit + maxSec),digits);
      }
    }
  }else{
    if(dealType == '1' || !dealType){
      if(isMin){
        return decimalPoint((dealPrice - maxSec),digits);
      }else{
        return decimalPoint((dealPrice - minSec),digits);
      }
    }else{
      if(isMin){
        return decimalPoint((dealPrice_limit - maxSec),digits);
      }else{
        return decimalPoint((dealPrice_limit - minSec),digits);
      }

    }
  }
}

function getSunSection(dealType,direction,dealPrice,dealPrice_limit,maxSec,minSec,digits,isMin) {
  var dealPrice = parseFloat(dealPrice);
  var dealPrice_limit = parseFloat(dealPrice_limit);
  if(direction == 1){
    if(dealType == '1' || !dealType){
      if(isMin){
        return decimalPoint((dealPrice - maxSec),digits);
      }else{
        return decimalPoint((dealPrice - minSec),digits);
      }
    }else{
      if(isMin){
        return decimalPoint((dealPrice_limit - maxSec),digits);
      }else{
        return decimalPoint((dealPrice_limit - minSec),digits);
      }
    }
  }else{
    if(dealType == '1' || !dealType){
      if(isMin){
        return decimalPoint((dealPrice + minSec),digits);
      }else{
        return decimalPoint((dealPrice + maxSec),digits);
      }
    }else{
      if(isMin){
        return decimalPoint((dealPrice_limit + minSec),digits);
      }else{
        return decimalPoint((dealPrice_limit + maxSec),digits);
      }
    }
  }
}
/**
 * 下拉区间
 * @isUp 上面的下拉区间
 *
 * **/
function getSectionDown(maxPrice,minPrice,digits,isUp) {
  var maxPrice = parseFloat(maxPrice);
  var minPrice = parseFloat(minPrice);
  if(isUp){
    return decimalPoint(((maxPrice-minPrice)/3 + minPrice),digits);
  }else{
    return decimalPoint(((maxPrice-minPrice)*2/3 + minPrice),digits);
  }
}
function outRangePrice(dealPrice_limit,maxPrice,minPrice) {
  var dealPrice_limit = parseFloat(dealPrice_limit);
  var maxPrice = parseFloat(maxPrice);
  var minPrice = parseFloat(minPrice);
  if(isNaN(dealPrice_limit)
    ||(dealPrice_limit > maxPrice || dealPrice_limit < minPrice)
  ){
    return true;
  }else{
    return false;
  }
}
//手数小数位
function lotDigits(volumeStep) {
  var stepLen = 2,step;
  if(volumeStep){
    step = volumeStep.toString();
    if(step.indexOf('.')>=0 && step.split('.')[1].split('').length>1){
      stepLen = step.split('.')[1].length;
    }
  }
  return stepLen;
}

//格式化小数位  不足2位补0
function formatDigits(num) {
    var digit;
  if(num){
    if(typeof num != "string"){
      num = num.toString();
    }
    if( num.indexOf('.')>0){
        digit = num.split('.')[1].split('').length;
      if(digit < 2){
        return parseFloat(num).toFixed(2);
      }else if(digit > 8){
        return parseFloat(num).toFixed(6);
      }
      else{
        return num;
      }
    }else{
      return parseFloat(num).toFixed(2);
    }
  }
  return num;
}



/******************************/
/**点差和
 * @sp1 int 当前账户组点差
 * @groupSymbolSpread array current accountgroup groupSymbolList
 * @symbolid int 当前产品的id
 * */
function spreadSum(sp1,groupSymbolSpread,symbolid){
  var sp2 =0;
  for(var i=0;i < groupSymbolSpread.length;i++){
    if(groupSymbolSpread[i].symbolid ==symbolid){ //当前产品的id
      sp2 = groupSymbolSpread[i].spread;
      break;
    }
  }
  return sp1+sp2;

}
/**深度价+点差
 * @tick_deep array 五层深度
 * @spread_sum int 点差和
 * return array
 * **/
function priceSpread(tick_deep,spread_sum){
    var s_tick_deep=[],obj,price_bid,price_ask,average,refreshSpd = false,askSpd,bidSpd;
    if(tick_deep && tick_deep.length>0){
        for(var i=0;i < tick_deep.length && i <5;i++){
            obj = {};
            price_bid =tick_deep[i].price_bid;
            price_ask =tick_deep[i].price_ask;
            if(refreshSpd){
                obj.price_bid = price_bid - bidSpd;
                obj.price_ask = price_ask + askSpd;
            }else{
                if(0 == spread_sum % 2){
                    obj.price_bid = price_bid - (spread_sum/2);
                    obj.price_ask = price_ask + (spread_sum/2);
                }
                else{
                    obj.price_bid = price_bid - (spread_sum+1)/2;
                    obj.price_ask = price_ask + (spread_sum-1)/2;
                }
            }
            //偏移校正
            if(obj.price_ask < obj.price_bid){
                average = (obj.price_ask + obj.price_bid)/2;
                obj.price_bid = obj.price_ask = average;
                askSpd = price_ask - average;
                bidSpd = average - price_bid;
                refreshSpd = true;
            }
            obj.volume_bid = tick_deep[i].volume_bid;
            obj.volume_ask = tick_deep[i].volume_ask;
            s_tick_deep.push(obj);
        }
    }
    return s_tick_deep;
}



function getSymbolCat(symCatId,symbolCatList){
  var symCat = null;
  for (var i = 0; i < symbolCatList.length; i++) {
    if (symCatId == symbolCatList[i].id) {
      if(!symbolCatList[i].status || symbolCatList[i].status == 0){
        symCat = symbolCatList[i];
      }
      break;
    }
  }
  return symCat;
}

/**产品交易状态
 * @s 对象类型
 * @holidayCatList array
 * @holidayList array
 * @scheduleCatList array
 * @scheduleList array
 * */
function  ValidateSchedule(s,holidayCatList,holidayList,scheduleCatList,scheduleList,serverTime,groupSymbolList,accountGroup) {//symbol status
  if (!s) {
    return {comment: "symbol isn't exist", ok: 0};
  }
  if(serverTime==undefined || serverTime==null){
    return {comment: "serverTime isn't exist", ok: 0};
  }
  if (s) {
    //server time is GMT+0
    var tnow = new Date(serverTime*1000),second = serverTime;
      /***********产品到期优先取groupSymbol的到期时间*************/
      if(groupSymbolList && groupSymbolList.length > 0 && accountGroup){
          for(var i=0;i < groupSymbolList.length;i++) {
              var GS = groupSymbolList[i];
              if(s.id == GS.symbolid && GS.account_groupid== accountGroup.id &&(!GS.status || GS.status==0)){
                  if(GS.expiry_time && second > GS.expiry_time){
                      return {comment: "expiry_time", ok: 2};
                  }
                  break;
              }
          }
      }
      if(s.expiry_time && second > s.expiry_time){
             return {comment: "expiry_time", ok: 2};
      }
      /********************************/
    var holidayCataid = s.holiday_cataid, scheduleCataid = s.schedule_cataid, id = s.id, scheduleDelayMinutes = s.schedule_delay_minutes?s.schedule_delay_minutes:0;
    var ihc,isHoliday=false,iholiday;
    for (var i = 0; i < holidayCatList.length; i++) {
      if (holidayCataid == holidayCatList[i].id) {
        ihc = holidayCatList[i];
        break;
      }
    }
    if (ihc) {
      if (!ihc.status || ihc.status == 0) { //判断是否在假期中
        for (var i = 0; i < holidayList.length; i++) {
          if (holidayList[i].holiday_cataid == holidayCataid && (!holidayList[i].status || holidayList[i].status == 0) &&
            holidayList[i].enable == true &&second >= parseInt(holidayList[i].from_time ? holidayList[i].from_time : 0) &&
            second <parseInt(holidayList[i].totime ? holidayList[i].totime : 0)) {
            iholiday = holidayList[i];
            isHoliday = true;
            break;
          }
        }
      }
    }
    if(!s.tradable || s.tradable==0){
      return {comment: "isn't tradable", ok: 0,isHoliday:isHoliday};
    }
    if(iholiday){
      if((!iholiday.tradable || iholiday.tradable == false)){
        return {comment: "symbol " + id + " is in holiday time", ok: 3,isHoliday:isHoliday};
      }
    }
    /////
    var weekday_now = tnow.getUTCDay(), minute_now = tnow.getUTCMinutes(), hour_now = tnow.getUTCHours(),
      nminutes = parseInt(hour_now * 60 + minute_now), start_time_db, end_time_db, weekday_db, isc;
    for (var i = 0; i < scheduleCatList.length; i++) {
      if (scheduleCatList[i].id == scheduleCataid) {
        isc = scheduleCatList[i];
        break;
      }
    }
    if (isc) {
      var picked_schedules = [];
      if (!isc.status || isc.status == 0) {
        for (var i = 0; i < scheduleList.length; i++) {
          if (scheduleList[i].schedule_cataid == scheduleCataid && (!scheduleList[i].status || scheduleList[i].status == 0) &&
            scheduleList[i].enable == 1 && (!scheduleList[i].non_tradable || scheduleList[i].non_tradable == 0)) {
            picked_schedules.push(scheduleList[i]);
          }
        }
      }
      for (var i = 0; i < picked_schedules.length; i++) {
        start_time_db = picked_schedules[i].start_time?picked_schedules[i].start_time:0 + scheduleDelayMinutes;
        end_time_db = picked_schedules[i].end_time?picked_schedules[i].end_time:0 + scheduleDelayMinutes;
        weekday_db = picked_schedules[i].day_of_week?picked_schedules[i].day_of_week:0;
        if (weekday_now == weekday_db) {
          if (nminutes >= start_time_db && nminutes < end_time_db) {
            return {comment: "symbol " + id + " is in schedule time", ok: 1,isHoliday:isHoliday}
          }
          continue;
        }
        var t1;
        if (weekday_now > 0) {
          t1 = weekday_now - 1;
        } else {
          t1 = 6;
        }
        if (t1 == weekday_db) {
          if (((nminutes + 1440) >= start_time_db) && ((nminutes + 1440) < end_time_db)) {
            return {comment: "symbol " + id + " is in schedule time", ok: 1,isHoliday:isHoliday};
          }
          continue;
        }
        var t2;
        if (weekday_now < 6) {
          t2 = weekday_now + 1;
        } else {
          t2 = 0;
        }
        if (t2 == weekday_db) {
          if ((nminutes - 1440) >= start_time_db && (nminutes - 1440) < end_time_db) {
            return {comment: "symbol " + id + " is in schedule time", ok: 1,isHoliday:isHoliday};
          }
          continue;
        }
      }
    }
    return {comment: "symbol " + id + " is not in schedule time", ok: 0,isHoliday:isHoliday};
  }
}

//深度流通量换算
function deepCount(deep) {
  if (!deep) {
    deep = 0;
  }
  else {
    deep = deep / 10000;
  }
  if (deep >= Math.pow(10, 9)) {
    deep = decimalPoint((deep / Math.pow(10, 9)), 1) + "G";
  }
  else if (deep >= Math.pow(10, 6)) {
    deep = decimalPoint((deep / Math.pow(10, 6)), 1) + "M";
  }
  else if (deep >= Math.pow(10, 3)) {
    deep = decimalPoint((deep / Math.pow(10, 3)), 1) + "K";
  }
  else {
    deep = decimalPoint(deep, 1);
  }
  return deep;
}


/**************k线**********************/
/* MA 计算*/
function calculateMA(dayCount, data,digits) {
  if(!data) return [];
  var result = [],sum, i, j,len;
  for (i = 0, len = data.length; i < len; i++) {
    if (i < dayCount-1) {
      result.push('-');
      continue;
    }
     sum = 0;
    for (j = 0; j < dayCount; j++) {
      sum += parseFloat(data[i - j][1]);
    }
    result.push(decimalPoint((sum / dayCount),digits));
  }
  //console.log(new Date().getTime());
  return result;
}

/* 分时均线 计算*/
function calculateAverage(data,digits) {
  if(!data) return [];
  var result = [],ave = 0;
  for (var i = 0, len = data.length; i < len; i++) {
    ave = add(data[i][2],data[i][3])/2;
    result.push(decimalPoint(ave,digits));
  }
  return result;
}
function getMA(subList,m) {
  var sum = 0;
  for (var k=0;k< subList.length;k++) {
    sum = add(sum,subList[k]) ;
  }
  return sum / m;
}
function getMD(subList,ma,m) {
  var sum = 0;
  for (var k=0;k< subList.length;k++) {
    sum += Math.pow((subList[k] - ma),2);
  }
  return Math.sqrt(sum / m);
}
//计算最大值最小值
function getMIKE(highList,lowList) {
  var result=[];
  result[0] = Math.min.apply(null,lowList);
  result[1] = Math.max.apply(null,highList);
  return result;
}
//指数移动平均
function getEMA(x,n,perY) {
  return (2 * x + (n - 1) * perY) / (n + 1);
}

function getPBX(sub1List,sub2List,sub4List,perClose,n) {
  //console.log(sub1List,sub2List,sub4List,perClose,n);
  var close, IA1 = 0, MA2, MA4,i;
  // 求M1日指数移动平均
  for (i = 0; i < sub1List.length; i++) {
    close = sub1List[i];
    if (i == 0) {
      IA1 = perClose;
    } else {
      IA1 = getEMA(close, n, IA1);
    }
   // perClose = IA1;
  }
  // 求M1*2简单移动平均
  MA2 = getMA(sub2List, 2 * n);
  // 求M1*4简单移动平均
  MA4 = getMA(sub4List, 4 * n);
  return (IA1 + MA2 + MA4) / 3.0;
}

function getSMA(X,N,M,perValue) {
  return (X * M + perValue * (N - M)) / N;
}
function getARBR(subList) {
   var K_ARBR_P = 100,result = [0,0];
   var sumOpenHigh = 0, sumOpenLow = 0, sumCloseHigh = 0, sumCloseLow = 0, high = 0, low = 0, open = 0, perClose;
   for (var i = 1; i < subList.length; i++) {
    high = subList[i][3];  // 最高价
    low = subList[i][2];    // 最低价
    open = subList[i][0];  // 开盘价
    perClose = subList[i - 1][1];

    sumOpenHigh += (high - open);
    sumOpenLow += (open - low);
    sumCloseHigh += (high - perClose);
    sumCloseLow += (perClose - low);
  }
  result[0] = (sumOpenHigh / sumOpenLow) * K_ARBR_P;
  result[1] = (sumCloseHigh / sumCloseLow) * K_ARBR_P;
  return result;
}
function calcPtSMAValue(ptValueList) {
  var total = 0;
  if (ptValueList == null || ptValueList.length == 0) {
    return 0;
  }
  for (var i = 0;i<ptValueList.length;i++) {
    total += ptValueList[i];
  }
  return total / ptValueList.length;
}

function calcPtMAEValue(ptValueList,ptAvgValue) {
  var total = 0;
  if (ptValueList == null || ptValueList.length == 0) {
    return 0;
  }
  for (var i = 0;i<ptValueList.length;i++) {
    total += Math.abs(ptValueList[i] - ptAvgValue);
  }
  return total / ptValueList.length;
}

function calcCCIValue(ptValue,ptMAEValue,ptAvgValue) {
  if (ptMAEValue == 0) {
    return 0.0;
  }
  return (ptValue - ptAvgValue) / (ptMAEValue * 0.015);
}
function getATR(subList,m) {
  var curHigh = 0,curLow = 0, preClose = 0,trSum = 0,result = [],atr = 0,tr,tr1, tr2, tr3;
  for(var i=0;i<subList.length;i++){
    curHigh = subList[i][3];
    curLow = subList[i][2];
     if(i==0){
       preClose = subList[i][1];
     }else{
       preClose = subList[i-1][1];
     }
    tr1 = Math.abs(sub(curHigh , curLow));
    tr2 = Math.abs(sub(preClose, curHigh));
    tr3 = Math.abs(sub(preClose ,curLow));
    tr = Math.max(Number.MIN_VALUE,tr1,tr2,tr3);
    trSum += tr;
  }
  atr = trSum / m;
  result[0] = tr;
  result[1] = atr;
  return result;
}

function getBIAS(subList,close,n) {
  var  ma,bias,closeAll = [];
  for(var i=0;i<subList.length;i++) {
    closeAll.push(subList[i][1]);
  }
  ma = getMA(closeAll, n);
  bias = (close - ma) / ma * 100;
  return bias;
}

function getQHL5(subList) {
   var d, qhl5 = 0, a = 0, b = 0,sum = 0,sum1 = 0,sum2 = 0;
   var K_QHLSR_N1 = 5;
  for (var i = 0; i < subList.length; i++) {
    a += (subList[i] > 0) ? subList[i] : 0;
    b += (subList[i] < 0) ? subList[i] : 0;
  }
  sum = (a + Math.abs(b));
  if (sum != 0) {
    d = a / sum;
  } else {
    d = a;
  }
  for (var j = 0; j < K_QHLSR_N1; j++) {
    sum1 += (subList[j] > 0) ? 1 : 0;
    sum2 += (subList[j] < 0) ? 1 : 0;
  }
  qhl5 = (sum1 == K_QHLSR_N1) ? 1 : ((sum2 == K_QHLSR_N1) ? 0 : d);
  return qhl5;
}

function getQHL10(subList) {
  var K_QHLSR_N2 = 10;
  var g, e = 0, f = 0, qhl10,sum;
  for (var n = 0; n < K_QHLSR_N2; n++) {
    e += (subList[n] > 0) ? subList[n] : 0;
    f += (subList[n] < 0) ? subList[n] : 0;
  }
  sum = (e + Math.abs(f));
  if (sum != 0) {
    g = e / sum;
  } else {
    g = e;
  }
  qhl10 = g;
  return qhl10;
}

function getWR(subList,close) {
  var maxprice = Number.MIN_VALUE,minprice = Number.MAX_VALUE,high,low;
  for(var k=0;k < subList.length;k++){
    high = subList[k][3];
    low = subList[k][2];
    if(high > maxprice){
      maxprice = high;
    }
    if(low < minprice){
      minprice = low;
    }
  }
  return 100 * sub(maxprice , close) / sub(maxprice ,minprice);
}
/* BBI 计算*/
function calculateBBI(start,oneScreenNum,data,digits) {
  var K_BBI1 = 3,K_BBI2 = 6,K_BBI3 = 12,K_BBI4 = 24;
  var result = [],bbi1price = 0,bbi2price = 0,bbi3price = 0,bbi4price = 0,entitys=[],closeAll = [],size=0;
  if(!data) return [];
  //closeAll 收盘价array
 /* entitys = data.slice(start-oneScreenNum,start);
  for(var i=0;i<entitys.length;i++){
    closeAll.push(entitys[i][1]);
  }*/
  for(var j=0;j<data.length;j++){
    entitys = data[j];
    closeAll.push(entitys[1]);
    size = closeAll.length;
    if(size>=K_BBI4){
      bbi1price = getMA(closeAll.slice(size-K_BBI1,size),K_BBI1);
      bbi2price = getMA(closeAll.slice(size-K_BBI2,size),K_BBI2);
      bbi3price = getMA(closeAll.slice(size-K_BBI3,size),K_BBI3);
      bbi4price = getMA(closeAll.slice(size-K_BBI4,size),K_BBI4);
      result.push(decimalPoint((bbi1price+bbi2price+bbi3price+bbi4price)/4.0,digits))
    }
    else{
      result.push('-');
    }
  }
  return result;
}
/* BOLL 计算*/
function calculateBOLL(start,oneScreenNum,data,digits) {
  var K_BOOL_N = 26,MA = 0, MD = 0, UP = 0, DN = 0;
  var entitys=[],closeAll = [],resultMA = [],resultUP = [],resultDN = [],resultObj={},size=0;
  if(!data) return [];
  //closeAll 收盘价array
 /*
  entitys = data.slice(start-oneScreenNum,start);
  for(var i=0;i<entitys.length;i++){
    closeAll.push(entitys[i][1]);
  }*/
  for(var j=0;j<data.length;j++){
    entitys = data[j];
    closeAll.push(entitys[1]);
    size = closeAll.length;
    if(size>=K_BOOL_N){
      MA = getMA(closeAll.slice(size-K_BOOL_N,size),K_BOOL_N);
      MD = getMD(closeAll.slice(size-K_BOOL_N,size),MA,K_BOOL_N);
      UP = MA + 2 * MD;
      DN = MA - 2 * MD;
      resultMA.push(decimalPoint(MA,digits));
      resultUP.push(decimalPoint(UP,digits));
      resultDN.push(decimalPoint(DN,digits));
    }
    else{
      resultMA.push("-");
      resultUP.push("-");
      resultDN.push("-");
    }
  }
  resultObj = {
    'MA':resultMA,
    'UP':resultUP,
    'DN':resultDN,
  }
  return resultObj;
}

/* MIKE 计算*/
function calculateMIKE(start,oneScreenNum,data,digits) {
  var K_MIKE_N = 12,highAll=[],lowAll=[],high = 0,low = 0,close = 0;
  var entitys=[],resultWR = [],resultMR = [],resultSR = [],resultWS = [],resultMS = [],resultSS = [],resultObj = {};
  var minMax = [],typ = 0, wr = 0, mr = 0, sr = 0, ws = 0, ms = 0, ss = 0 ,ln = 0 ,hn = 0;
  if(!data) return [];
  //计算所有收盘价
/*  entitys = data.slice(start-oneScreenNum,start);
  for(var i=0;i<entitys.length;i++){
    highAll.push(entitys[i][3]);  //所有最高价
    lowAll.push(entitys[i][2]);  //所有最低价
  }*/
  for(var j=0;j<data.length;j++){
    entitys = data[j];
    high  = entitys[3];  // 当日最高价
    low   = entitys[2];   // 当日最低价
    close = entitys[1]; // 当日收盘价
    highAll.push(high);
    lowAll.push(low);
    typ = div(add(add(high,low), close),3.0);
    if (highAll.length >= K_MIKE_N) { /* 计算N日的最高/最低价 */
      minMax = getMIKE(highAll.slice(highAll.length - K_MIKE_N, highAll.length),
        lowAll.slice(lowAll.length - K_MIKE_N, lowAll.length));
      ln = minMax[0];
      hn = minMax[1];
      wr = 2 * typ - ln;
      mr = typ + hn - ln;
      sr = 2 * hn - ln;
      ws = 2 * typ - hn;
      ms = typ - hn + ln;
      ss = 2 * ln - hn;
      resultWR.push(decimalPoint(wr,digits));
      resultMR.push(decimalPoint(mr,digits));
      resultSR.push(decimalPoint(sr,digits));
      resultWS.push(decimalPoint(ws,digits));
      resultMS.push(decimalPoint(ms,digits));
      resultSS.push(decimalPoint(ss,digits));
    }
    else{
      resultWR.push("-");
      resultMR.push("-");
      resultSR.push("-");
      resultWS.push("-");
      resultMS.push("-");
      resultSS.push("-");
    }
  }
  resultObj = {
    'WR':resultWR,
    'MR':resultMR,
    'SR':resultSR,
    'WS':resultWS,
    'MS':resultMS,
    'SS':resultSS,
  };
  return resultObj;
}

/* PBX 计算*/
function calculatePBX(start,oneScreenNum,data,digits) {
  var K_PBX_M1 = 4,K_PBX_M2 = 6,K_PBX_M3 = 9,K_PBX_M4 = 13;
  var entitys=[],closeAll = [],resultPBX1 = [],resultPBX2 = [],resultPBX3 = [],resultPBX4 = [],resultObj = {},close = 0,size=0,pbx1 = 0, pbx2 = 0, pbx3 = 0, pbx4 = 0,j;
  if(!data) return [];
  //计算所有收盘价
  /*entitys = data.slice(start-oneScreenNum,start);
  for(var i=0;i<entitys.length;i++){
    closeAll.push(entitys[i][1]);
  }*/
  for(j=0;j<data.length;j++){
    entitys = data[j];
    close = entitys[1];
    closeAll.push(close);
    size = closeAll.length;
    if (size >= K_PBX_M1 * 4) {
      pbx1 = getPBX(closeAll.slice(size - K_PBX_M1, size),
        closeAll.slice(size - (K_PBX_M1 * 2), size),
        closeAll.slice(size - (K_PBX_M1 * 4), size),
        close, K_PBX_M1);
      resultPBX1.push(decimalPoint(pbx1,digits));
    }
    else{
      resultPBX1.push("-");
    }
    if (size >= K_PBX_M2 * 4) {
      pbx2 = getPBX(closeAll.slice(size - K_PBX_M2, size),
        closeAll.slice(size - (K_PBX_M2 * 2), size),
        closeAll.slice(size - (K_PBX_M2 * 4), size),
        close, K_PBX_M2);
      resultPBX2.push(decimalPoint(pbx2,digits));
    }
    else{
      resultPBX2.push("-");
    }

    if (size >= K_PBX_M3 * 4) {
      pbx3 = getPBX(closeAll.slice(size - K_PBX_M3, size),
        closeAll.slice(size - (K_PBX_M3 * 2), size),
        closeAll.slice(size - (K_PBX_M3 * 4), size),
        close, K_PBX_M3);
      resultPBX3.push(decimalPoint(pbx3,digits));
    }
    else{
      resultPBX3.push("-");
    }
    if (size >= K_PBX_M4 * 4) {
      pbx4 = getPBX(closeAll.slice(size - K_PBX_M4, size),
        closeAll.slice(size - (K_PBX_M4 * 2), size),
        closeAll.slice(size - (K_PBX_M4 * 4), size),
        close, K_PBX_M4);
      resultPBX4.push(decimalPoint(pbx4,digits));
    }
    else{
      resultPBX4.push("-");
    }
  }
  resultObj = {
    'PBX1': resultPBX1,
    'PBX2': resultPBX2,
    'PBX3': resultPBX3,
    'PBX4': resultPBX4,
  };
  return resultObj;
}

/* MACD 计算*/
function calculateMACD(data) {
  var K_MACD_12 = 12,K_MACD_26 = 26,K_MACD_DEA = 9,digits = 6;
  var resultDIFF = [],resultDEA = [],resultMACD = [],resultObj = {};
  var ema12 = 0, ema26 = 0,close = 0,macd = 0,diff = 0,dea9 = 0;
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    close = data[i][1];
    if (i == 0) {
      ema12 = ema26 = close;
      resultDIFF.push(0);
      resultDEA.push(0);
      resultMACD.push(0);
      continue;
    }
    ema12 = (ema12 * (K_MACD_12 - 1) + close * 2) / (K_MACD_12 + 1);
    ema26 = (ema26 * (K_MACD_26 - 1) + close * 2) / (K_MACD_26 + 1);
    diff = ema12 - ema26;
    dea9 = (dea9 * (K_MACD_DEA - 1) + diff * 2) / (K_MACD_DEA + 1);
    macd = 2 * sub(diff,dea9);
    resultDIFF.push(decimalPoint(diff,digits));
    resultDEA.push(decimalPoint(dea9,digits));
    resultMACD.push(decimalPoint(macd,digits));
  }
  resultObj = {
    'DIFF':resultDIFF,
    'DEA':resultDEA,
    'MACD':resultMACD
  };
  return resultObj;
}
/* RSI 计算*/
function calculateRSI(data,digits) {
  var K_RSI_1 = 6,K_RSI_2 = 12,K_RSI_3 = 24,rsi1 = 100,rsi2 = 100,rsi3 = 100;
  var resultRSI1 = [],resultRSI2 = [],resultRSI3 = [],resultObj = {};
  var rsi1Maxlist = [], rsi1Abslist = [],rsi2Maxlist = [],rsi2Abslist = [],rsi3Maxlist = [],rsi3Abslist = [];
  var close = 0, perclose= 0,range = 0,rsi1max = 0,rsi1abs = 0,rsi2max = 0,rsi2abs = 0,rsi3max = 0,rsi3abs = 0;
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    close = data[i][1];
    perclose = data[i - 1 < 0 ? 0 : i - 1][1];
    range = close - perclose;
    if (i > 0) {
      rsi1max = getSMA(range > 0 ? range : 0, K_RSI_1, 1, rsi1Maxlist[i - 1]);
      rsi1abs = getSMA(Math.abs(range), K_RSI_1, 1, rsi1Abslist[i - 1]);
      rsi2max = getSMA(range > 0 ? range : 0, K_RSI_2, 1, rsi2Maxlist[i - 1]);
      rsi2abs = getSMA(Math.abs(range), K_RSI_2, 1, rsi2Abslist[i - 1]);
      rsi3max = getSMA(range > 0 ? range : 0, K_RSI_3, 1, rsi3Maxlist[i - 1]);
      rsi3abs = getSMA(Math.abs(range), K_RSI_3, 1, rsi3Abslist[i - 1]);
      rsi1 = rsi1max / rsi1abs * 100;
      rsi2 = rsi2max / rsi2abs * 100;
      rsi3 = rsi3max / rsi3abs * 100;
    }
    rsi1Maxlist.push(rsi1max);
    rsi1Abslist.push(rsi1abs);
    rsi2Maxlist.push(rsi2max);
    rsi2Abslist.push(rsi2abs);
    rsi3Maxlist.push(rsi3max);
    rsi3Abslist.push(rsi3abs);
    resultRSI1.push(decimalPoint(rsi1,digits));
    resultRSI2.push(decimalPoint(rsi2,digits));
    resultRSI3.push(decimalPoint(rsi3,digits));
  }
  resultObj = {
    'RSI1':resultRSI1,
    'RSI2':resultRSI2,
    'RSI3':resultRSI3
  };
  return resultObj;
}
/* ARBR 计算*/
function calculateARBR(data,digits) {
  var K_ARBR_N = 26;
  var result = [0,0],resultAR = [],resultBR = [],resultObj = {};
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    if(i >= K_ARBR_N){
      result = getARBR(data.slice(i - K_ARBR_N, i + 1));
      resultAR.push(decimalPoint(result[0],digits));
      resultBR.push(decimalPoint(result[1],digits));
    }else{
      resultAR.push('-');
      resultBR.push('-');
    }
  }
  resultObj = {
    'AR':resultAR,
    'BR':resultBR,
  };
  return resultObj;
}
/* KDJ 计算*/
function calculateKDJ(data,digits) {
  var K_KDJ_RSV9 = 9,K_KDJ_3 = 3,subentitys = [];
  var klist = [],dlist = [],close = 0,low = 0,high = 0,ln = Number.MAX_VALUE,hn = Number.MIN_VALUE,kValue = 0,dValue = 0,jValue = 0,rsv = 0;
  var resultK = [],resultD = [],resultJ = [],resultObj = {};
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    if (i == 0) {
      klist.push(50);
      dlist.push(50);
      resultK.push(0);
      resultD.push(0);
      resultJ.push(0);
      continue;
    }
    close = data[i][1];
    subentitys = data.slice((i - K_KDJ_RSV9 + 1) < 0 ? 0 : (i - K_KDJ_RSV9 + 1), (i + 1) > data.length ? data.length : (i + 1));
    for(var j = 0;j<subentitys.length;j++ ){
      low  = subentitys[j][2];
      high = subentitys[j][3];
      if (low < ln)
        ln = low;
      if (high > hn)
        hn = high;
    }
    if(hn != ln){
      rsv = (close - ln) / (hn - ln) * 100;
    }
    kValue = getSMA(rsv, K_KDJ_3, 1, klist[i - 1]);
    dValue = getSMA(kValue, K_KDJ_3, 1, dlist[i - 1]);
    jValue = 3 * kValue - 2 * dValue;
    ln = Number.MAX_VALUE;
    hn = Number.MIN_VALUE;
    klist.push(kValue);
    dlist.push(dValue);
    resultK.push(decimalPoint(kValue,digits));
    resultD.push(decimalPoint(dValue,digits));
    resultJ.push(decimalPoint(jValue,digits));
  }
  resultObj = {
    'K':resultK,
    'D':resultD,
    'J':resultJ,
  };
  return resultObj;
}
/* CCI 计算*/
function calculateCCI(data,digits) {
  var K_CCI_N = 14,ptValueList = [],ccilist = [];
  var close = 0,low = 0,high = 0,ptValue = 0,ptAvgValue = 0,ptMAEValue = 0,cciValue = 0;
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    close = data[i][1];
    low   = data[i][2];
    high  = data[i][3];
    ptValue = (add(add(close , low) , high)) / 3.0 ;
    ptValueList.push(ptValue);
    if(ptValueList.length > K_CCI_N){
      ptValueList.shift();//删除第一个元素
    }
    if (ptValueList.length == K_CCI_N) {
       ptAvgValue = calcPtSMAValue(ptValueList);
       ptMAEValue = calcPtMAEValue(ptValueList, ptAvgValue);
       cciValue = calcCCIValue(ptValue, ptMAEValue, ptAvgValue);
       ccilist.push(decimalPoint(cciValue,digits));
    } else {
      ccilist.push(0);
    }
  }
  return ccilist;
}
/* KD 计算*/
function calculateKD(data,digits) {
  var K_KD_RSV9 = 9,K_KD_3 = 3,subentitys = [];
  var klist = [],dlist = [],close = 0,low = 0,high = 0,ln = Number.MAX_VALUE,hn = Number.MIN_VALUE,kValue = 0,dValue = 0,rsv = 0;
  var resultK = [],resultD = [],resultObj = {};
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    if (i == 0) {
      klist.push(50);
      dlist.push(50);
      resultK.push(0);
      resultD.push(0);
      continue;
    }
    close = data[i][1];
    subentitys = data.slice((i - K_KD_RSV9 + 1) < 0 ? 0 : (i - K_KD_RSV9 + 1), (i + 1) > data.length ? data.length : (i + 1));
    for(var j = 0;j<subentitys.length;j++ ){
      low  = subentitys[j][2];
      high = subentitys[j][3];
      if (low < ln)
        ln = low;
      if (high > hn)
        hn = high;
    }
    if(hn != ln){
      rsv = (close - ln) / (hn - ln) * 100;
    }
    kValue = getSMA(rsv, K_KD_3, 1, klist[i - 1]);
    dValue = getSMA(kValue, K_KD_3, 1, dlist[i - 1]);
    ln = Number.MAX_VALUE;
    hn = Number.MIN_VALUE;
    klist.push(kValue);
    dlist.push(dValue);
    resultK.push(decimalPoint(kValue,digits));
    resultD.push(decimalPoint(dValue,digits));
  }
  resultObj = {
    'K':resultK,
    'D':resultD,
  };
  return resultObj;
}
/* ATR 计算*/
function calculateATR(data,digits) {
  var K_ATR_N = 14;
  var result = [],resultTR = [],resultATR = [],resultObj = {};
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    if(i > K_ATR_N){
      result = getATR(data.slice(i - K_ATR_N + 1, i + 1), K_ATR_N);
      resultTR.push(decimalPoint(result[0],digits));
      resultATR.push(decimalPoint(result[1],digits));
    }else{
      resultTR.push('--');
      resultATR.push('--');
    }

  }
  resultObj = {
    'TR':resultTR,
    'ATR':resultATR,
  };
  return resultObj;
}

/* BIAS 计算*/
function calculateBIAS(data,digits) {
  var  K_BIAS_N1 = 6 , K_BIAS_N2 = 12, K_BIAS_N3 = 24;
  var bias1 = 0, bias2 = 0, bias3 = 0,close;
  var resultBIAS1 = [],resultBIAS2 = [],resultBIAS3 = [],resultObj = {};
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    close = data[i][1];
    if(i > K_BIAS_N1){
      bias1 = getBIAS(data.slice(i - K_BIAS_N1 + 1, i + 1),close, K_BIAS_N1);
      resultBIAS1.push(decimalPoint(bias1,digits));
    }else{
      resultBIAS1.push('--');
    }
    if(i > K_BIAS_N2){
      bias2 = getBIAS(data.slice(i - K_BIAS_N2 + 1, i + 1),close, K_BIAS_N2);
      resultBIAS2.push(decimalPoint(bias2,digits));
    }else{
      resultBIAS2.push('--');
    }
    if(i > K_BIAS_N3){
      bias3 = getBIAS(data.slice(i - K_BIAS_N3 + 1, i + 1),close, K_BIAS_N3);
      resultBIAS3.push(decimalPoint(bias3,digits));
    }else{
      resultBIAS3.push('--');
    }
  }
  resultObj = {
    'BIAS1':resultBIAS1,
    'BIAS2':resultBIAS2,
    'BIAS3':resultBIAS3,
  };
  return resultObj;
}

/* DKBY 计算*/
function calculateDKBY(data,digits) {
  var  K_DKBY_N1 = 8 ,K_DKBY_N2 = 13,K_DKBY_N3 = 21;
  var  var1 = 0, var2 = 0, var3 = 0,ene1Value = 50,ene2Value = 50,close,low, high;
  var ln = Number.MAX_VALUE,hn = Number.MIN_VALUE;
  var ene1list = [],ene2list = [],resultENE1 = [],resultENE2 = [],subentitys = [],resultObj = {};
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    if (i == 0) {
      ene1list.push(50);
      ene2list.push(50);
      resultENE1.push(0);
      resultENE2.push(0);
      continue;
    }
    close = data[i][1];
    subentitys = data.slice((i - K_DKBY_N3 + 1) < 0 ? 0 : (i - K_DKBY_N3 + 1), (i + 1) >data.length ? data.length : (i + 1));
    for(var j =0;j<subentitys.length;j++){
      low = subentitys[j][2];
      high = subentitys[j][3];
      if (low < ln)
        ln = low;
      if (high > hn)
        hn = high;
    }
    if(hn != ln){
      var1 = (hn - close) / (hn - ln) * 100 - 10;
      var2 = (close - ln) / (hn - ln) * 100;
      var3 = var2;
    }
    var3 = getSMA(var2, K_DKBY_N2, K_DKBY_N1, var3);
    ene1Value = getSMA(var3, K_DKBY_N2, K_DKBY_N1, ene1list[i - 1]);
    ene2Value = getSMA(var1, K_DKBY_N3, K_DKBY_N1, ene2list[i - 1]);
    ln = Number.MAX_VALUE;
    hn = Number.MIN_VALUE;
    ene1list.push(ene1Value);
    ene2list.push(ene2Value);
    resultENE1.push(decimalPoint(ene1Value,digits));
    resultENE2.push(decimalPoint(ene2Value,digits));
  }
  resultObj = {
    'ENE1':resultENE1,
    'ENE2':resultENE2,
  };
  return resultObj;
}

/* LWR 计算*/
function calculateLWR(data,digits) {
  var  K_LWR_RSV9 = 9 ,K_LWR_3 = 3;
  var  rsv = 0,lwr1 = 50,lwr2 = 50,close,low, high;
  var ln = Number.MAX_VALUE,hn = Number.MIN_VALUE;
  var lwr1List = [],lwr2List = [],resultLWR1 = [],resultLWR2 = [],subentitys = [],resultObj = {};
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    if (i == 0) {
      lwr1List.push(50);
      lwr2List.push(50);
      resultLWR1.push(0);
      resultLWR2.push(0);
      continue;
    }
    close = data[i][1];
    subentitys = data.slice((i - K_LWR_RSV9 + 1) < 0 ? 0 : (i - K_LWR_RSV9 + 1), (i + 1) >data.length ? data.length : (i + 1));
    for(var j =0;j<subentitys.length;j++){
      low = subentitys[j][2];
      high = subentitys[j][3];
      if (low < ln)
        ln = low;
      if (high > hn)
        hn = high;
    }
    if(hn != ln){
      rsv = (hn - close) / (hn - ln) * 100;
    }
    lwr1 = getSMA(rsv, K_LWR_3, 1, lwr1List[i - 1]);
    lwr2 = getSMA(lwr1, K_LWR_3, 1, lwr2List[i - 1]);
    ln = Number.MAX_VALUE;
    hn = Number.MIN_VALUE;
    lwr1List.push(lwr1);
    lwr2List.push(lwr2);
    resultLWR1.push(decimalPoint(lwr1,digits));
    resultLWR2.push(decimalPoint(lwr2,digits));
  }
  resultObj = {
    'LWR1':resultLWR1,
    'LWR2':resultLWR2,
  };
  return resultObj;
}

/* QHLSR 计算*/
function calculateQHLSR(data,digits) {
  var  K_QHLSR_N1 = 5 ,K_QHLSR_N2 = 10;
  var  qhl5 = 0,qhl10 = 0,qhl;
  var qhlList = [],resultQHLSR5 = [],resultQHLSR10 = [],resultObj = {};
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    if (i == 0) {
      qhlList.push(0);
      resultQHLSR5.push(0);
      resultQHLSR10.push(0);
      continue;
    }
    qhl = sub(data[i][1] ,data[i-1][1]);
    qhlList.push(qhl);
    if (i >= K_QHLSR_N2) {
      qhl5 = getQHL5(qhlList.slice(i - K_QHLSR_N1, i));
      qhl10 = getQHL10(qhlList.slice(i - K_QHLSR_N2, i));
      resultQHLSR5.push(decimalPoint(qhl5,digits));
      resultQHLSR10.push(decimalPoint(qhl10, digits));
    }else{
      resultQHLSR5.push('--');
      resultQHLSR10.push('--');
    }

  }
  resultObj = {
    'QHLSR5':resultQHLSR5,
    'QHLSR10':resultQHLSR10,
  };
  return resultObj;
}

/* WR 计算*/
function calculateWR(data,digits) {
  var  K_WR_N1 = 6,K_WR_N2 = 10;
  var  wr1 = 0, wr2 = 0,close;
  var qhlList = [],resultWR1 = [],resultWR2 = [],resultObj = {};
  if(!data) return [];
  for(var i=0;i<data.length;i++){
    close = data[i][1];

    if (i >= K_WR_N1) {
      wr1 = getWR(data.slice(i - K_WR_N1 + 1, i + 1),close);
      resultWR1.push(decimalPoint(wr1,digits));
    }else{
      resultWR1.push('--');
    }
    if (i >= K_WR_N2) {
      wr2 = getWR(data.slice(i - K_WR_N2 + 1, i + 1),close);
      resultWR2.push(decimalPoint(wr2,digits));
    }else{
      resultWR2.push('--');
    }

  }
  resultObj = {
    'WR1':resultWR1,
    'WR2':resultWR2,
  };
  return resultObj;
}


function isLeapYear(year) {
     return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}
function getMonthDays(year, month) {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
}
function getWeekNumber(date) {
  var now = new Date(date),
    year = now.getFullYear(),
    month = now.getMonth(),
    days = now.getDate();
  //那一天是那一年中的第多少天
  for (var i = 0; i < month; i++) {
    days += getMonthDays(year, i);
  }

  //那一年第一天是星期几
  var yearFirstDay = new Date(year, 0, 1).getDay() || 7;

  var week = null;
  if (yearFirstDay == 1) {
    week = Math.ceil(days / yearFirstDay);
  } else {
    days -= (7 - yearFirstDay + 1);
    week = Math.ceil(days / 7)+1;
  }

  return week;
}

function getWeekOf1970(date) {
  var n1970 = -28800;
  var days = (date - n1970) / (24*3600);
  return Math.ceil((days -3) / 7 + 1 );
}

/**
 * 根据日K计算周K
 *
 * @param subList   180*5
 *
 */

function getWeekKLineData(subList) {
  var n1970Time = 0;    // 时间戳
  var priceOpen = 0;     // 开盘价, 元
  var priceHigh = 0;     // 最高价, 元
  var priceLow = 0;      // 最低价, 元
  var priceClose = 0;    // 收盘价, 元
  var length = 0;     // 本周日K线有多少条
  var year,week,high,low,id,seq,now;
  var  j=0,lastYear = 0,lastWeek = 0;
  var KLineEntity,resultList = [];
  subList = subList.reverse();
  for(var i=0;i <subList.length;i++){
    now = new Date(subList[i].time*1000);
    year = now.getFullYear();
    week = getWeekOf1970(subList[i].time);
      // 当前元素时间戳与上一个在同一周
    if (i  == 0 || ( lastWeek == week)) {
      if (priceOpen <= 0) {
        priceOpen = subList[j].price_open;
        n1970Time = subList[i].time;
      }
      // 取最后一个日K的收盘价作为周/月K的收盘价
      priceClose = subList[i].price_close;
      // 取周/月K中的最高价
      high = subList[i].price_high;
      if (priceHigh <= 0 || priceHigh < high) {
        priceHigh = high;
      }
      // 取周/月K中的最低价
      low = subList[i].price_low;
      if (priceLow <= 0 || priceLow > low) {
        priceLow = low;
      }
      id = subList[i].id;
      seq = subList[i].seq;
      ++length;

    }else{
      j = i;
      i--;
      KLineEntity = {};
      KLineEntity.id = id;
      KLineEntity.time = n1970Time;
      KLineEntity.price_open = priceOpen;
      KLineEntity.price_close = priceClose;
      KLineEntity.price_high = priceHigh;
      KLineEntity.price_low = priceLow;
      resultList.unshift(KLineEntity);
      length = 0;
      n1970Time = priceOpen = priceClose = priceHigh = priceLow =  0;
    }
    // 数据达到最后一周，单独处理
    if(i == subList.length - 1){
      KLineEntity = {};
      KLineEntity.id = id;
      KLineEntity.time = n1970Time;
      KLineEntity.price_open = priceOpen;
      KLineEntity.price_close = priceClose;
      KLineEntity.price_high = priceHigh;
      KLineEntity.price_low = priceLow;
      resultList.unshift(KLineEntity);
    }

    lastYear = year;
    lastWeek = week;
  }
  return resultList;
}

/**
 * 根据日K计算月K
 *
 * @param subList
 * @return
 */
function getMonthKLineData(subList) {
  var n1970Time = 0;    // 时间戳
  var priceOpen = 0;     // 开盘价, 元
  var priceHigh = 0;     // 最高价, 元
  var priceLow = 0;      // 最低价, 元
  var priceClose = 0;    // 收盘价, 元
  var length = 0;     // 本周日K线有多少条
  var year,month,high,low,id,seq;
  var  j=0,lastYear = 0,lastMonth = 0;
  var KLineEntity,resultList = [];
  for(var i=0;i <subList.length;i++){
    year  = new Date(subList[i].time*1000).getFullYear();
    month = new Date(subList[i].time*1000).getMonth();
    // 当前元素时间戳与上一个在同一月
    if (i == 0 || (lastYear == year && lastMonth == month)) {
      if (priceOpen <= 0) {
        priceOpen = subList[j].price_open;
        n1970Time = subList[i].time;
      }
      // 取最后一个日K的收盘价作为周/月K的收盘价
      priceClose = subList[i].price_close;
      // 取周/月K中的最高价
      high = subList[i].price_high;
      if (priceHigh <= 0 || priceHigh < high) {
        priceHigh = high;
      }
      // 取周/月K中的最低价
      low = subList[i].price_low;
      if (priceLow <= 0 || priceLow > low) {
        priceLow = low;
      }
      id = subList[i].id;
      seq = subList[i].seq;
      ++length;

    }else{
      j = i;
      i--;
      KLineEntity = {};
      KLineEntity.id = id;
      KLineEntity.time = n1970Time;
      KLineEntity.price_open = priceOpen;
      KLineEntity.price_close = priceClose;
      KLineEntity.price_high = priceHigh;
      KLineEntity.price_low = priceLow;
      resultList.unshift(KLineEntity);
      length = 0;
      n1970Time = priceOpen = priceClose = priceHigh = priceLow =  0;
    }
    // 数据达到最后一周，单独处理
    if(i == subList.length - 1){
      KLineEntity = {};
      KLineEntity.id = id;
      KLineEntity.time = n1970Time;
      KLineEntity.price_open = priceOpen;
      KLineEntity.price_close = priceClose;
      KLineEntity.price_high = priceHigh;
      KLineEntity.price_low = priceLow;
      resultList.unshift(KLineEntity);
    }

    lastYear = year;
    lastMonth = month;
  }
  return resultList;
}

/**
 * 截取最新一日数据
 *
 * @param subList
 * @schList
 */
function getTodayData(subList,schList,zone) {
  var now,date,week,month,year,startTime=0,endTime=0,firstTime,lastTime,result=[];
      now =  new Date((subList[subList.length - 1].time - zone*60*60)*1000);   //最新一条时间
      date = now.getDate();
      week = now.getDay();
      month = now.getMonth();
      year = now.getFullYear();
  //获取当日最开始时间
   for(var i=0;i<schList.length;i++){
     if(!schList[i].day_of_week){
       schList[i].day_of_week = 0;
     }
     if(!schList[i].start_time){
       schList[i].start_time = 0;
     }
     if(week == schList[i].day_of_week){
       if(schList[i].start_time < startTime){
         startTime = schList[i].start_time;
       }
       if(schList[i].end_time > endTime){
         endTime = schList[i].end_time;
       }
     }
   }
    firstTime = new Date(year+'/'+(month+1)+'/'+date+' 00:00:00').getTime()/1000 + (zone*60+startTime+1)*60;
    lastTime = new Date(year+'/'+(month+1)+'/'+date+' 00:00:00').getTime()/1000 + (zone*60+endTime)*60;
   for(var j=0;j<subList.length;j++){
     if(subList[j].time >= firstTime && subList[j].time <= lastTime){
       result.unshift(subList[j]);
     }
   }
   return result;
}



/**图表数据生成
 * */
function getChartData(symbol,kdata,zone,klineType){
  var categoryData = [],values = [],tValues = [],volumes=[],serverTime=[],timeDivision = [],d;
  if(symbol && kdata &&  kdata.length >0){
    for (var i = kdata.length-1; i >=0; i--) {
      if(kdata[i].id == symbol.id){
        var digits = kdata[i].digits || 0;
        d = getZoneTime(new Date(kdata[i].time*1000),zone);
        serverTime.push(kdata[i].time);  //服务器时间(GMT0)
        if(klineType == "DAY" || klineType=="WEEK"){
          categoryData.push(dateFormat(d,"yyyy/MM/dd"));// the date
        }
        else if(klineType == "MONTH"){
          categoryData.push(dateFormat(d,"yyyy/MM"));// the date
        }
        else{
          categoryData.push(dateFormat(d,"yyyy/MM/dd hh:mm"));// the date
        }
        values.push([
          decimalPoint(kdata[i].price_open/Math.pow(10,digits),digits), // open
          decimalPoint(kdata[i].price_close/Math.pow(10,digits),digits), // close
          decimalPoint(kdata[i].price_low/Math.pow(10,digits),digits), // low
          decimalPoint(kdata[i].price_high/Math.pow(10,digits),digits) // high
        ]);
        tValues.push(decimalPoint(kdata[i].price_close/Math.pow(10,digits),digits));// close;
        volumes.push([dateFormat(d,"yyyy/MM/dd hh:mm"), i, kdata[i].price_open>kdata[i].price_close ? 1 : -1]);
          var obj = {time:dateFormat(d,"yyyy/MM/dd hh:mm"),closePrice:kdata[i].price_close/Math.pow(10,digits),average:(kdata[i].price_low + kdata[i].price_high)/(2*Math.pow(10,digits))};
          timeDivision.push(obj);
      }
    }
  }
  return {
    categoryData: categoryData,
    values: values,
    tValues:tValues,
    volumes: volumes,
    serverTime:serverTime,
    timeDivision:timeDivision
  };
}

//根据产品ID得到对应的产品
function getSymbol(symbolCatList,symbolList,symbolid){
  var symbol = null,isc;
  for(var i=0;i < symbolList.length;i++){
    if(symbolid == symbolList[i].id){
      if(!symbolList[i].status || symbolList[i].status==0){
        isc = getSymbolCat(symbolList[i].symbol_cataid,symbolCatList);
        if(isc){
          symbol = {};
          $.extend(symbol, symbolList[i]);
          symbol.schedule_delay_minutes = (symbol.schedule_delay_minutes && symbol.schedule_delay_minutes !=0)?symbol.schedule_delay_minutes:(isc.schedule_delay_minutes?isc.schedule_delay_minutes:0);
          symbol.marketid = isc.marketid;
        }
      }
      break;
    }
  }
  return symbol;
}

//根据产品ID得到对应的产品指定id或屬性
function getSymbolAssignID(symbolCatList,symbolList,symbolid,state) {//获取产品指定id
  var i,w;
  for (i = 0; i < symbolList.length; i++) {
    if(symbolList[i].id == symbolid){
      for (w = 0; w < symbolCatList.length; w++) {
        if ((symbolList[i].symbol_cataid == symbolCatList[w].id)) {
          switch (state){
            case '1':
              return symbolList[i].digits;
              break;
            case '2':
              return symbolList[i].contract_size_new;
              break;
            case '3':
              return symbolCatList[w].marketid?symbolCatList[w].marketid:0;
              break;
            case '4':
              return symbolList[i].display_name;
              break;
            case '5':
              return symbolList[i].profit_currency;
              break;
            case '6':
              return symbolList[i].symbol_cataid;
              break;
          }
        }
      }
    }
  }
}

/***得到货币对
 * @P 盈利货币
 * @D 账户货币
 * ***/
function getCurrencyPair (symbol,accountGroup,symbolList,symbolCatList,isDepost) {
  var i,j,P ,D,symb,pairArr=[],symCat;
  symCat =getSymbolCat(symbol.symbol_cataid,symbolCatList);
  if(!symCat){
    return [];
  }
  if(isDepost){  //保证金
     if(symCat.marketid ==8){//外汇
       P =symbol.base_currency;
     }
    else{
       P = symbol.profit_currency;
     }
  }else{
    P = symbol.profit_currency;
  }
  if(accountGroup){
    D = accountGroup.currency;
  }
  if(D && P && (P != D)){
       if(P=="USD" || D =="USD"){ //直接
         for(i = 0; i< symbolList.length; i++){
           symb = symbolList[i];
           if((P == symb.profit_currency && D == symb.base_currency) || (P == symb.base_currency && D == symb.profit_currency)){
               symb.marketid = getSymbolAssignID(symbolCatList,symbolList,symb.id,'3');
               pairArr.push(symb);
               return pairArr;
           }
         }
       }
    else { //间接
         for (i = 0; i < symbolList.length; i++) {
           symb = symbolList[i];
           if ((P == symb.profit_currency && D == symb.base_currency) || (P == symb.base_currency && D == symb.profit_currency)) {
             symb.marketid = getSymbolAssignID(symbolCatList, symbolList, symb.id, '3');
             pairArr.push(symb);
             return pairArr;
           }
         }
         for (j = 0; j < symbolList.length; j++) {
           symb = symbolList[j];
           if ((symb.profit_currency == D && symb.base_currency == 'USD') || (symb.base_currency == D && symb.profit_currency == 'USD')) {
             symb.marketid = getSymbolAssignID(symbolCatList, symbolList, symb.id, '3');
             pairArr.push(symb);
           }
           if ((symb.profit_currency == P && symb.base_currency == 'USD') || (symb.base_currency == P && symb.profit_currency == 'USD')) {
             symb.marketid = getSymbolAssignID(symbolCatList, symbolList, symb.id, '3');
             pairArr.push(symb);
           }
           if (pairArr.length > 1) {
             return pairArr;
           }
         }
       }

  }else{
    return [];
  }
}

/***汇率转换
 * @state int 1：佣金  2：盈亏  3：保证金
 * ***/
function getRate(symbol,accountGroup,currencyPair,state,isBigZero){
  var rate = 0,symbo_currency;
  if(symbol){
    if(symbol.marketid ==8 && state==3){//外汇保证金
      symbo_currency = symbol.base_currency;
    }
    else{
      symbo_currency = symbol.profit_currency;
    }
  }
  if(symbo_currency == accountGroup.currency){
    rate =1;
  }
  else{
    if(symbo_currency && currencyPair && currencyPair.length >0){
      if(currencyPair.length ==1){
          if(parseFloat(currencyPair[0].ask) == 0 || parseFloat(currencyPair[0].bid) == 0){
             return  0;
          }
        // console.log(symbo_currency+"-"+accountGroup.currency);
        // console.log(currencyPair[0].base_currency+""+currencyPair[0].profit_currency+":"+currencyPair[0].bid+""+currencyPair[0].ask);
        if(symbo_currency ==currencyPair[0].base_currency && accountGroup.currency == currencyPair[0].profit_currency){
          if(isBigZero){
            switch (state){
              case 1: case 3:{
              rate = currencyPair[0].ask;
              break;
            }
              case 2:{
                rate = currencyPair[0].bid;
                break
              }
            }
          }
          else{
            switch (state){
              case 1:case 3:{
              rate = currencyPair[0].bid;
              break;
            }
              case 2:{
                rate = currencyPair[0].ask;
                break
              }
            }
          }
        }
        else if(symbo_currency ==currencyPair[0].profit_currency && accountGroup.currency == currencyPair[0].base_currency){
          if(isBigZero){
            switch (state){
              case 1:case 3:{
              rate = 1/currencyPair[0].bid;
              break;
            }
              case 2:{
                rate = 1/currencyPair[0].ask;
                break;
              }
            }
          }
          else{
            switch (state){
              case 1:case 3:{
              rate = 1/currencyPair[0].ask;
              break;
            }
              case 2:{
                rate = 1/currencyPair[0].bid;
                break;
              }
            }
          }
        }
      }
      else if(currencyPair.length ==2){//间接
        rate =1;
        for(var i=0;i <currencyPair.length;i++){
          if(symbo_currency ==currencyPair[i].base_currency || accountGroup.currency ==currencyPair[i].profit_currency){
            if(isBigZero){
              switch (state){
                case 1:case 3:{
                rate = rate*currencyPair[i].ask;
                break;
              }
                case 2:{
                  rate = rate*currencyPair[i].bid;
                  break;
                }
              }
            }
            else{
              switch (state){
                case 1:case 3:{
                rate = rate*currencyPair[i].bid;
                break;
              }
                case 2:{
                  rate = rate*currencyPair[i].ask;
                  break;
                }
              }
            }
          }
          else if(symbo_currency ==currencyPair[i].profit_currency ||accountGroup.currency ==currencyPair[i].base_currency){
            if(isBigZero){
              switch (state){
                case 1:case 3:{
                rate = rate/currencyPair[i].bid;
                break;
              }
                case 2:{
                  rate = rate/currencyPair[i].ask;
                  break;
                }
              }
            }
            else{
              switch (state){
                case 1:case 3:{
                rate = rate/currencyPair[i].ask;
                break;
              }
                case 2:{
                  rate = rate/currencyPair[i].bid;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
  return rate;
}


//保证金比例
function getPercent(marginLevel,volume) {
  var volumeSum = 0,turnPercent= 0,len;
  if(!volume || volume=="")volume=0;
  if(marginLevel && (len=marginLevel.length) > 0){
    for(var i =0;i < len;i++){
      if((volume - volumeSum) <= (marginLevel[i].range_right - marginLevel[i].range_left)){
        turnPercent += (marginLevel[i].percent/10000)*(volume - volumeSum);
        volumeSum = volume;
        break;
      }
      else{
        turnPercent += (marginLevel[i].percent/10000)*(marginLevel[i].range_right-marginLevel[i].range_left);
        volumeSum =marginLevel[i].range_right;
      }
    }
    if(volumeSum < volume){
      turnPercent += (volume - volumeSum)*(marginLevel[len-1].percent/10000);
    }
  }
  turnPercent = turnPercent/volume;
  return turnPercent;
}

//获取佣金字段
function commission(groupSymbol,groupSymbolCata,accountGroup,symbol) {
  for(var i = 0; i < groupSymbol.length; i++){
    if((symbol.id == groupSymbol[i].symbolid) && ( accountGroup && accountGroup.id == groupSymbol[i].account_groupid) && (!groupSymbol[i].status || groupSymbol[i].status == 0)){
          return groupSymbol[i].commission;
    }
  }
  for(var j = 0; j < groupSymbolCata.length; j++){
    if((symbol.symbol_cataid == groupSymbolCata[j].symbol_cataid) && ( accountGroup && accountGroup.id == groupSymbolCata[j].account_groupid) && (!groupSymbolCata[j].status || groupSymbolCata[j].status == 0)){
         return groupSymbolCata[j].commission;
    }
  }
}

//判断佣金类型
function judgeCommissionType(groupSymbolCata,accountGroup,symbol) {
  for(var i = 0; i < groupSymbolCata.length; i++){
    if(symbol.symbol_cataid == groupSymbolCata[i].symbol_cataid && groupSymbolCata[i].commission_type == 1 && ( accountGroup && accountGroup.id == groupSymbolCata[i].account_groupid)  && (!groupSymbolCata[i].status || groupSymbolCata[i].status == 0)){  //手数  增加状态判断
       return true;
    }
  }
 return false;
}
/***佣金计算
 * 计算公式：顶层价*数量*commission/1000000 *rate
 * @rate  汇率转换
 * @isShow  true:显示   false:用在交易结果页重新计算，无正负
 * ***/
function getCommission(groupSymbolCata,accountGroup,symbol,askPrice,bidPrice,direction,volume,commission,rate,isShow) {
  var commissionType = judgeCommissionType(groupSymbolCata,accountGroup,symbol);
  if(rate && askPrice && bidPrice){
    if(commissionType){  //佣金为手数
      if(isShow){
        if(commission>0){
          return outputMoney(volume*commission,2);
        }else{
          return '-'+outputMoney(volume*commission*(-1),2);
        }
      }else{
        return volume*commission;
      }
    }else{   //佣金为合约价值
      if(direction == 1){
        if(isShow){
          if(askPrice*rate*commission>0){
            return outputMoney(mul(askPrice*volume*commission/1000000,rate),2);
          }else{
            return '-'+outputMoney(mul(askPrice*volume*commission/1000000,rate)*(-1),2);
          }
        }else{
          return mul(askPrice*volume*commission/1000000,rate);
        }
      }else{
        if(isShow){
          if(bidPrice*rate>0){
            return outputMoney(mul(bidPrice*volume*commission/1000000,rate),2);
          }else{
            return '-'+outputMoney(mul(bidPrice*volume*commission/1000000,rate)*(-1),2);
          }
        }else{
          return mul(bidPrice*volume*commission/1000000,rate);
        }
      }
    }
  }else{
    return '--';
  }

}

/***保证金
 * 计算公式：合约价值*保证金比例 *rate
 * @symbol Object 产品
 * @first_price 顶成价 买：ask 卖:bid
 * @volume int 买卖数量
 * @percent float 保证金层级百分比
 * @rate  汇率
 * @isShow  true:显示   false:用在交易结果页重新计算，无正负
 * ***/
function getCashDeposit(symbol,first_price,volume,percent,rate,isShow,now_price) {
  var contractValue = 0;
  if(symbol.marketid ==8){//外汇
    contractValue = volume;
  }
  else if(symbol.marketid ==0 ||symbol.marketid ==1||symbol.marketid ==2||symbol.marketid ==9||symbol.marketid ==11){//股票,指数
    if(symbol.price){
      contractValue = symbol.price * volume;
    }else if(now_price){
      contractValue = now_price * volume;
    }else{
      contractValue = first_price * volume;
    }
  }
  else {//贵金属、期货、指数等
    contractValue = first_price * volume;
  }
  if(isShow){
    if(rate && contractValue){
      if(rate*contractValue>0){
        return outputMoney(mul(contractValue,percent)*rate,2);
      }else{
        return '-'+outputMoney(mul(contractValue,percent)*rate*(-1),2);
      }
    }else{
      return '--';
    }
  }else{
    if(rate && contractValue){
      return  mul(contractValue,percent)*rate;
    }else{
      return 0;
    }
  }

}

//判断产品属于哪种分类
function judgeSymbolCata(symbol,symbolCatList) {
      var symCat = getSymbolCat(symbol.symbol_cataid,symbolCatList);
      if(!symCat){return 0;}
     if(symCat.marketid == 8){  //外汇
        return 1;
     }else if(symCat.marketid ==0 ||symCat.marketid ==1||symCat.marketid ==2||symCat.marketid ==9){ //股票
        return 2;
     }else{
        return 3;
     }
}

/***本地时间转为对应时区时间
 * @date date 本地日期
 * @zone  int 对应时区
 * ***/
function getZoneTime(date,zone){
  if(!date){return null;}
  var localTime = date.getTime(),
    localOffset = date.getTimezoneOffset()*60*1000,
    utc = localTime+localOffset,
    calctime=utc +(60*60*1000*zone),
    nd = new Date(calctime);
  return nd;
}

/**将分钟转成小时分钟
 * */
function toHourMinute(minutes){
  if(!minutes || minutes ==0){
    return "00:00"
  }
  else if(minutes <0){
    minutes = 24 *60 +minutes%1440;
  }
  else{
    minutes = minutes%1440;
  }
  var hour = parseInt(minutes/60),minute = minutes%60;
  if(hour==24){
    if(minute!=0){
      hour = 0;
    }
  }
  return (hour>9?hour:"0"+hour)+":"+(minute>9?minute:"0"+minute);
}
/**得到指定产品保证金层级
 * */
function getMarginLevels(symbol,accountGroupId,symbolCatList,groupSymbolList,groupSymbolCatList,holidayList,holidayCatList,scheduleList,scheduleCatList,symbolMarginList,isWeekend,serverTime){
  var marginType =null,marginLevels=[],holidayCat,holiday;
  for(var i=0;i < holidayCatList.length;i++){
    if(symbol.holiday_cataid == holidayCatList[i].id){
      if(!holidayCatList[i].status || holidayCatList[i].status==0){
        holidayCat = holidayCatList[i];
      }
      break;
    }
  }
  if(holidayCat){
    for(var i=0;i < holidayList.length;i++){
      if(holidayCat.id == holidayList[i].holiday_cataid && (!holidayList[i].status || holidayList[i].status==0)&&holidayList[i].enable == true
        && serverTime >= parseInt(holidayList[i].from_time ? holidayList[i].from_time : 0) && serverTime <parseInt(holidayList[i].totime ? holidayList[i].totime : 0)){
        holiday = holidayList[i];
        break;
      }
    }
    if(holiday){
      marginLevels = getGroupSymbolHolidyMarLevels(symbol,accountGroupId,groupSymbolList,groupSymbolCatList,symbolMarginList);
      if(marginLevels && marginLevels.length >0){
        return marginLevels;
      }
      marginType = holiday.margin_type?holiday.margin_type:0;
      marginLevels = getMarginLevel(marginType,symbolMarginList);
      if(marginLevels && marginLevels.length >0){
        return marginLevels;
      }
      marginType = holidayCat.margin_type?holidayCat.margin_type:0;
      marginLevels = getMarginLevel(marginType,symbolMarginList);
      if(marginLevels && marginLevels.length >0){
        return marginLevels;
      }
    }
  }
  var scheduleDelayMinutes = symbol.schedule_delay_minutes?symbol.schedule_delay_minutes: 0;
  if (!scheduleDelayMinutes || scheduleDelayMinutes == 0) {
    var isc;
    for (var i = 0; i < symbolCatList.length; i++) {
      if (symbol.symbol_cataid == symbolCatList[i].id ) {
        if(!symbolCatList[i].status || symbolCatList[i].status == 0){
          isc = symbolCatList[i];
        }
        break;
      }
    }
    if (!isc) {
      return marginLevels;
    }
    scheduleDelayMinutes = isc.schedule_delay_minutes ? isc.schedule_delay_minutes : 0;
  }
  var tnow = new Date(serverTime*1000),weekday_now = tnow.getUTCDay(),nminutes =tnow.getUTCHours() *60 +tnow.getUTCMinutes(),scheduleCat,schedule;
  for(var i=0;i < scheduleCatList.length;i++){
    if(symbol.schedule_cataid == scheduleCatList[i].id){
      if(!scheduleCatList[i].status || scheduleCatList[i].status==0){
        scheduleCat = scheduleCatList[i];
      }
      break;
    }
  }
  if(scheduleCat){
    var picked_schedules = [],start_time_db, end_time_db, weekday_db;
    for (var i = 0; i < scheduleList.length; i++) {
      if (scheduleList[i].schedule_cataid == scheduleCat.id && (!scheduleList[i].status || scheduleList[i].status == 0) &&
        scheduleList[i].enable == 1) {
        picked_schedules.push(scheduleList[i]);
      }
    }
    for (var i = 0; i < picked_schedules.length; i++) {
      start_time_db = picked_schedules[i].start_time?picked_schedules[i].start_time:0 + scheduleDelayMinutes;
      end_time_db = picked_schedules[i].end_time?picked_schedules[i].end_time:0 + scheduleDelayMinutes;
      weekday_db = picked_schedules[i].day_of_week?picked_schedules[i].day_of_week:0;
      if (weekday_now == weekday_db) {
        if (nminutes >= start_time_db && nminutes < end_time_db) {
          schedule = picked_schedules[i];
          break;
        }
        continue;
      }
      var t1;
      if (weekday_now > 0) {
        t1 = weekday_now - 1;
      } else {
        t1 = 6;
      }
      if (t1 == weekday_db) {
        if (((nminutes + 1440) >= start_time_db) && ((nminutes + 1440) < end_time_db)) {
          schedule = picked_schedules[i];
          break;
        }
        continue;
      }
      var t2;
      if (weekday_now < 6) {
        t2 = weekday_now + 1;
      } else {
        t2 = 0;
      }
      if (t2 == weekday_db) {
        if ((nminutes - 1440) >= start_time_db && (nminutes - 1440) < end_time_db) {
          schedule = picked_schedules[i];
          break;
        }
        continue;
      }
    }
    if(schedule){
      for(var i=0;i < groupSymbolList.length;i++){
        if(symbol.id == groupSymbolList[i].symbolid && groupSymbolList[i].account_groupid== accountGroupId &&(!groupSymbolList[i].status || groupSymbolList[i].status==0)){
          marginType = groupSymbolList[i].normal_margin_type?groupSymbolList[i].normal_margin_type:0;
          marginLevels = getMarginLevel(marginType,symbolMarginList);
          if(marginLevels && marginLevels.length >0){
            return marginLevels;
          }
        }
      }
      for(var i=0;i < groupSymbolCatList.length;i++){
        if(symbol.symbol_cataid == groupSymbolCatList[i].symbol_cataid && groupSymbolCatList[i].account_groupid== accountGroupId && (!groupSymbolCatList[i].status || groupSymbolCatList[i].status==0)){
          marginType = groupSymbolCatList[i].normal_margin_type?groupSymbolCatList[i].normal_margin_type:0;
          marginLevels = getMarginLevel(marginType,symbolMarginList);
          if(marginLevels && marginLevels.length >0){
            return marginLevels;
          }
        }
      }
      marginType = schedule.margin_type?schedule.margin_type:0;
      marginLevels = getMarginLevel(marginType,symbolMarginList);
      if(marginLevels && marginLevels.length >0){
        return marginLevels;
      }
      marginType = scheduleCat.margin_type?scheduleCat.margin_type:0;
      marginLevels = getMarginLevel(marginType,symbolMarginList);
      if(marginLevels && marginLevels.length >0){
        return marginLevels;
      }
    }
  }
  if(!schedule){
    if(isWeekend == true){
      marginLevels =getGroupSymbolWeekendMarLevels(symbol,accountGroupId,groupSymbolList,groupSymbolCatList,symbolMarginList);
      if(marginLevels && marginLevels.length >0){
        return marginLevels;
      }
    }
  }
  marginType = symbol.margin_type?symbol.margin_type:0;
  marginLevels = getMarginLevel(marginType,symbolMarginList);
  return marginLevels;
}
/**
 * 得到groupSymbol和groupSymbolCat的holiday MarginLevels
 * */
function getGroupSymbolHolidyMarLevels(symbol,accountGroupId,groupSymbolList,groupSymbolCatList,symbolMarginList){
  var marginType =null,marginLevels=[]
  for(var i=0;i < groupSymbolList.length;i++){
    if(symbol.id == groupSymbolList[i].symbolid && groupSymbolList[i].account_groupid== accountGroupId &&(!groupSymbolList[i].status || groupSymbolList[i].status==0)){
      marginType = groupSymbolList[i].holiday_margin_type?groupSymbolList[i].holiday_margin_type:0;
      marginLevels = getMarginLevel(marginType,symbolMarginList);
      if(marginLevels && marginLevels.length >0){
        return marginLevels;
      }
      break;
    }
  }
  for(var i=0;i < groupSymbolCatList.length;i++){
    if(symbol.symbol_cataid == groupSymbolCatList[i].symbol_cataid && groupSymbolCatList[i].account_groupid== accountGroupId && (!groupSymbolCatList[i].status || groupSymbolCatList[i].status==0)){
      marginType = groupSymbolCatList[i].holiday_margin_type?groupSymbolCatList[i].holiday_margin_type:0;
      marginLevels = getMarginLevel(marginType,symbolMarginList);
      if(marginLevels && marginLevels.length >0){
        return marginLevels;
      }
      break;
    }
  }
  return marginLevels;
}
/**
 * 得到groupSymbol和groupSymbolCat的Weekend MarginLevels
 * */
function getGroupSymbolWeekendMarLevels(symbol,accountGroupId,groupSymbolList,groupSymbolCatList,symbolMarginList){
  var marginType =null,marginLevels=[];
  for(var i=0;i < groupSymbolList.length;i++){
    if(symbol.id == groupSymbolList[i].symbolid && groupSymbolList[i].account_groupid== accountGroupId &&(!groupSymbolList[i].status || groupSymbolList[i].status==0)){
      marginType = groupSymbolList[i].weekend_margin_type?groupSymbolList[i].weekend_margin_type:0;
      marginLevels = getMarginLevel(marginType,symbolMarginList);
      if(marginLevels && marginLevels.length >0){
        return marginLevels;
      }
      break;
    }
  }
  for(var i=0;i < groupSymbolCatList.length;i++){
    if(symbol.symbol_cataid == groupSymbolCatList[i].symbol_cataid && groupSymbolCatList[i].account_groupid== accountGroupId && (!groupSymbolCatList[i].status || groupSymbolCatList[i].status==0)){
      marginType = groupSymbolCatList[i].weekend_margin_type?groupSymbolCatList[i].weekend_margin_type:0;
      marginLevels = getMarginLevel(marginType,symbolMarginList);
      if(marginLevels && marginLevels.length >0){
        return marginLevels;
      }
      break;
    }
  }
  return marginLevels;
}

/**得到指定保证金类型的层级
 * */
function getMarginLevel(marginType,symbolMarginList){
    var marginLevel = [],obj;
    for(var i=0;i < symbolMarginList.length;i++){
      if(marginType == symbolMarginList[i].margin_type && (!symbolMarginList[i].status || symbolMarginList[i].status==0)){
        obj = Object.assign({},symbolMarginList[i]);
        if(!obj.range_left){
          obj.range_left = 0;
        }
        if(marginLevel.length ==0){
          marginLevel.push(obj);
        }
        else{
          var j=0;
          for(j=0;j <marginLevel.length;j++ ){
            if(obj.range_left < marginLevel[j].range_left){
              marginLevel.splice(j,0,obj);
              break;
            }
          }
          if(j == marginLevel.length){
            marginLevel.push(obj);
          }
        }
      }
    }
  return marginLevel;
}
/**是否在周末，周五的交易结束时间 至 周一的交易开始时间
 * @weekDaySchedule 每周的交易时间
 * @zone 时区
 * */
function judgeIsWeekend(weekDaySchedule,zone,serverTime){
  var isWeekend = false,tnow = getZoneTime(new Date(serverTime*1000),zone),weekday_now=tnow.getDay(),nminutes =tnow.getHours() *60 +tnow.getMinutes(),len,transTime,endTime,startTime;
  if(weekday_now==0 || weekday_now ==6){
    isWeekend = true;
  }
  else {
    if(weekDaySchedule){
       if(weekday_now ==5){
         len = weekDaySchedule["5"].length;
          if(len >0){
            transTime = weekDaySchedule["5"][len-1].split("-")[1].split(":");
            endTime = parseInt(transTime[0])*60+parseInt(transTime[1]);
            if(nminutes >endTime){
              isWeekend = true;
            }
          }
       }
      else if(weekday_now ==1){
         len = weekDaySchedule["1"].length;
         if(len >0){
           transTime = weekDaySchedule["1"][0].split("-")[0].split(":");
           startTime = parseInt(transTime[0])*60+parseInt(transTime[1]);
           if(nminutes < startTime){
             isWeekend = true;
           }
         }
       }
    }
  }
  return isWeekend;
}
/**得到schedule分类的scheduleList
 * @scheduleCatId int schedule分类的ID
 * @scheduleList array 所有schedule分类的scheduleList
 * @return array
* */
function getScheduleList(scheduleCatId, scheduleList){
  var sch_list = [];
  for(var i=0;i < scheduleList.length;i++){
    if(scheduleCatId == scheduleList[i].schedule_cataid && (!scheduleList[i].status || scheduleList[i].status ==0) &&
      scheduleList[i].enable == 1 && (!scheduleList[i].non_tradable || scheduleList[i].non_tradable == 0)){
      sch_list.push(scheduleList[i]);
    }
  }
  return sch_list;
}

function sortScheduleTime(sch_time_list,obj){
  if(sch_time_list.length ==0){
    sch_time_list.push(obj);
  }
  else{
    var j;
    for(j=0;j <sch_time_list.length;j++ ){
      if(obj.start_time < sch_time_list[j].start_time){
        if(obj.end_time < sch_time_list[j].start_time){
          sch_time_list.splice(j,0,obj);
          break;
        }
        else if(obj.end_time == sch_time_list[j].start_time){
          sch_time_list[j].start_time = obj.start_time;
          break;
        }
        else {
          if(obj.end_time <= sch_time_list[j].end_time){
            sch_time_list[j].start_time = obj.start_time;
            break;
          }
          else{
            sch_time_list[j].start_time = obj.start_time;
            sch_time_list[j].end_time = obj.end_time;
            break;
          }
        }
      }
      else if(obj.start_time == sch_time_list[j].start_time){
        if(obj.end_time <= sch_time_list[j].end_time){
          break;
        }
        else{
            sch_time_list[j].end_time = obj.end_time;
            break;
        }
      }
      else{
        if(obj.start_time <=sch_time_list[j].end_time){
          if(obj.end_time <=sch_time_list[j].end_time){
            break;
          }
          else{
            sch_time_list[j].end_time = obj.end_time;
            break;
          }
        }
      }
    }
    if(j == sch_time_list.length){
      sch_time_list.push(obj);
    }
  }

}
/**得到对应每周交易时间
 * @scheduleList
 * **/
function weekDaySchedule(scheduleList,scheduleDelayMinutes,zone){
  var day_of_weeks ={"0":[],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[]};
  var r_day_of_weeks={"0":[],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[]};
  var day_of_week1,day_of_week2,day_of_week3,start_time,end_time,end_time_s;
  scheduleDelayMinutes = scheduleDelayMinutes?scheduleDelayMinutes:0;
  zone = zone?zone:0;
  for(var i=0;i<scheduleList.length;i++){
    day_of_week1 = scheduleList[i].day_of_week?scheduleList[i].day_of_week:0;
    if(day_of_week1<0 || day_of_week1 >6){continue;}
    start_time = (scheduleList[i].start_time?scheduleList[i].start_time:0)+scheduleDelayMinutes+zone*60;
    end_time = (scheduleList[i].end_time?scheduleList[i].end_time:0)+scheduleDelayMinutes+zone*60;
    if(start_time < end_time && (end_time - start_time) <=24*60){
      if(start_time < -1440){
        if(day_of_week1 >0){
          day_of_week2 = day_of_week1-1;
        }
        else{
          day_of_week2 =6;
        }
        if(day_of_week1 >1){
          day_of_week3 = day_of_week1-2;
        }
        else{
          if(day_of_week1 ==1){
            day_of_week3 =6;
          }
          else{
            day_of_week3 =5;
          }
        }
        if(end_time <=-1440){
          sortScheduleTime(day_of_weeks[day_of_week3],{start_time:(24*60)+(start_time%1440),end_time:(24*60)+(end_time%1440)});
        }
        else {
          sortScheduleTime(day_of_weeks[day_of_week3],{start_time:(24*60)+(start_time%1440),end_time:1440});
          sortScheduleTime(day_of_weeks[day_of_week2],{start_time:0,end_time:(24*60)+(end_time%1440)});
        }
      }
      else if(start_time >= -1440 && start_time <0){
        if(day_of_week1 >0){
          day_of_week2 = day_of_week1-1;
        }
        else{
          day_of_week2 =6;
        }
        if(end_time <= 0){
          sortScheduleTime(day_of_weeks[day_of_week2],{start_time:(24*60)+(start_time%1440),end_time:(24*60)+(end_time%1440)});

        }
        else {
          sortScheduleTime(day_of_weeks[day_of_week2],{start_time:(24*60)+(start_time%1440),end_time:1440});
          sortScheduleTime(day_of_weeks[day_of_week1],{start_time:0,end_time:end_time});
        }
      }
      else{
        if(end_time <=1440){
          sortScheduleTime(day_of_weeks[day_of_week1],{start_time:start_time,end_time:end_time});
        }
        else if(end_time >1440 && end_time <=2880){
          if(day_of_week1 <6){
            day_of_week2 =day_of_week1+1;
          }
          else{
            day_of_week2 = 0;
          }
          if(start_time <1440){
            sortScheduleTime(day_of_weeks[day_of_week1],{start_time:start_time,end_time:1440});
            sortScheduleTime(day_of_weeks[day_of_week2],{start_time:0,end_time:end_time%1440});

          }
          else{
            sortScheduleTime(day_of_weeks[day_of_week2],{start_time:start_time%1440,end_time:end_time%1440});
          }
        }
        else{
          if(day_of_week1 <6){
            day_of_week2 =day_of_week1+1;
          }
          else{
            day_of_week2 = 0;
          }
          if(day_of_week1 < 5){
            day_of_week3 =day_of_week1+2;
          }
          else{
            if(day_of_week1 ==5){
              day_of_week3 = 0;
            }
            else{
              day_of_week3 = 1;
            }
          }
          if(start_time >1440 && start_time <2880){
            sortScheduleTime(day_of_weeks[day_of_week2],{start_time:start_time%1440,end_time:1440});
            sortScheduleTime(day_of_weeks[day_of_week3],{start_time:0,end_time:end_time%1440});


          }
          else{
            sortScheduleTime(day_of_weeks[day_of_week3],{start_time:start_time%1440,end_time:end_time%1440});
          }
        }
      }
    }
  }
  for(var pro in day_of_weeks){
    for(var i=0;i < day_of_weeks[pro].length;i++){
      end_time_s = toHourMinute(day_of_weeks[pro][i].end_time);
      r_day_of_weeks[pro].push(toHourMinute(day_of_weeks[pro][i].start_time)+"-"+(end_time_s=="00:00"?"24:00":end_time_s));
    }
  }
  return r_day_of_weeks;
}
/*单个语言转换
* @languageList array 语言列表
* @lang string 语言
* @nameSpace string 命令空间
* */
function languageTrans(languageList,lang,nameSpace){
  var val = null;
  if(lang=='INA'){
    lang='en_US';
  }
  if(languageList){
      for (var j = 0; j < languageList.length; j++) {
          if (nameSpace== languageList[j].name_space && languageList[j].country == lang &&(!languageList[j].status || languageList[j].status==0)) {
              val = languageList[j].value;
              break;
          }
      }
  }
  return val;
}
/*多个语言转换
 * @languageList array 语言列表
 * @lang string 语言
 * @transList array 转换列表
 * @transPro string 转换属性
 * */
function languageTransList(languageList,lang,transList,transPro){
  var defer = $.Deferred();
  setTimeout(function(){
    for(var i=0;i <transList.length;i++ ){
      for (var j = 0; j < languageList.length; j++) {
        if (transList[i][transPro]== languageList[j].name_space && languageList[j].country == lang &&(!languageList[j].status || languageList[j].status==0)) {
          transList[i][transPro+"_lang"]= languageList[j].value;
          break;
        }
      }
      if(j==languageList.length){
        transList[i][transPro+"_lang"] = transList[i][transPro];
      }
    }
    defer.resolve();
  },0);
  return defer;
}

function groupSymbolExist(symbol,groupSymbolList,accountGroup) {
  var symbolObj = symbol?symbol:{};
  var groupSymbol = null;
  for(var i=0;i < groupSymbolList.length;i++){
    if( accountGroup && accountGroup.id==groupSymbolList[i].account_groupid && groupSymbolList[i].symbolid == symbol.id &&(!groupSymbolList[i].status || groupSymbolList[i].status ==0)){
      groupSymbol = groupSymbolList[i];
      break;
    }
  }
  if(groupSymbol){ //groupsymbol不为空，以groupsymbol为准
    symbolObj.volumes_min = groupSymbol.volumes_min;
    symbolObj.volumes_max = groupSymbol.volumes_max;
    symbolObj.volumes_step = groupSymbol.volumes_step;
    symbolObj.long_swap = groupSymbol.long_swap;
    symbolObj.short_swap = groupSymbol.short_swap;
    if(!groupSymbol.tradable  || !symbolObj.tradable||(groupSymbol.tradable == 2 && symbolObj.tradable == 3)||(groupSymbol.tradable == 3 && symbolObj.tradable == 2)){
      symbolObj.tradable = 0;
    }else if(groupSymbol.tradable == 1){
      symbolObj.tradabl = symbolObj.tradabl;
    }
    else{
      symbolObj.tradable = groupSymbol.tradable;
    }
    if(groupSymbol.volumes_sidemax){
      symbolObj.volumes_sidemax = groupSymbol.volumes_sidemax;
    }
    if(groupSymbol.no_display){
      symbolObj.no_display = groupSymbol.no_display;
    }
  }
  return symbolObj;
}


/*加密*/
function encrypt(num){
  var encodeStr = "ABCDEFGOPQRSTabcdefg_uvwxyzHIJKLMNUVWXYZ0152384967hijklmnopqrst";
  var b =[], m;
  while(num !=0){
    m = num % 63;
    num = parseInt(num /63);
    b.unshift(encodeStr.charAt(m));
  }
  return b.join('');
}

/*解密*/
function decrypt(s){
  var encodeStr = "ABCDEFGOPQRSTabcdefg_uvwxyzHIJKLMNUVWXYZ0152384967hijklmnopqrst";
  var exp63 = 1,num=0;
  for(var i=0;i < s.length-1;i++){
    exp63 = exp63*63;
  }
  var idx;
  for(var i =0; i < s.length;i++){
    idx = encodeStr.indexOf(s[i]);
    if(idx == -1){
      return num;
    }
    num +=exp63 * parseInt(idx);
    exp63 = exp63/63;
  }
  return num;
}

function getMaxUUid(dataList){
  var uuid =0;
  if(dataList){
    for(var i=0;i < dataList.length;i++){
      if(dataList[i].uuid >uuid){
        uuid = dataList[i].uuid;
      }
    }
  }
  return uuid;
}

function dataVersion(uuidObj,loginInfo,store){
  var data_version={};
  var lastLoginInfo =JSON.parse(localStorage.getItem("lastLoginInfo"));
  if(uuidObj){
    if(lastLoginInfo && loginInfo){
     /* if(lastLoginInfo.userId == loginInfo.userId){
          data_version.ver_account=uuidObj.account_list;
        }
        else{*/
        $.extend(uuidObj,{"account_list":0});
          store.commit("refreshStorageValue",{proName:"account_list",proValue:[]});
          store.commit("refreshStorageValue",{proName:"account_liencese_list",proValue:[]});
     // }
       if(lastLoginInfo.accountId == loginInfo.accountId){
         data_version.ver_symsub = uuidObj.symbolSubList;
          data_version.ver_symsubcata = uuidObj.symbolSubCatList;
         /* data_version.ver_order = uuidObj.orderList;
          data_version.ver_position =uuidObj.positionList;
          data_version.ver_deal = uuidObj.dealList;*/
        }
        else{
         $.extend(uuidObj,{"symbolSubList":0,"symbolSubCatList":0});
          store.commit("refreshStorageValue",{proName:"symbolSubList",proValue:[]});
          store.commit("refreshStorageValue",{proName:"symbolSubCatList",proValue:[]});
        }
        $.extend(uuidObj,{"dealList":0,"orderList":0,"positionList":0});
        store.commit("refreshStorageValue",{proName:"dealList",proValue:[]});
        store.commit("refreshStorageValue",{proName:"orderList",proValue:[]});
        store.commit("refreshStorageValue",{proName:"positionList",proValue:[]});
        if(lastLoginInfo.accountGroupId == loginInfo.accountGroupId){
          data_version.ver_accgroup_symcata= uuidObj.acGroupSymbolCatList;
          data_version.ver_grpsym = uuidObj.groupSymbolList;//symbolid
          data_version.ver_grpsymcata = uuidObj.groupSymbolCatList;
        }
        else{
          $.extend(uuidObj,{"acGroupSymbolCatList":0, "groupSymbolList":0,"groupSymbolCatList":0});
          store.commit("refreshStorageValue",{proName:"acGroupSymbolCatList",proValue:[]});
          store.commit("refreshStorageValue",{proName:"groupSymbolList",proValue:[]});
          store.commit("refreshStorageValue",{proName:"groupSymbolCatList",proValue:[]});
        }
      if(lastLoginInfo.companyid == loginInfo.companyid){
        data_version.ver_symhot= uuidObj.symbolHotList;
        data_version.ver_accgroup = uuidObj.account_group_list;
      }
      else{
        $.extend(uuidObj,{"symbolHotList":0,"account_group_list":0});
        store.commit("refreshStorageValue",{proName:"symbolHotList",proValue:[]});
        store.commit("refreshStorageValue",{proName:"account_group_list",proValue:[]});
      }
      store.commit("refreshStorageValue",{proName:"uuidObj",proValue:uuidObj });
    }
    data_version.ver_sym = uuidObj.symbolList;
    data_version.ver_symcata = uuidObj.symbolCatList;
    data_version.ver_company=0;
    data_version.ver_margin_set = uuidObj.symbolMarginList;//margin_type
    data_version.ver_holiday = uuidObj.holidayList;
    data_version.ver_holiday_cata = uuidObj.holidayCatList;
    data_version.ver_schedule = uuidObj.scheduleList;
    data_version.ver_schedule_cata = uuidObj.scheduleCatList;
    data_version.ver_holiday_margin = uuidObj.holidayMarginList;
    data_version.ver_schedule_margin = uuidObj.scheduleMarginList;
    data_version.ver_language = uuidObj.languageList; //name_space country
    data_version.ver_sym_label = uuidObj.symbolLabelList; //symbolid
    data_version.ver_quote_delay = uuidObj.quoteDelayList;
    data_version.ver_kline_repair= uuidObj.klineRepairList;
    data_version.ver_eod_time = uuidObj.eodTimeList;
    data_version.ver_secure_dev = uuidObj.secureDevList;
    /* data_version.ver_room_cost = 0 ;
     data_version.ver_room_recharge = 0 ;*/
  }
  return data_version;
}

/**
 * toFixed 当四舍五入保留的位数大于小数点位数，修改toFixed方法
 * @param {*} number
 * @param {*} precision  四舍五入保留的位数
 */
function toFixed(number, precision) {
    var str = number + '';
    var len = str.length;
    var dotArr = str.split('.');
    var dotLen = dotArr.length>1 ? dotArr[1].length:0;
    var last = str.substr(len-1, len);
    if (dotLen>precision && last == '5') {
        last = '6';
        str = str.substr(0, len-1) + last;
        return (str - 0).toFixed(precision)
    } else {
        return number.toFixed(precision)
    }
}
function boCallRequest(param,languageList,lang,wordsInfo,async){
    return new Promise(function(resolve,reject){
        $.ajax2(window.serverUrl + "/bo/call", {
            type: "post",
            data:param,
            async:async,
            success: function (data) {
                try{
                    if(data.ret == 0){
                        if(data.msg){
                            var msg = JSON.parse(data.msg);
                            if(msg.code == "SUCCESS" && msg.result &&msg.result.newRet == "OK"){
                                var resultData =msg.result;
                                resolve(resultData);
                            }
                            else{
                                var errorCode = languageErrorCode(languageList,lang,msg.result.newRet);
                                if(errorCode != msg.result.newRet){
                                    reject(errorCode);
                                }
                                else{
                                    reject(msg.result.newComment);
                                }
                            }
                        }else{
                            reject(wordsInfo.netWork_error);
                        }
                    }
                    else{
                        reject(serverErrorCode(data.ret,wordsInfo));
                    }
                }catch(e) {
                    reject(wordsInfo.netWork_error);
                    console.log(e);
                }
            },
            error:function(){
                reject(wordsInfo.netWork_error);
            }
        });
    });
}
export default {
  "getRequest":getRequest,
  "getRequest2":getRequest2,
  "dateFormat":dateFormat,
  "decimalPoint":decimalPoint,
  "getLangPro":getLangPro,
  "getLang":getLang,
  "requestError":requestError,
  "languageErrorCode":languageErrorCode,
  "serverErrorCode":serverErrorCode,
  "uploadFile":uploadFile,
  "uploadImage":uploadImage,
  "ajaxFormUploadFile":ajaxFormUploadFile,
　"updateCustomerFiles":updateCustomerFiles,
  "input_placeHolder_init":input_placeHolder_init,
  "outputMoney":outputMoney,
  "Base64":Base64,
  "severBase64":severBase64,
  "disabledBtn":disabledBtn,
  "unDisabledBtn":unDisabledBtn,
  "disabledStyleBtn":disabledStyleBtn,
  "unDisabledStyleBtn":unDisabledStyleBtn,
  "add":add,
  "sub":sub,
  "mul":mul,
  "div":div,
  "Rem":Rem,
  "isOutVolumeSection":isOutVolumeSection,
  "getAccountSymbolCate":getAccountSymbolCate,
  "getSection":getSection,
  "getFirstPrice":getFirstPrice,
  "getTurnPrice":getTurnPrice,
  "getPriceSection":getPriceSection,
  "getYinSection":getYinSection,
  "getSunSection":getSunSection,
  "getSectionDown":getSectionDown,
  "outRangePrice":outRangePrice,
  "lotDigits":lotDigits,
  "formatDigits":formatDigits,
  "priceSpread":priceSpread,
  "spreadSum":spreadSum,
  "getSymbolCat":getSymbolCat,
  "ValidateSchedule":ValidateSchedule,
  "deepCount":deepCount,
  "calculateMA":calculateMA,
  "calculateAverage":calculateAverage,
  "calculateBBI":calculateBBI,
  "calculateBOLL":calculateBOLL,
  "calculateMIKE":calculateMIKE,
  "calculatePBX":calculatePBX,
  "calculateMACD":calculateMACD,
  "calculateRSI":calculateRSI,
  "calculateARBR":calculateARBR,
  "calculateKDJ":calculateKDJ,
  "calculateCCI":calculateCCI,
  "calculateKD":calculateKD,
  "calculateATR":calculateATR,
  "calculateBIAS":calculateBIAS,
  "calculateDKBY":calculateDKBY,
  "calculateLWR":calculateLWR,
  "calculateQHLSR":calculateQHLSR,
  "calculateWR":calculateWR,
  "getWeekKLineData":getWeekKLineData,
  "getMonthKLineData":getMonthKLineData,
  "getTodayData":getTodayData,
  "getChartData":getChartData,
  "getSymbol":getSymbol,
  "getSymbolAssignID":getSymbolAssignID,
  "getCashDeposit":getCashDeposit,
  "judgeSymbolCata":judgeSymbolCata,
  "getZoneTime":getZoneTime,
  "getCurrencyPair":getCurrencyPair,
  "getRate":getRate,
  "commission":commission,
  "getPercent":getPercent,
  "judgeCommissionType":judgeCommissionType,
  "getCommission":getCommission,
  "toHourMinute":toHourMinute,
  "getMarginLevels":getMarginLevels,
  "judgeIsWeekend":judgeIsWeekend,
  "getScheduleList":getScheduleList,
  "weekDaySchedule":weekDaySchedule,
  "languageTrans":languageTrans,
  "languageTransList":languageTransList,
  "groupSymbolExist":groupSymbolExist,
  "encrypt":encrypt,
  "decrypt":decrypt,
  "getMaxUUid":getMaxUUid,
  "dataVersion":dataVersion,
  "toFixed":toFixed,
  "boCallRequest":boCallRequest
}
