"use strict";
// import mongoose from 'mongoose';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const MONGO_URI = 'mongodb://bcoderAdmin:bcoderAdmin123@199.192.21.220:27017/boilerplate-api-ts?authSource=admin';
// mongoose.connect(MONGO_URI);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });
// export default mongoose;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = 'mongodb://bcoderAdmin:bcoderAdmin123@199.192.21.220:27017/boilerplate-api-ts?authSource=admin';
const connectToDatabase = async () => {
    try {
        mongoose_1.default.connect(MONGO_URI);
        const db = mongoose_1.default.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', () => {
            console.log('Connected to MongoDB');
        });
        // console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
exports.default = connectToDatabase;
//# sourceMappingURL=mongoose.config.js.map