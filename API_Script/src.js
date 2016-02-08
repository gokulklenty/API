function post(url, data, headers) {

  return Promise.resolve(
      $.ajax({
          url: url,
          datatype:"json",
          type: "POST",
          data: data,
          headers: headers
      })
  );
};
var inT, outT, pid;
window.addEventListener('load',function () {
  inT = new Date();
  console.log('loaded');
  var x = document.cookie;
  if(!x){
    console.log(cookie);
     post('https://sleepy-everglades-45938.herokuapp.com/getTrackingId',cookie,null).then(function(data,err){
       console.log(data);
       document.cookie ='"klenty_API_id":'+data.id;
     });
  }
});
window.addEventListener('beforeunload',function () {
  outTime = new Date();
  duration = outTime- inTime;
  url = window.location.href;
  console.log('unloaded');
  var x = document.cookie;
  var cookie = JSON.parse('{"name":"gokul"}')
  if(x){
    console.log(cookie);
     post('https://sleepy-everglades-45938.herokuapp.com/data',cookie,null).then(function(data,err){
       console.log(data);
     });
  }


});
