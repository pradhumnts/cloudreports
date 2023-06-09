<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!-- Pricing start -->
  <section class="section" id="pricing">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 text-center">
          <h2 class="fw-bold">Pricing Plan</h2>
          <p class="text-muted">
            We have the right solution for each type of company and you can also contact us to design a suitable plan for you.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center mb-4 pricing-tab">

              <h4 class="fw-bold"> Monthly </h4>
              
                <div class="row justify-content-md-center">
                  <div class="col-lg-4">
                    <div
                      class="card plan-card mt-4 rounded text-center border-0 shadow overflow-hidden"
                    >
                      <div class="card-body px-4 py-5">
                      <span
                          class="badge badge-primary pricing-badge shadow-lg"
                          >Most Popular</span
                        >
                        <div
                          class="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3"
                        >
                          <img
                            src="@/assets/images/pricing/1.png"
                            alt=""
                            class="img-fluid d-block mx-auto"
                          />
                        </div>
                        <h4 class="text-uppercase mb-4 pb-1">Basic</h4>
                        <p class="text-muted">
                          Up to <span class="fw-bold">300</span> users
                        </p>
                        <p class="text-muted">
                          <span class="fw-bold">Support</span>
                        </p>
                        <p class="text-muted mb-4 pb-1">Includes 1 user</p>
                        <p class="text-muted font-size-14 mb-1">
                          +$4 per additional user
                        </p>
                        <p
                          class="text-dark font-size-16 font-weight-semibold mb-4"
                        >
                          $95.00 USD / Month 
                        </p>
                        <a
                          href="https://appmc.cloudreports.biz/register/new/"
                          target="_blank"
                          class="btn btn-soft-primary"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 d-none">
                    <div
                      class="card plan-card mt-4 rounded text-center border-0 shadow overflow-hidden"
                    >
                      <div class="card-body px-4 py-5">
                        <span
                          class="badge badge-primary pricing-badge shadow-lg"
                          >Most Popular</span
                        >

                        <div
                          class="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3"
                        >
                          <img
                            src="@/assets/images/pricing/2.png"
                            alt=""
                            class="img-fluid d-block mx-auto"
                          />
                        </div>
                        <h4 class="text-uppercase mb-4 pb-1">Partner</h4>
                        <p class="text-muted">
                          Up to <span class="fw-bold">500</span> users
                        </p>
                        <p class="text-muted">
                          Full <span class="fw-bold">Support</span>
                        </p>
                        <p class="text-muted mb-4 pb-1">Includes 1 user</p>
                        <p class="text-muted font-size-14 mb-1">
                          +$1 per additional user
                        </p>
                        <p
                          class="text-dark font-size-16 font-weight-semibold mb-4"
                        >
                          $50.00 USD / Month + Partnership fee
                        </p>
                        <a
                          href="https://appmc.cloudreports.biz/register/new/"
                          target="_blank"
                          class="btn btn-soft-primary"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div
                      class="card plan-card mt-4 rounded text-center border-0 shadow overflow-hidden"
                    >
                      <div class="card-body px-4 py-5">
                        <div
                          class="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3"
                        >
                          <img
                            src="@/assets/images/pricing/3.png"
                            alt=""
                            class="img-fluid d-block mx-auto"
                          />
                        </div>
                        <h4 class="text-uppercase mb-4 pb-1">Enterprise</h4>
                        <p class="text-muted">
                          <span class="fw-bold">500 or more</span> users
                        </p>
                        <p class="text-muted">
                         Custom <span class="fw-bold">implementation</span>
                        </p>
                        <p class="text-muted mb-5 pb-4">
                          For large teams <br> with specific needs. 
                        </p>
                      
                        
                        <a href="javascript: void(0);" class="btn btn-primary mt-2" v-scroll-to="'#contact'"
                          >Contact Us </a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!--end row-->
          </div>
          <!-- end tab content -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- Pricing end -->
</template>