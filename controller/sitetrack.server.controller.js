// var SiteTrackModel = require('../models/sitetrack.server.model.js')

exports.postDetails = function (req,res) {
  // var Obj = req.body;
  // var today = new Date();
  //
  // if(Obj.event=='load'){
  //   if(Obj.id){
  //     SiteTrackModel.findByIdAndUpdate(Obj.id,{$set:{
  //
  //     }},function (err) {
  //       if(err) console.log(err);
  //     });
  //   }
  // }else if (Obj.event=='unload') {
  //   SiteTrackModel.findByIdAndUpdate(Obj.id,{$set:{
  //     'live':false,
  //     'lastIp':ip,
  //     'lastSeen': ,
  //     'lastSpendTime': ,
  //     'totalSpendTime':// if(Obj.event=='load'){
  //   if(Obj.id){
  //     SiteTrackModel.findByIdAndUpdate(Obj.id,{$set:{
  //       'live':true,
  //       'lastIp':ip
  //     }},function (err) {
  //       if(err) console.log(err);
  //     });
  //   }
  // }else if (Obj.event=='unload') {
  //   SiteTrackModel.findByIdAndUpdate(Obj.id,{$set:{
  //     'live':false,
  //     'lastIp':ip,
  //     'lastSeen': ,
  //     'lastSpendTime': ,
  //     'totalSpendTime':
  //   }},function (err) {
  //     if(err) console.log(err);
  //   });
  // }
  //   }},function (err) {
  //     if(err) console.log(err);
  //   });
  // }
  console.log(req.body);
  res.send('hi');
};
