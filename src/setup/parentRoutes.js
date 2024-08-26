import authRoute from "../api/routes/route.auth.js";

export default function (app) {
    app.get('/', (req, res) => {
        res.send('Hello, World!');
    })
    //register routes here
    app.use("/auth", authRoute);
}