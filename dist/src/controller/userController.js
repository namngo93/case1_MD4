"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
class HomeController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            let users = await UserService_1.default.getAll();
            res.render('users/login', { users: users });
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkUser(req.body);
            if (user.role === 'Admin') {
                req.session.User = user;
                res.redirect(301, '/home');
            }
            else if (user.role === 'member') {
                req.session.User = user;
                res.redirect(301, '/homeUser');
            }
            else {
                res.redirect('/users/login');
            }
        };
        this.userService = UserService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=userController.js.map