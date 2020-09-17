const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    time: { type: [Number], required: true },
    date: { type: String, required: true },
    peanutGallery: [String],
    meetingName: String,
    agendaBody: String
}, {
    timestamps: true
})

const roomSchema = new Schema({
    name: { type: String, required: true },
    occupancy: { type: Number, required: true },
    schedule: [scheduleSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Room', roomSchema);