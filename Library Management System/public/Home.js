let ctr = document.querySelector(".containers")
async function call() {
  
    let tbody = document.querySelector('tbody');
    let booksDiv = document.querySelector('.books');
    try {
        const response = await fetch('http://localhost:3000/book');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
       // console.log(data.length);
        if (data.length === 0) {
            booksDiv.innerHTML ="<h5>No Books Available</h5>";
        } else {
            let booksHTML = `
                <h1>Library Books</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Availability</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            data.forEach(book => {
                booksHTML += `
                    <tr>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isBorrowed ? "Borrowed" : "Available"}</td>

                        <td>
                            <button onclick={Borrow(${book.id})} class="btn" ${book.isBorrowed ? 'disabled' : ' '}>Borrow</button>

                            <button onclick={Return(${book.id})} class="btn" ${!book.isBorrowed ? 'disabled' : ' '}>Return</button>
                            <button onclick={Update(${book.id})} class="btn">Update</button>
                            <button onclick={Delete(${book.id})} class="btn">Delete</button>
                        </td>
                    </tr>
                `;
            });
            booksHTML += `
                    </tbody>
                </table>
            `;
            booksDiv.innerHTML = booksHTML;
        }
    } catch (error) {
        console.error(error);
    }
}

call();

function alert(mssg,mode)
{

ctr.insertAdjacentHTML('afterbegin', `<div class="alert alert-${mode}" role="alert">${mssg}</div>`);
const alertElement = document.querySelector('.alert');
setTimeout(() => {
    alertElement.style.display = 'none';
}, 1000);
}
const addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    
    try {   
        const response = await fetch(`http://localhost:3000/book`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, title, author })
        });
        
        if (!response.ok) {
            console.log("here");
            throw new Error('Failed to add book');
        }
        
        alert("Book Successfully Added ! " , "success")
        await call();
    } catch (error) {
        console.error("here");
        alert("Some error Occurred" , "danger")
    }
});




async function Update(id)
{
    title = window.prompt("Enter new title");
    author = window.prompt("Enter new Author");
    try {
    await fetch(`http://localhost:3000/book/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, title, author })
    });
    alert("Book Successfully Updated ! " , "success")
    call();
} catch (error) {
    alert("Some error Occurred" , "danger")
    console.error('Error:', error);
}
    
   
}

async function Borrow(id)
{
    try {
    await fetch(`http://localhost:3000/book/borrow/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    alert("Book Successfully Borrowed ! " , "success")
    call();
} catch (error) {
    alert("Some error Occurred" , "danger")
    console.error('Error:', error);
}
}

async function Return(id)
{
    try {
    await fetch(`http://localhost:3000/book/return/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    alert("Book Successfully Returned  " , "success")
    call();
} catch (error) {
    alert("Some error Occurred" , "danger")
    console.error('Error:', error);
}
}




async function Delete(id)
{
    try {
    await fetch(`http://localhost:3000/book/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    alert("Book Successfully Added ! " , "success")
    call();

} catch (error) {
    alert("Some error Occurred" , "danger")
    console.error('Error:', error);
}
   
}


