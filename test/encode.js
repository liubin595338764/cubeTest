/**
 * Created by 456 on 2017/10/25.
 */
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

console.log("1:"+encrypt(1));
console.log("1001:"+encrypt(1001));
console.log("1002:"+encrypt(1002));
console.log("21011:"+encrypt(21011));
console.log("2:"+encrypt(2));
console.log("11001:"+encrypt(11001));
console.log("21101:"+encrypt(21101));
console.log("21001:"+encrypt(21001));
console.log("21201:"+encrypt(21201));
console.log("21301:"+encrypt(21301));
console.log("21302:"+encrypt(21302));
console.log("21306:"+encrypt(21306));
console.log("21501:"+encrypt(21501));
console.log("21502:"+encrypt(21502));
console.log("21601:"+encrypt(21601));
console.log("21701:"+encrypt(21701));
console.log("21801:"+encrypt(21801));
console.log("31001:"+encrypt(31001));
console.log("31101:"+encrypt(31101));
console.log("31102:"+encrypt(31102));
console.log("41002:"+encrypt(41002));
console.log("52401:"+encrypt(52401));
console.log("52402:"+encrypt(52402));
console.log("52403:"+encrypt(52403));

console.log("41003:"+encrypt(41003));
console.log("41005:"+encrypt(41005));
console.log("41907:"+encrypt(41907));
console.log("72006:"+encrypt(72006));
console.log("112010:"+encrypt(112010));
console.log("51001:"+encrypt(51001));

console.log(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test("dana.deng@ix.digit.com"));





