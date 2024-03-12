ctr = document.querySelector(".container")
function alert(mssg,mode)
{

ctr.insertAdjacentHTML('afterbegin', `<div class="alert alert-${mode}" role="alert">${mssg}</div>`);
const alertElement = document.querySelector('.alert');
setTimeout(() => {
    alertElement.style.display = 'none';
}, 1000);
}



const addBookForm = document.getElementById('Form');
addBookForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
   
  try {
    const res = await fetch(`http://localhost:3000/user/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
    });
    if (!res.ok) {
      //alert("Failed to sign up " , "danger")
        throw new Error('Failed to sign up');
    } else {
      alert("Registered Successfullt ! ", "success")
        window.location.href = '/Home';
    }
  } catch (error) {
alert("Failed to sign up " , "danger")
    console.error('Error:', error);
  }
});