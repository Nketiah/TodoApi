"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const morgan_1 = __importDefault(require("morgan"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
// import accountRoutes from './routes/accountRoutes'
//Initialize express
const app = (0, express_1.default)();
//Load middleware
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
//Accept incoming request data
//regular middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//CORS
// const corsOptions = {
//  origin: 'http://localhost:3000',
//  optionsSuccessStatus: 200 
// }
// app.use(cors(corsOptions))
//Registering Routes
app.get('/', (req, res) => {
    res.send('API running...');
});
app.use('/api/v1/auth', usersRoutes_1.default);
//app.use('/api/v1/account', accountRoutes)
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`));
