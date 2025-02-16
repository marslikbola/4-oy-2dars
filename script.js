const users = [
  { name: "Leanne Graham", email: "Sincere@april.biz", phone: "1-770-736-8031 x56442", address: "Gwenborough, Kulas Light" },
  { name: "Ervin Howell", email: "Shanna@melissa.tv", phone: "010-692-6593 x09125", address: "Wisokyburgh, Victor Plains" },
  { name: "Clementine Bauch", email: "Nathan@yesenia.net", phone: "1-463-123-4447", address: "McKenziehaven, Douglas Extension" },
  { name: "Patricia Lebsack", email: "Julianne.OConner@kory.org", phone: "493-170-9623 x156", address: "South Elvis, Hoeger Mall" }
];

const userList = document.getElementById("userList");
const darkModeToggle = document.getElementById("darkModeToggle");

// Foydalanuvchilarni chiqarish
function loadUsers() {
  userList.innerHTML = "";
  users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.classList.add("card");

      userCard.innerHTML = `
          <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User Icon">
          <h3>${user.name}</h3>
          <p>📧 ${user.email}</p>
          <p>📞 ${user.phone}</p>
          <p>🏠 ${user.address}</p>
      `;

      userList.appendChild(userCard);
  });
}

// Qidiruv funksiyasi
function searchUsers() {
  const searchText = document.getElementById("searchBox").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      if (name.includes(searchText)) {
          card.style.display = "block";
      } else {
          card.style.display = "none";
      }
  });
}

// Dark mode funksiyasi
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Sahifani yuklaganda foydalanuvchilarni chiqarish
document.addEventListener("DOMContentLoaded", loadUsers);
