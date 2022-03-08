const express = require('express')
// jwt = require('jsonwebtoken')
const router = express.Router()
const userControllerRouter = require('../Controllers/usercontrollers')
const mailforce = require('../mail/Controllers/nodeControllers')

router.get('/user',userControllerRouter.userDataShow)
router.post('/user',userControllerRouter.userDataSave)
router.put('/:id',userControllerRouter.userDataUpdate)
router.patch('/:id',userControllerRouter.userDataUpdate)
router.delete('/:id',userControllerRouter.userDataRemove)


// * -----------------------------------------------------------------------------------------

router.post('/mail',mailforce.mailToPerson)

// * ------------------------------------------------------------------------------------------

//-// ? Login and Protected Link Pass with Tokens  -----------------------------------------------

// router.get('/protected', workingToken, (req, res) => {
//     jwt.verify(req.loginToken, '!@#$%TRee', (err, data) => {
//         if (err) {
//             res.sendStatus(403)
//         } else {
//             res.json({
//                 message: "Happy Hunting! Mr. Wick!",
//                 data: data
//             })
//         }
//     })
// })

// function workingToken (req, res, next) {
//     const bearerHeader = req.headers["authorization"]
//     if (typeof bearerHeader !== 'undefined') {
//         const bearer = bearerHeader.split(' ')
//         const bearerToken = bearer[1]
//         req.loginToken = bearerToken
//         next()
//     } else {
//         res.sendStatus(403)
//     }
// }

// router.post('/login', (req, res) => {
//     Auth Body
//     const loginUser = { email: "johnathonwick@aol.com", password: "fortis-fortuna-adiuvat" }
//     const loginToken = jwt.sign({ loginUser }, '!@#$%TRee')
//     res.json({
//         loginToken: loginToken
//     })
// })

module.exports = router