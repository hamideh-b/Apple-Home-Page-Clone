const Promo = async () => {
  let data = await fetch("https://hamideh-b.github.io/json-apple/db.json");
  let response = await data.json();
  let promo = response.promo.map((elem) => {
    let product = elem.product;
    switch (product) {
      case "airpod-promo": {
        return `
        <!-- start ${elem.product} -->
                <div class="wrapper-promo mb-2 position-relative">
                        <a href="#" class="position-absolute bottom-0 start-0 w-100 h-100 z-2" style="cursor: pointer;"></a>
                    <div class="${elem.product} h-100 d-flex flex-column flex-wrap justify-content-end align-items-center">
                        <div class="wrapper-promo-section text-center py-5 text-white">
                            <h3>${elem.title}</h3>
                            <p class="px-4">
                            ${elem.description}
                            </p>
                            <a href="#" class="btn btn-primary rounded-5 px-3 me-2 position-relative z-3" style="">${elem.more}</a>
                            <a href="#" class="btn btn-outline-primary rounded-5 text-capitalize px-3 position-relative z-3" style="">${elem.buy}</a>
                        </div>
                    </div>
                </div>
        <!-- end ${elem.product} -->
        `;
      }
      case "airpod-pro-promo": {
        return `
        <!-- start ${elem.product} -->
          <div class="wrapper-promo mb-2 position-relative">
                  <a href="#" class="position-absolute bottom-0 start-0 w-100 h-100 z-2" style="cursor: pointer;"></a>
            <div class="${elem.product} h-100 d-flex flex-column flex-wrap justify-content-end align-items-center">
              <div class="wrapper-promo-section text-center text-white py-5">
                <h3>${elem.title}</h3>
                <p class="px-4">
                 ${elem.description}
                </p>
                <a href="#" class="btn btn-primary position-relative z-3 rounded-5 px-3 me-2" style="">${elem.more}</a>
                <a href="#" class="btn btn-outline-primary position-relative z-3 rounded-5 text-capitalize px-3" style="">${elem.buy}</a>
              </div>
            </div>
          </div>
        <!-- end ${elem.product} -->
        `;
      }
      case "promo-ipad-mini": {
        return `
            <!-- start ${elem.product} -->
                    <div class="wrapper-promo mb-2 position-relative">
                            <a href="#" class="position-absolute bottom-0 start-0 w-100 h-100  z-2" style="cursor: pointer;"></a>
                            <div class="${elem.product} h-100 align-items-center">
                                <div class="wrapper-promo-section h-100 text-center  text-black d-flex flex-column justify-content-between pt-5 pb-4">
                                    <div class="top">
                                        <h3>${elem.title}</h3>
                                        <p>
                                            ${elem.description}
                                        </p>
                                        <a href="#" class="btn btn-primary rounded-5 px-3 position-relative z-3 me-2" style="">${elem.more}</a>
                                        <a href="#" class="btn btn-outline-primary rounded-5 text-capitalize px-3 position-relative z-3" style="">${elem.buy}</a>

                                    </div>
                                    <div class="bottom">
                                        <p class="text-muted" style="font-size: 14px;">
                                            ${elem.intelligenceDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
            <!-- end ${elem.product} -->
        `;
      }
      case "watch-ultra": {
        return `
        <!-- start ${elem.product} -->
          <div class="wrapper-promo mb-2 position-relative">
                  <a href="#" class="position-absolute bottom-0 start-0 w-100 h-100  z-2" style="cursor: pointer;"></a>
            <div class="${elem.product} h-100 d-flex flex-column flex-wrap justify-content-start align-items-center">
              <div class="wrapper-promo-section text-center text-white py-5">
                <div class="${elem.logo} w-100"></div>
                <p>
                  ${elem.description}
                </p>
                <a href="#" class="btn btn-primary position-relative z-3 rounded-5 px-3 me-2" style="">${elem.more}</a>
                <a href="#" class="btn btn-outline-primary position-relative z-3 rounded-5 text-capitalize px-3" style="">${elem.buy}</a>
              </div>
            </div>
          </div>
        <!-- end ${elem.product} -->
        `;
      }
      case "iphone-tradeIn": {
        return `
        <!-- start ${elem.product} -->
          <div class="wrapper-promo mb-2 position-relative">
                  <a href="#" class="position-absolute bottom-0 start-0 w-100 h-100  z-2" style="cursor: pointer;"></a>
            <div class="${elem.product} h-100 d-flex flex-column flex-wrap justify-content-start align-items-center">
              <div class="wrapper-promo-section text-center text-black">
                  <div class="${elem.logo} mt-4"></div>

                <p>
                  ${elem.description}
                </p>
                <a href="#" class="btn btn-primary position-relative z-3 rounded-5 px-3 me-2" style=""> ${elem.more}</a>
              </div>
            </div>
          </div>
        <!-- end  ${elem.product} -->
        `;
      }
      case "card-promo": {
        return `
        <!-- start ${elem.product} -->
        
         <div class="wrapper-promo mb-2 position-relative">
                <a href="#" class="position-absolute bottom-0 start-0 w-100 h-100  z-2" style="cursor: pointer;"></a>
           <div class="${elem.product} h-100 d-flex flex-column flex-wrap justify-content-start align-items-center">
             <div class="wrapper-promo-section text-center text-black">
                 <div class="${elem.logo} mt-4"></div>
               <p>
               ${elem.description}
               </p>
               <a href="#" class="btn btn-primary position-relative z-3 rounded-5 px-3 me-2" style="">${elem.more}</a>
               <a href="#" class="btn btn-outline-primary position-relative z-3 rounded-5 px-3" style="">${elem.buy}</a>
             </div>
           </div>
         </div>
       <!-- end ${elem.product} -->
        `;
      }
    }
  });
  document.querySelector(".promo-container").innerHTML = promo.join("");
};
export default Promo;
