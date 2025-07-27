const Footernav = async () => {
  let data = await fetch("https://hamideh-b.github.io/json-apple/db.json");
  let response = await data.json();
  let footer = response.footerNav.map((elem) => {
    return `
            <div class="nav-column col-12 col-md-2 text-muted lh-lg">
                ${elem.columnSection
                  .map((colsec) => {
                    return `
                        <div class="column-section">
                            <h3 class="fw-bolder m-0 d-flex border-h3 justify-content-between">
                            ${colsec.title}
                            <i class="fa fa-angle-down d-block d-md-none" style="font-size: 16px;"></i>
                            </h3>
                            <ul class="list-unstyled d-none d-md-block ps-sm-2 ps-md-0 m-0">
                                ${colsec.ul
                                  .map((li) => {
                                    return `
                                            <li class="mb-2">
                                                <a href="#" class="nav-link lh-sm">${li.name}</a>
                                            </li>
                                        `;
                                  })
                                  .join("")}
                            </ul>
                        </div>
                    `;
                  })
                  .join("")}
            </div>
        `;
  });

  document.querySelector("#nav-footer").innerHTML = footer.join("");
  const footerNav = document.querySelectorAll(".column-section");
  footerNav.forEach((elem) => {
    elem.addEventListener("click", () => {
      elem.lastElementChild.classList.toggle("d-none");
      elem.lastElementChild.classList.toggle("fadeIn");
      elem.firstElementChild.classList.toggle("border-h3");
      elem.firstElementChild.firstElementChild.classList.toggle(
        "fa-angle-down"
      );
      elem.firstElementChild.firstElementChild.classList.toggle("fa-angle-up");
    });
  });
};
export default Footernav;