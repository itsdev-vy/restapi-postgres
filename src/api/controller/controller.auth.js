import db from '../../models/index';

const User = db.Users;


export const Test = async (req, res) => {
    res.send("Hello World!")
}

export const postUsers = async (req, res) => {
    try {
        const result = await User.create(req.body);
        return res.send({ message: "User created", data: result });
    } catch (err) {
        return res.status(500).send({ error: err });
    }
};

export const getUsers = async (req, res) => {
    try {
        const result = await User.findAll();
        return res.status(200).send({
            message: "result send",
            data: result
        });
    } catch (err) {
        return res.status(500).send({ error: err });
    }
};

export const patchUsers = async (req, res) => {
    try {
        const result = await User.update(req.body, { where: { id: req.body.id } });
        const resultData = await User.findOne({ where: { id: req.body.id } })
        return res.send({ message: "User updated", data: resultData });
    } catch (err) {
        return res.status(500).send({ error: err });
    }
};

export const deleteUsers = async (req, res) => {
    try {
        const resultData = await User.findOne({ where: { id: req.body.id } })
        if (!resultData) {
            return res.status(404).send({ message: "User not found" });
        }
        await resultData.destroy();
        return res.send({ message: "User deleted", data: resultData });
    } catch (err) {
        return res.status(500).send({ error: err });
    }
};