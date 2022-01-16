// New comment handler
const newFormHandler = async (event) => {
  event.preventDefault();
  
    const text = document.querySelector('.form-input').value.trim();
    const post_id =  event.target.getAttribute('data-id');

    if (text && post_id) {

      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ text, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/newComment/${post_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };


  document
  .querySelector('.signup-form')
  .querySelector('#update')
  .addEventListener('click', newFormHandler);