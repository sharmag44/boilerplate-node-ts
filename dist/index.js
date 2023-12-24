"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_config_1 = __importDefault(require("./config/express.config"));
const user_routes_1 = require("./routes/user.routes");
const mongoose_config_1 = __importDefault(require("./config/mongoose.config"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions_1 = __importDefault(require("./swaggerOptions"));
// Define routes
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_1.default);
express_config_1.default.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
express_config_1.default.use('/api/users', user_routes_1.userRoutes);
express_config_1.default.get("/", async (req, res) => {
    return res.send({ isSuccess: true, message: "Code Working" });
});
(0, mongoose_config_1.default)();
// Start the server
const PORT = process.env.PORT || 3000;
express_config_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map