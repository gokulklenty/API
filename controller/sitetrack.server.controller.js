var SiteTrackModel = require('../models/sitetrack.server.model');

exports.postDetails = function (req,res) {
  var Obj = req.body;
  var ip = req.connection.remoteAddress;
  if (ip.length< 15){
     ip = ip;
  }else{
     var nyIP = ip.slice(7);
     ip = nyIP;
  }
  var arr = Obj;
  arr.ipDetais = ip;
  SiteTrackModel.findByIdAndUpdate(Obj.id,{$push:{'visitArray':arr}},function (err) {
    if(err) console.log(err);
    console.log();
    res.send('true');

  });

  console.log(req.body);
  // res.send({"status":true})
};

exports.getTrackingId = function (req,res) {
  var Obj = req.body;
  var today = new Date();

  var siteData = new SiteTrackModel({
      ownerId: Obj.ownerId
  });
  siteData.save(function (err,data) {
    if(err) console.log(err);
    res.send({"id":data._id})
    });
}
