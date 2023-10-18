const express = require('express');
const app = express();
const port = 3000;

// Menyimpan komentar dalam array sementara
const comments = [];

app.use(express.static('src/public'));
app.use(express.json());

// Endpoint API untuk mengirim komentar
app.post('/api/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json({ message: 'Komentar berhasil disimpan', comment });
});

// Endpoint API untuk mengambil daftar komentar
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
