const
    mongoose =  require('mongoose'),
    Schema = mongoose.Schema;

let taskSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    completed: {
        type: Boolean,
        default: false
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Task', taskSchema);