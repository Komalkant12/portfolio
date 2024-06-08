const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("../routes/routes");

// Signup route
exports.signup = async (req, res) => {
    const { name, email, password } = req.body; 

    let user;
    try {
        // Checking if user already exists
        user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "User already exists" });

        // Hashing the password
        const securePassword = await bcrypt.hash(password, 10);

        // Creating new user
        user = await User.create({
            name,
            email,
            password: securePassword,
        });

        // Saving user to db
        await user.save();

        return res 
            .status(201)
            .json({ success: true, message: "User created successfully" });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Checking if user exists
        let user = await User.findOne({ email });

        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "Please sign up" });
        }

        // Check if password matches
        const comparePassword = await bcrypt.compare(password, user.password);

        // If password does not match
        if (!comparePassword) {
            return res
                .status(400)
                .json({ success: false, message: "Incorrect credentials" });
        }

        // Check if token cookie exists in the request
        const existingToken = req.cookies.token;

        if (existingToken) {
            res.clearCookie("token");
        }

        // Creating a token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30s",
        });

        // Sending token cookie
        res.cookie("token", token, {
            path: "/",
            httpOnly: true, 
            expires: new Date(Date.now() + 1000 * 30),  // Expires in 30s
            sameSite: "lax",
        });

        return res.status(200).json({ success: true, message: "Logged in" });
        
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.logout = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ success: true, message: "Logout successfully" });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
