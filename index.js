const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('软件下载站已上线');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('running');
});
