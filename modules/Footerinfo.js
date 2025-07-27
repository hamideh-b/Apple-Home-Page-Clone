const Footerinfo = async () => {
  let data = await fetch("https://hamideh-b.github.io/json-apple/db.json");
  let response = await data.json();
  let footerInfo = response.footerInfo.map((elem) => {
    return `
      <li class="pb-2">
        ${elem.li}
      </li>
    `;
  });
  document.querySelector(".global-footer-info").innerHTML = footerInfo.join("");
};
export default Footerinfo;
