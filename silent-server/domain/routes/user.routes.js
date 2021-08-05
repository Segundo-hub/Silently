const { hash, compare } = require('bcryptjs')
const User = require('../../Models/model/user.model')
const { createJWT } = require('../auth/jwt')
const jwt = require('jsonwebtoken')

module.exports.verifyUser = async (req, res) => {
	try {
		const { username, password } = req.body
		const user = await User.findOne({ username })

		if (!user) res.status(404).send({ error: 'Your user does exist' })

		const isMatch = await compare(password, user.password)

		if (!isMatch) res.status(404).send({ error: 'Password Error' })
		//  JWT VERIFY
		let access_token = createJWT(user.email, user._id, '1h')

		jwt.verify(access_token, process.env.JWT_SECRET, (err, decode) => {
			if (err) {
				res.json({ err })
			}
			if (decode) {
				const model = {
					username: user.username,
					email: user.email,
					_id: user._id,
				}
				res.status(200).json({ access: true, token: access_token, content: model })
			}
		})
	} catch (error) {
		res.status(400).json({ msg: 'Internal Server Error', error })
	}
}

module.exports.createUser = async (req, res) => {
	const { username, password } = req.body
	const pass = await hash(password, 10)
	const user = new User({
		username,
		password: pass,
	})
	await user.save()
	res.status(202).send({ done: true })
}
