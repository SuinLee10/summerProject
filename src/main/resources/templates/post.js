document.getElementById('upload-btn').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        alert('업로드 성공!');
    } else {
        alert('제목과 내용을 모두 입력하세요.');
    }
});

document.getElementById('delete-btn').addEventListener('click', function() {
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
});
