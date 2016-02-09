var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MailTrackingSchema = new Schema({
	username: String,
	company: String,
	uniqueMailId : String,
	sentDate : {
		type: Date,
		default: Date.now,
	},
	trackingDetails: [{
		date:  {
			type: Date,
			default: Date.now
		},
		ipdetails: {},
		deviceType: String,
		eventType : String,
	}],
	latestEvent: Date,
	recipients: [],
	subject: String,
	flgActiveStatus: Boolean,
	openCount: {
		type: Number,
		default: 0
	},
	linkCount: {
		type: Number,
		default: 0
	},
	replyCount: {
		type: Number,
		default: 0
	},
	templateId: String,
	originalIp: String,
	rejectedCount: Number,
	SFTaskID:String

});


mongoose.model('mailtrackingdetails', MailTrackingSchema);
