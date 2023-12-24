"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_config_1 = __importDefault(require("./config/express.config"));
const user_routes_1 = require("./routes/user.routes");
// Define routes
express_config_1.default.use('/api/users', user_routes_1.userRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
express_config_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map