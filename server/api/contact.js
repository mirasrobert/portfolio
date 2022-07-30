const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

// FOR USING GMAIL SMTP

/*
     As mentioned in the comments and directly quoted from google:

    `On May 30 2022, you may lose access to apps that are using less secure sign-in technology
      So the bottom code will probably stop working with Gmail. The solution is to enable 2-Step Verification 
      and generate Application password, then you can use the generated password to send emails using nodemailer.
      To do so you need to do the following:`

    1. Go to your google account at https://myaccount.google.com/
    2. Go to Security
    3. In "Signing in to Google" section choose 2-Step Verification - here you have to verify yourself, in my case it was with phone number and a confirmation code send as text message. After that you will be able to enabled 2-Step Verification
    4. Back to Security in "Signing in to Google" section choose App passwords
    5. From the Select app drop down choose Other (Custom name) and put a name e.g. nodemailer
    6. A modal dialog will appear with the password. Get that password and use it in your code.

    REFERENCE: https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer
*/

router.post('/', (req, res) => {
  const { name, sender, message } = req.body

  // SMTP GMAIL
  let mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const output = `<p>
		${message}
		</p>`

  let details = {
    from: `${name} <${sender}>`,
    to: 'mrmirasrobert@gmail.com',
    subject: `Portfolio Contact Request <${sender}>`,
    text: 'Portfolio Contact Request',
    html: output,
  }

  // Send Email to MYSELF
  mailTransporter.sendMail(details, (err) => {
    if (err) {
      return res.status(500).json({
        status: 'fail',
        message: 'Contact request has not been sent',
        err: process.env.NODE_ENV == 'production' ? null : err,
      })
    }

    console.log('Message sent: %s', details.subject)

    // If Email is Success
    return res.status(200).json({
      status: 'success',
      message: 'Contact request has been sent',
    })
  })
})

module.exports = router
