var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LinkTrackingSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	company: String,
	mailtrackRef: {
		type: Schema.Types.ObjectId,
		ref: 'mailtrackingdetails'
	},
	redirectUrl: String,
	text: String

});



mongoose.model('linktrackingdetails',LinkTrackingSchema);
