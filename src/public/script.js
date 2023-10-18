
    function displayComments() {
    const commentsDiv = document.querySelector('.comments');

    fetch('/api/comments')
    .then(response => response.json())
    .then(data => {
        commentsDiv.innerHTML = ''; // Hapus konten sebelumnya
        
        data.forEach(comment => {
            const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = `
    <h4>${comment.name}</h4>
    <p>${comment.comment}</p>
    `;
    commentsDiv.appendChild(commentElement);
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });
}

    // Panggil fungsi untuk menampilkan komentar saat halaman dimuat
    displayComments();

