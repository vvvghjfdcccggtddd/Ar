const express = require('express');
const path = require('path');

const app = express();

// این مسیر اصلی برنامه است که فایل html را به کاربر نشان می‌دهد
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// سرور روی پورت 3000 روشن می‌شود
app.listen(3000, () => {
  console.log('🚀 سرور نورا آمادست!');
});
