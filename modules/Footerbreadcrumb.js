const Footerbreadcrumb = async () => {
  let data = await fetch("https://hamideh-b.github.io/json-apple/db.json");
  let response = await data.json();
  let footer = response.footerbreadcrumb.map((elem) => {
    return `
            <li class="breadcrumb-item p-0 pe-1">
                <a href="" class="nav-link d-inline-block ">
                ${elem.name}
                </a>
            </li>
        `;
  });
  document.querySelector("#breadcrumb").innerHTML = footer.join("");
};
export default Footerbreadcrumb;
