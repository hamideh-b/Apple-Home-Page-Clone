const Hero = async () => {
  let data = await fetch("https://hamideh-b.github.io/json-apple/db.json");
  let response = await data.json();
  let hero = response.hero.map((elem) => {
    if (elem.logo) {
      return `
            <!-- start ${elem.product}-->
            <div class="wrapper-product w-100 mb-2 position-relative">
                <a href="#" class="position-absolute bottom-0 start-0 w-100 h-100 z-2" style="cursor: pointer;"></a>
                <div class="${elem.product} d-flex h-100 flex-column flex-wrap align-items-center justify-content-start">
                <div class="wrapper-product-top pt-4 w-100">
                    <div class="${elem.logo} p-md-5"></div>
                </div>
                <div class="wrapper-product-bottom text-center">
                    <p class="text-capitalize fw-medium" style="font-size: 28px;">thinstant classic</p>
                    <a href="#" class="btn btn-primary rounded-5 me-2 position-relative z-3"
                    style="">${elem.more}</a>
                    <a href="#" class="btn btn-outline-primary rounded-5 text-capitalize position-relative z-3">${elem.buy}</a>
                </div>
            </div>
            </div>
            <!-- end ${elem.product}  --> 
            `;
    } else {
      return `
            <!-- start ${elem.product}-->
            <div class="wrapper-product w-100 mb-2 position-relative">
                <a href="#" class="position-absolute bottom-0 start-0 w-100 h-100  z-2" style="cursor: pointer;"></a>
                <div
                class="${elem.product} h-100 d-flex flex-column flex-wrap align-items-center justify-content-between position-relative  ">
            
                    <div class="wrapper-product-top text-white text-center">
                        <h2 class="pt-4" style="">${elem.title}</h2>
                        <p class="text-capitalize" style="">${elem.topDescription}</p>
                    </div>
                    <div class="wrapper-product-bottom text-center ">
                        <a href="#" class="btn btn-primary rounded-5 me-2 position-relative z-3"
                        style="">${elem.more}</a>
                        <a href="#" class="btn btn-outline-primary rounded-5 text-capitalize position-relative z-3" style="">${elem.buy}</a>
                        <p class="text-secondary py-3">${elem.bottomDescription}</p>
                    </div>
                </div>
            </div>
            <!-- end ${elem.product}  --> 
            `;
    }
  });
  document.querySelector("#hero").innerHTML = hero.join("");
};
export default Hero;
