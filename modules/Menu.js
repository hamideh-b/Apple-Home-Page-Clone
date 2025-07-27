const Menu = async () => {
  let data = await fetch("https://hamideh-b.github.io/json-apple/db.json");
  let response = await data.json();
  let menu = response.menu.map((li) => {
    return `
        <li class="nav-item nav-hover ">
          <a href="#" class="h-100 py-md-0 nav-link d-flex justify-content-between align-items-baseline">
          ${li.name}
            <i class="fa fa-angle-right d-none"></i>
          </a>
          <div class="nav-blur w-100 d-none d-md-block position-absolute top-100 start-0"></div>
          <div class="sub-menu vw-100 bg-dark d-none d-md-block position-absolute top-100 start-0 z-n1 overflow-hidden">
              <div class="h-100 container-fluid col-12 col-md-12 col-lg-11 col-xl-9 col-xxl-8 invisible">
                  <div class="d-flex py-4">
                      ${li.subMenu
                        .map((elem) => {
                          return `
                              <div class="sub-menu-column pe-5">
                                  ${elem.column
                                    .map((col) => {
                                      return `
                                      <h2>${col.title}</h2>
                                      <ul class="list-unstyled">
                                          ${col.ul
                                            .map((li) => {
                                              return `
                                              <li>
                                                  <a href="#" class="nav-link px-0 text-white ">${li.name}</a>
                                              </li>
                                          `;
                                            })
                                            .join("")}
                                      </ul>
                                      `;
                                    })
                                    .join("")}  
                              </div>
                          `;
                        })
                        .join("")}
                  </div>
              </div>
          </div>
    </li>       
        `;
  });

  document.querySelector(".navbar-nav").innerHTML = menu.join("");
  const navItem = document.querySelectorAll("#menu .nav-item");
  navItem.forEach((elem) => {
    var height = elem.lastElementChild.clientHeight;
    elem.lastElementChild.style.height = `0px`;
    elem.addEventListener("mouseenter", () => {
      elem.lastElementChild.previousElementSibling.classList.add("nav-curtain");
      elem.lastElementChild.style.height = `${height}px`;
      elem.lastElementChild.firstElementChild.classList.remove("invisible");
      elem.lastElementChild.firstElementChild.firstElementChild.classList.add(
        "opacity-sub-menu"
      );
    });
    function fadeSubmenu() {
      elem.lastElementChild.firstElementChild.firstElementChild.classList.remove(
        "opacity-sub-menu"
      );
      elem.lastElementChild.firstElementChild.classList.add("invisible");
      elem.lastElementChild.previousElementSibling.classList.remove(
        "nav-curtain"
      );
      setTimeout(() => {
        elem.lastElementChild.style.height = `0px`;
      }, 100);
    }
    elem.addEventListener("mouseleave", fadeSubmenu);
    elem.lastElementChild.addEventListener("mouseleave", () => {
      elem.lastElementChild.previousElementSibling.classList.remove(
        "nav-curtain"
      );
    });
    window.addEventListener("scroll", fadeSubmenu);
  });
};
export default Menu;
