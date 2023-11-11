import data from "./data.json" assert { type: "json" };

console.log(data);

document.addEventListener("DOMContentLoaded", () => {
  const notifWall = document.querySelector(".notification-list");

  data.map(user => {
    const notification = document.createElement("div");
    notification.classList.add(user.status === "unread" ? "unread" : "read");
    notification.innerHTML = `<img src=${user.avatar} alt="avatar">
      <section>
        <p>
          <span class="user-name">${user.userName}</span> reacted to your recent post <a href="#">${user.target}</a>
        </p>
        <span>${user.date}</span>
      </section>
    `;
    notifWall.appendChild(notification);
  });
});
