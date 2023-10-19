// Fungsi untuk menampilkan daftar komentar dari Local Storage saat halaman dimuat
function loadComments() {
    var commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = ""; // Kosongkan daftar komentar

    var comments = JSON.parse(localStorage.getItem("comments")) || [];

    for (var i = 0; i < comments.length; i++) {
        var commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = "<strong>" + comments[i].name + ":</strong> " + comments[i].comment;
        commentsList.appendChild(commentDiv);
    }
}

// Fungsi untuk mengirim komentar
function submitComment() {
    // Dapatkan nilai nama dan komentar dari formulir
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    // Tambahkan komentar ke daftar komentar di Local Storage
    var comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push({ name, comment });
    localStorage.setItem("comments", JSON.stringify(comments));

    // Tampilkan ulang daftar komentar
    loadComments();

    // Reset formulir
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
}

// Memuat daftar komentar saat halaman dimuat
loadComments();
