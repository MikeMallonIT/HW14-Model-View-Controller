const delButtonHandler = async (event) => {
  alert('Post Deleted');
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {

    }
  }
};

const updateButtonHandler = async (event) => {

  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#description').value.trim();
  const id = event.target.getAttribute('data-id');

  alert(`Post Updated`);

  if (id) {

    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};


document
  .querySelector('#delete')
  .addEventListener('click', delButtonHandler);


document
  .querySelector('.signup-form')
  .querySelector('#update')
  .addEventListener('click', updateButtonHandler);