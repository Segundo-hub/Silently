const jwt = require("jsonwebtoken")
const userModel = require("./../models/user.model")

module.exports.isAuthenticated = async (req, res, next) => {
	try {
		let token
		if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
			token = req.headers.authorization.split(" ")[1]
		}
		if (!token) {
			return next(new Error("You are not authorized to enter this route"))
		}
		const decode = jwt.verify(token, process.env.JWT_SECRET)
		const user = await userModel.findById(decode.userId)
		req.user = user
		next()
	} catch (error) {
		res.send({ msg: "Several Internal Error" })
	}
}

module.exports.createJWT = (email, userId, duration) => {
	const payload = {
		email,
		userId,
		duration,
	}
	return jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: duration,
	})
}
