import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    studentsLimit: {
        type: Number,
        required: true
    },
    students: {
        type: [String]
    }
});

export default mongoose.model("Session", SessionSchema);