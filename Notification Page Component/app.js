import data from "./data.json" assert { type: "json" };

const readAll = document.querySelector("#readAll");
const unreadNotif = document.getElementById("notifCount");

document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const notifWall = document.querySelector(".notification-list");

  data.map(user => {
    const notification = document.createElement("div");
    notification.classList.add(
      user.status === "unread" ? "unread" : "read",
      "notification",
      "flex-row"
    );
    if (user.status === "unread") {
      count += 1;
    }
    if (user.action === "react") {
      notification.innerHTML = `<img class="avatar" src=${user.avatar} alt="avatar">
      <section class="flex-col>
        <p class="flex-row">
          <a href="#" class="user-name">${
            user.userName
          }</a> reacted to your recent post <a class="target" href="#">${user.target}</a>
            ${user.status === "unread" ? '<span class="dot">&#8226;</span>' : ""}
        </p>
        <span class="date">${user.date} ago</span>
      </section>
    `;
    } else if (user.action === "follow") {
      notification.innerHTML = `<img class="avatar" src=${user.avatar} alt="avatar">
      <section class="flex-col>
        <p class="flex-row">
          <a href="#" class="user-name">${
            user.userName
          }</a> followed you <a class="target" href="#">${user.target}</a>
            ${user.status === "unread" ? '<span class="dot">&#8226;</span>' : ""}
        </p>
        <span class="date">${user.date} ago</span>
      </section>
    `;
    } else if (user.action === "join") {
      notification.innerHTML = `<img class="avatar" src=${user.avatar} alt="avatar">
      <section class="flex-col>
        <p class="flex-row">
          <a href="#" class="user-name">${
            user.userName
          }</a> has joined your group <a class="target group" href="#">${user.target}</a>
            ${user.status === "unread" ? '<span class="dot">&#8226;</span>' : ""}
        </p>
        <span class="date">${user.date} ago</span>
      </section>
    `;
    } else if (user.action === "message") {
      notification.innerHTML = `<img class="avatar" src=${user.avatar} alt="avatar">
      <section class="flex-col>
        <p class="flex-row">
          <a href="#" class="user-name">${user.userName}</a> sent you a private message
            ${user.status === "unread" ? '<span class="dot">&#8226;</span>' : ""}
        </p>
        <span class="date">${user.date} ago</span>
        <div class="message"> <a class="target" href="#">${user.target}</a></div>
      </section>
    `;
    } else if (user.action === "comment") {
      notification.innerHTML = `<img class="avatar" src=${user.avatar} alt="avatar">
      <section class="flex-col>
        <p class="flex-row">
          <a href="#" class="user-name">${user.userName}</a> commented on your picture
            ${user.status === "unread" ? '<span class="dot">&#8226;</span>' : ""}
        </p>
        <span class="date">${user.date} ago</span>
      </section>
      <a class="target pic" href="#"><img  src=${user.target} alt="">
            </a>
    `;
    } else if (user.action === "left") {
      notification.innerHTML = `<img class="avatar" src=${user.avatar} alt="avatar">
      <section class="flex-col>
        <p class="flex-row">
          <a href="#" class="user-name">${
            user.userName
          }</a> left your group <a class="target group" href="#">${user.target}</a>
            ${user.status === "unread" ? '<span class="dot">&#8226;</span>' : ""}
        </p>
        <span class="date">${user.date} ago</span>
      </section>
    `;
    }
    unreadNotif.textContent = count;
    notifWall.appendChild(notification);
  });

  const unreadNotification = document.querySelectorAll(".unread");
  const unreadMark = document.querySelectorAll(".dot");
  readAll.addEventListener("click", () => {
    unreadNotification.forEach(el => {
      el.classList.remove("unread");
    });

    unreadMark.forEach(el => {
      el.style.visibility = "hidden";
    });

    unreadNotif.textContent = 0;
  });

  unreadNotification.forEach((el, index) => {
    el.addEventListener("click", () => {
      if (el.classList.contains("unread")) {
        el.classList.remove("unread");

        // Decrease the counter by 1
        const currentCount = parseInt(unreadNotif.textContent, 10);
        if (!isNaN(currentCount) && currentCount > 0) {
          unreadNotif.textContent = currentCount - 1;
        }

        // Hide the corresponding unreadMark
        if (unreadMark[index]) {
          unreadMark[index].style.visibility = "hidden";
        }
      }
    });
  });
});
