"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = 'mongodb://bcoderAdmin:bcoderAdmin123@199.192.21.220:27017/boilerplate-api-ts?authSource=admin';
mongoose_1.default.connect(MONGO_URI);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
exports.default = mongoose_1.default;
//# sourceMappingURL=mongoose.config.js.map