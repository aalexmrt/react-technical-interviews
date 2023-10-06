const express = require('express')
const fs = require('fs')
const fsPromises = require('fs/promises')
const cors = require('cors')
const app = express()
const path = require('path')

const port = process.env.PORT || 3030

app.use(cors())

const merchantData = JSON.parse(fs.readFileSync('./mockData/merchantData.json'))

const appendImgs = async () => {
  try {
    const assetsDirPath = path.join(__dirname, './mockData/assets')
    const files = await fsPromises.readdir(assetsDirPath)
    for (const file of files) {
      const parts = file.split('.')
      const merchantId = parts[0]
      const data = await fsPromises.readFile(path.join(assetsDirPath, file), {
        encoding: 'base64',
      })
      for (const merchant of merchantData) {
        if (merchant.id === merchantId) {
          merchant.shop_background_img_base64 = `data:image/png;base64,${data}`
        }
      }
    }
  } catch (err) {
    console.log(err)
  }
}

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/', (req, res) => {
  res.send('This is the API running!')
})

app.get('/api/merchants/', async (req, res) => {
  res.status(200)
  res.setHeader('Content-Type', 'application/json')
  await appendImgs()
  res.json(merchantData)
})

module.exports = app
