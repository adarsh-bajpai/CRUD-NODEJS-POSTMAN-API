const nodemailer = require('nodemailer')

let transport = nodemailer.createTransport(
	{
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		auth: {
			user: '-----Your EMAIL-----',
			pass: "----Your Password ----"
		}
	}
)

const mailToPerson = (req, res) => {

	console.log('<<== OUTPUT ==>>', req.body)

	try {
		let { senderEmail, receiverEmail, subject, text } = req.body
		let mailOptions = {
			from: `${senderEmail}`,
			to: `${receiverEmail}`,
			subject: `${subject}`,
			text: `${text}`
		}

		transport.sendMail(mailOptions, (err, data) => {
			if (err)
				console.log('Error', err)
			else
				console.log('Email Sent!', data)
			res.send({
				Message: 'Email Sent Successfully!',
				Data: data
			})
		})

	}
	catch (error) {
		res.json(error)
	}
}

module.exports = {
	mailToPerson
}