const container = document.querySelector(".container");
const header = container.querySelector("header");
const body = document.querySelector("body");
const aside = document.querySelector("aside");
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

let count = 0;
function add_show_related_post() {
  let show_related_post = document.createElement("div");
  show_related_post.classList.add("show-related-post");
  aside.appendChild(show_related_post);
  show_related_post.addEventListener("click", function () {
    if (count % 2 == 0) {
      aside.classList.remove("ani-close-related-post");
      aside.classList.add("ani-show-related-post");
      show_related_post.classList.remove("show-related-post");
      show_related_post.classList.add("close-related-post");
    } else {
      aside.classList.remove("ani-show-related-post");
      aside.classList.add("ani-close-related-post");
      show_related_post.classList.remove("close-related-post");
      show_related_post.classList.add("show-related-post");
    }
    count++;
  });
}

window.onload = function () {
  let width = window.innerWidth;
  if (width <= 900) {
    add_icon_list();
  }
  if (width <= 1200) {
    add_show_related_post();
  }
  window.addEventListener("resize", function () {
    let media_screen = window.innerWidth;
    let show_navbar = header.querySelector(".show-navbar");
    let show_related_post = aside.querySelector(".show-related-post");
    if (media_screen <= 900) {
      if (!show_navbar) add_icon_list();
    } else {
      if (show_navbar) header.removeChild(show_navbar);
    }

    if (media_screen <= 1200) {
      if (!show_related_post) {
        add_show_related_post();
      }
    } else {
      if (show_related_post) {
        aside.removeChild(show_related_post);
      }
    }
  });
};
