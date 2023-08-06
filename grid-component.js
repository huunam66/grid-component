const container = document.querySelector(".container");
const header = container.querySelector("header");
const body = document.querySelector("body");
function display_icon_show_navbar(icon_list) {
  icon_list.addEventListener("click", function () {
    let navbar_show = document.createElement("div");
    navbar_show.classList.add("navbar-show");
    navbar_show.innerHTML = `
      <div class="close-navbar-show"></div>
    `;

    setTimeout(function () {
      let navbar = document.createElement("navbar");
      navbar.classList.add("navbar-facein");
      navbar.innerHTML = `
      <ul class="nav-list-facein">
          <li class="nav-item-facein">
            <a class="nav-link-facein" href="#">Blog</a>
          </li>
          <li class="nav-item-facein">
            <a class="nav-link-facein" href="#">Challenges</a>
          </li>
          <li class="nav-item-facein">
            <a class="nav-link-facein" href="#">Flexbox</a>
          </li>
          <li class="nav-item-facein">
            <a class="nav-link-facein" href="#">CSS Grid</a>
          </li>
        </ul>`;
      navbar_show.appendChild(navbar);
    }, 500);

    body.style.overflow = "hidden";

    body.appendChild(navbar_show);
    let icon_close_navbar = document.querySelector(".close-navbar-show");
    icon_close_navbar.addEventListener(
      "click",
      icon_close_navbar_event(icon_close_navbar, navbar_show)
    );
  });
}

function icon_close_navbar_event(icon_close_navbar, navbar_show) {
  icon_close_navbar.addEventListener("click", function () {
    body.removeChild(navbar_show);
    body.style.overflow = "auto";
  });
}

function add_icon_list() {
  let icon_list = document.createElement("div");
  icon_list.classList.add("show-navbar");
  header.appendChild(icon_list);
  display_icon_show_navbar(icon_list);
}

window.onload = function () {
  let width = window.innerWidth;
  if (width <= 900) {
    add_icon_list();
  }
  window.addEventListener("resize", function () {
    let media_screen = window.innerWidth;
    let show_navbar = header.querySelector(".show-navbar");
    if (media_screen <= 900) {
      if (!show_navbar) add_icon_list();
    }
    if (media_screen > 900) {
      if (show_navbar) header.removeChild(show_navbar);
    }
  });
};
