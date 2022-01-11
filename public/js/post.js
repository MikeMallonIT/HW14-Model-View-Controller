const delButtonHandler = async (event) => {
  alert('Delete Button Pushed');
  
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/post');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.selected-post')
  .addEventListener('click', delButtonHandler);