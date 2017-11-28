export function formatDate(date, fmt) {
  // 匹配年
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  };
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    };
  }

  return fmt;
};
function padLeftZero(str) {
	return ('00' + str).substr(str.length);
};

export function getPublishTime(ptime,publishDayLimit){
  var nowTime = Date.parse(new Date());
  ptime = ptime+"000";
  publishDayLimit = publishDayLimit||9;

  var passTime = nowTime-parseInt(ptime);
  var days = Math.floor(passTime/1000/60/60/24);
  var hours = Math.floor(passTime/1000/60/60%24);
  var minutes = Math.floor(passTime/1000/60%60);

  var returnStr = '';
  //发布天数大于9
  if(days>=publishDayLimit){
    var ptimeObj = new Date();
    ptimeObj.setTime(parseInt(ptime));
    let date = ptimeObj.toLocaleDateString().replace(/\//g,'-')
    let time = ptimeObj.toTimeString().substr(0,5);
    returnStr = date+' '+time;
    return returnStr;
  }

  days ?
    returnStr = `${days}天${hours}时前` :
    hours ?
      returnStr = `${hours}时${minutes}分前` :
      returnStr = `${minutes}分前`;

  return returnStr;
};
