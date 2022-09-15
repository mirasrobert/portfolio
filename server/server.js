const express = require('express')
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 5000

const app = express()

app.use(cors())

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: false }))

app.use('/api/contact', require('./api/contact'))

app.get('/download-resume', (req, res) => {
  res.download('./resume.pdf')
})

// For Deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.status(200).json({
      msg: 'API IS RUNNING',
      api: {
        contact: '/api/contact',
        resume: '/download-resume',
      },
    })
  })
}

app.listen(port, () => console.log(`Server started on port ${port}`))
