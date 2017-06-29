export default function(Vue){
  // 时间格式化
  Vue.filter('tTime',function(t){
    if(t){
      let time=new Date(t);
      return (time.getMonth()+1)+'月'+time.getDate()+'日, '+time.getHours()+':'+time.getMinutes();
    }else{
      return '';
    }
  })
}
