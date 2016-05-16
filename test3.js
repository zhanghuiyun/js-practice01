// 01： 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

/*//只统计元素找到的一个位置
function find(arr, item) {
  var arr=document.getElementById(arr).value.trim().split(",");
  var item=document.getElementById(item).value.trim();
  alert(arr.indexOf(item));
}*/

//返回相同元素在数组中的位置
function find(arr, item) {
  var index=[];
  var arr=document.getElementById(arr).value.trim().split(",");
  var item=document.getElementById(item).value.trim();
  console.log(arr);
  if(arr.indexOf(item)!=-1){
    for(var i=0,len=arr.length;i<len;i++){
      if(item==arr[i]){
        index.push(i);
      }
  }
    alert(index);
  }else{
    alert(-1);
  }
  }

// 02： 计算给定数组 arr 中所有元素的总和
function sum(arr) {
  var count=0;
  var arr=document.getElementById(arr).value.trim().split(",");
  for(i=0,len=arr.length;i<len;i++){
     count += parseInt(arr[i]);
  }
  alert(count);
}

//03： 统计数组 arr 中值等于 item 的元素出现的次数 
function count(arr, item) {
    var arr=document.getElementById(arr).value.trim().split(",");
    var item=document.getElementById(item).value.trim();
    var count = 0;
    for(var i = 0;i < arr.length;i ++){
        if(arr[i] == item) 
        count++;
    }
    return alert(count++);
}

// 04: 在页面显示当前时间，精确到秒数，且不断变化
function nowTime(){
  var now=new Date(),
      year=now.getFullYear(),
      month=now.getMonth(),
      day=now.getDate(),
      week=now.getDay(),
      hours=now.getHours(),
      minutes=now.getMinutes(),
      seconds=now.getSeconds();
  var weekArr=["日","一","二","三","四","五","六"];
      week=weekArr[week];
  var month=parseInt(month)+1;  
  //对单位的数值补零
  month=parseInt(month)<10 ? "0"+month:month;
  day=parseInt(day)<10 ? "0"+day:day;
  hours=parseInt(hours)<10 ? "0"+hours:hours;
  minutes=parseInt(minutes)<10 ? "0"+minutes:minutes;
  seconds=parseInt(seconds)<10 ? "0"+seconds:seconds;
  var date=year+"-"+month+"-"+day;
  var week=week;
  var time=hours+":"+minutes+":"+seconds;
  document.getElementById("date").innerHTML=date;
  document.getElementById("time").innerHTML=time;
  document.getElementById("week").innerHTML=week;
  window.setTimeout(nowTime,1000);
}







