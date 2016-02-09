function post(url, data, headers) {

  return Promise.resolve(
      $.ajax({
          url: url,
          crossDomain: true,
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
    var now = new Date();
    now.setYear(now.getFullYear()+1);
    console.log(now.toUTCString());
    dataObj ={
      ownerId:ownerId
    };
    // console.log(cookie);
     post('https://sleepy-everglades-45938.herokuapp.com/getSiteTrackingId',dataObj,null).then(function(data,err){
       console.log(data);
      //  $.cookie("klenty_API_id", data.id.toString(), { expires: 1000 });
       document.cookie ='"klenty_API_id":"'+data.id.toString()+'"; expires='+now.toUTCString();
     });
  }else{
    var cookie = JSON.parse('{'+ x +'}');
    if(!cookie.pEmail){
      var dataObj ={
        id: cookie.klenty_API_id,
        ownerId: ownerId
      }
      post('https://sleepy-everglades-45938.herokuapp.com/findSiteUser',dataObj,null).then(function(data,err){
        console.log(data);
        if(data.pEmail)
          document.cookie ='"klenty_API_id":"'+dataObj.id.toString()+'","pEmail":"'data.pEmail+'"; expires='+now.toUTCString();

      });
    }
  }
});
// beforeunload
window.addEventListener('click',function () {
  outT = new Date();
  var x = document.cookie;
  var cookie = JSON.parse('{'+ x +'}');
  var duration = outT- inT;
  var url = window.location.href;
  var dataObj ={
    id: cookie.klenty_API_id,
    time: inT,
    duration: duration,
    urlVisited: url
  }
  console.log('unloaded');

  if(x){
    console.log(cookie);
     post('https://sleepy-everglades-45938.herokuapp.com/putSiteTrackingDetails',dataObj,null).then(function(data,err){
       console.log(data);
     });
  }


});
