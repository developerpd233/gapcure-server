"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_controller_1 = require("../controller/message.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.get('/messages/:id', auth_middleware_1.CheckAuthState, message_controller_1.Messages);
router.post('/messages', auth_middleware_1.CheckAuthState, message_controller_1.CreateMessage);
router.put('/messages/:id', auth_middleware_1.CheckAuthState, message_controller_1.readMessage);
exports.default = router;
