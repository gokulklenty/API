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
    dataObj ={
      ownerId:ownerId
    };
    // console.log(cookie);
     post('https://sleepy-everglades-45938.herokuapp.com/getTrackingId',dataObj,null).then(function(data,err){
       console.log(data);
       document.cookie ='"klenty_API_id":"'+data.id.toString()+'"';
     });
  }
});
// beforeunload
window.addEventListener('click',function () {
  outT = new Date();
  duration = outT- inT;
  url = window.location.href;
  console.log('unloaded');
  var x = document.cookie;
  var cookie = JSON.parse('{'+ x +'}')
  if(x){
    console.log(cookie);
     post('https://sleepy-everglades-45938.herokuapp.com/data',cookie,null).then(function(data,err){
       console.log(data);
     });
  }


});