const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

// Enable CORS
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/generate', async (req, res) => {
  console.log(req.body)
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={API_KEY}', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: req.body.messages[0].text,
            },
          ],
        },
      ],
    })
  })
  const responseJson = await response.json()
  const resData = {
    role: 'ai',
    text: responseJson['candidates'][0]['content']['parts'][0]['text'],
    html: `<?xml version="1.0" encoding="us-ascii" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentStyleType="text/css" height="105px" preserveAspectRatio="none" style="width:66px;height:105px;background:#FFFFFF;" version="1.1" viewBox="0 0 66 105" width="66px" zoomAndPan="magnify"><defs/><g><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="16" x2="16" y1="36.2969" y2="70.2969"/><line style="stroke:#181818;stroke-width:0.5;stroke-dasharray:5.0,5.0;" x1="48" x2="48" y1="36.2969" y2="70.2969"/><rect fill="#E2E2F0" height="30.2969" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="22" x="5" y="5"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="8" x="12" y="24.9951">a</text><rect fill="#E2E2F0" height="30.2969" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="22" x="5" y="69.2969"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="8" x="12" y="89.292">a</text><rect fill="#E2E2F0" height="30.2969" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="23" x="37" y="5"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="9" x="44" y="24.9951">b</text><rect fill="#E2E2F0" height="30.2969" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="23" x="37" y="69.2969"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="9" x="44" y="89.292">b</text><polygon fill="#181818" points="36.5,48.2969,46.5,52.2969,36.5,56.2969,40.5,52.2969" style="stroke:#181818;stroke-width:1.0;"/><line style="stroke:#181818;stroke-width:1.0;" x1="16" x2="42.5" y1="52.2969" y2="52.2969"/><!--SRC=[IrJGjLD80W00]--></g></svg>`
  }
  res.send(resData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})