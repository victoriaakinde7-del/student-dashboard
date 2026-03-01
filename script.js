// ================= COUNTER =================
let count = 0;

const countText = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");

plusBtn.addEventListener("click", function () {
  count = count + 1;
  countText.innerText = count;
});

minusBtn.addEventListener("click", function () {
  if (count > 0) {
    count = count - 1;
    countText.innerText = count;
  }
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countText.innerText = count;
});

// ================= DARK / LIGHT MODE =================
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// ================= LOAD USERS FROM API =================
const loadUsersBtn = document.getElementById("loadUsers");
const usersDiv = document.getElementById("users");

loadUsersBtn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      usersDiv.innerHTML = "";

      users.forEach(function (user) {
        const card = document.createElement("div");
        card.className = "user-card";

        card.innerHTML = `
          <h4>${user.name}</h4>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
          <p>Company: ${user.company.name}</p>
        `;

        usersDiv.appendChild(card);
      });
    });
});