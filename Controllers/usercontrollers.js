const UserSchema = require('../Models/user')

// * This is the Saving Functionality of the user Details

const userDataSave = async (req, res, next) => {
	const user = new UserSchema({
		name: req.body.name,
		email: req.body.email,
		des: req.body.des,
		mobile: req.body.mobile,
		age: req.body.age,
		gender: req.body.gender
	})
	// ? Saving the Functionality by SAVE in database 
	await user.save()
		.then(response => {
			console.log('---------', response),
				res.json({
					text: `Congrats! Your Data is Saved!, You can see the Data which you have entered here!`,
					Result: response
				})
		})
		.catch(error => {
			res.json({
				Result: error
			})
		})
}

// * This is the Remove Functionality of the user Details

const userDataRemove = async (req, res, next) => {
	let id = req.params.id

	// ? Remove the Functionality by FIND_BY_ID_AND_REMOVE in database

	await UserSchema.findByIdAndRemove({ _id: id })
		.then(resposne => {
			res.json({
				text: `Your Data is Removed Completely!`
			})
		})
		.catch(error => {
			res.json({
				sucess: 0,
				message: value.error.details[0].message
			})
		})
}

// * This is the Show Functionality of the user Details

const userDataShow = async (req, res, next) => {

	// ? Show the Functionality by FIND in database

	await UserSchema.find()
		.then((response) => {
			res.json({
				Text: `Here are The List you can Check On!!!`,
				Result: response
			})
		})
		.catch(error => {
			res.json({
				Result: error
			})
		})
}

// * This is the Update Functionality of the user Details

const userDataUpdate = async (req, res, next) => {

	console.log(req.params.id, "-----")

	let id = req.body.id

	// ! Update the UserDataSave

	let UpdateUserData = {
		name: req.body.name,
		email: req.body.email,
		des: req.body.des,
		mobile: req.body.mobile,
		age: req.body.age,
		gender: req.body.gender
	}
	await UserSchema.findByIdAndUpdate({ _id: id }, { $set: UpdateUserData })
		.then(response => {
			res.json({
				Text: `Your Data has been Updated, Please do Check Below Your Data !!!`,
				Result: response
			})
		})
		.catch(error => {
			res.json({
				Result: error
			})
		})

}

// * This is the Update Functionality of the user Details [PUT]

const userSingleUpdate = async (req, res, next) => {

	const id = req.params.id
	// ?  console.log('------ID-----', id) 

	await UserSchema.findByIdAndUpdate((id), {
		$set: {
			name: req.body.title,
			email: req.body.description,
			des: req.body.des,
			mobile: req.body.mobile,
			age: req.body.age,
			gender: req.body.gender
		}
	})
		.then(data => res.json({
			Message: `Successfully Updated!`,
			Result: data
		}))
		.catch(err => res.json({
			Message: err
		}))

}

module.exports = {
	userDataSave,
	userDataRemove,
	userDataShow,
	userDataUpdate,
	userSingleUpdate
}