
document.addEventListener('DOMContentLoaded', function() {
  const commentToggles = document.querySelectorAll('.comment-toggle');
  const addCommentButtons = document.querySelectorAll('.add-comment');

  commentToggles.forEach(button => {
    button.addEventListener('click', function() {
      const commentsSection = this.nextElementSibling;
      commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
    });
  });

  addCommentButtons.forEach(button => {
    button.addEventListener('click', function() {
      const input = this.previousElementSibling;
      const commentsList = input.nextElementSibling;
      const newComment = document.createElement('li');
      newComment.textContent = input.value;
      commentsList.appendChild(newComment);
      input.value = '';
    });
  });
});

