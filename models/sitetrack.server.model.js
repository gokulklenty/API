var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SiteTrackSchema   = new Schema({
    ownerId: Schema.Types.ObjectId,
    pId: Schema.Types.ObjectId,
    pEmail: String,
    Company: String,
    visitArray:[{
      time: Date,
      duration: Number,
      ipDetais:String,
      urlVisited: String
    }]
});

module.exports = mongoose.model('sitetrackdetails', SiteTrackSchema);
