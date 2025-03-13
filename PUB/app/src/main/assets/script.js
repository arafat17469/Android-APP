// Predefined user credentials
const users = [
    { username: "arafat", password: "12345678" },
    { username: "neural", password: "12345678" }
];

// Sample books
const bookData = [
    { title: "Introduction to AI", author: "John McCarthy", status: "Available" },
    { title: "Machine Learning Basics", author: "Tom Mitchell", status: "Borrowed" },
    { title: "Cybersecurity Essentials", author: "Kevin Mitnick", status: "Available" },
    { title: "Software Engineering", author: "Ian Sommerville", status: "Available" },
    { title: "Deep Learning", author: "Ian Goodfellow", status: "Available" },
    { title: "Neural Networks", author: "Simon Haykin", status: "Available" },
    { title: "AI Ethics", author: "Cathleen O'Neil", status: "Borrowed" },
    { title: "Data Science Handbook", author: "Jake VanderPlas", status: "Available" },
    { title: "Advanced Cybersecurity", author: "Bruce Schneier", status: "Borrowed" },
    { title: "Python Programming", author: "Guido van Rossum", status: "Available" },
    { title: "AI for Everyone", author: "Andrew Ng", status: "Available" },
    { title: "R Programming for Data Science", author: "Roger Peng", status: "Available" },
    { title: "Software Architecture", author: "Len Bass", status: "Borrowed" },
    { title: "Ethical Hacking", author: "Jon Erickson", status: "Available" },
    { title: "Reinforcement Learning", author: "Richard Sutton", status: "Borrowed" },
    { title: "Practical Machine Learning", author: "Manohar Swamynathan", status: "Available" },
    { title: "Cybersecurity Attack and Defense", author: "Christopher Hadnagy", status: "Available" },
    { title: "Programming Languages", author: "Robert W. Sebesta", status: "Borrowed" },
    { title: "Data Structures", author: "Mark Weiss", status: "Available" },
    { title: "AI and the Future of Work", author: "Daniel Susskind", status: "Available" },
    // Add more books as needed (repeat, randomize titles, or customize)
];

// Function to populate the book list dynamically
function populateBooks() {
    const bookTable = document.getElementById("bookTable");

    bookData.forEach((book, index) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.status}</td>
        `;
        bookTable.appendChild(newRow);
    });
}

// Call populateBooks when the page loads
document.addEventListener("DOMContentLoaded", populateBooks);

// Function to handle login
function login() {
    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value;

    // Validate user credentials
    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
        // Successful login
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-container").style.display = "block";
    } else {
        // Display error message
        document.getElementById("error").textContent = "Invalid username or password.";
    }
}

// Function to handle logout
function logout() {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
    document.getElementById("error").textContent = ""; // Clear error message
}

// Function to show tabs
function showTab(tabId) {
    const contents = document.querySelectorAll(".content");
    contents.forEach(content => content.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
}

// Function to handle adding a book
document.getElementById("addBookForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const bookTitle = document.getElementById("bookTitle").value.trim();
    const bookAuthor = document.getElementById("bookAuthor").value.trim();
    const manageTable = document.getElementById("manageTable");

    if (bookTitle && bookAuthor) {
        const newRow = document.createElement("tr");

        const bookId = manageTable.rows.length + 1;

        newRow.innerHTML = `
            <td>${bookId}</td>
            <td>${bookTitle}</td>
            <td>${bookAuthor}</td>
            <td><button onclick="removeBook(this)">Remove</button></td>
        `;

        manageTable.appendChild(newRow);

        // Clear input fields
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookAuthor").value = "";
    }
});

// Function to remove a book
function removeBook(button) {
    const row = button.closest("tr");
    row.remove();
}
