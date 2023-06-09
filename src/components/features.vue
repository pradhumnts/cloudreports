<script>
// import { ArrowRightIcon } from "vue-feather-icons";

export default {
  components: {  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <!-- Features start -->
    <section class="section bg-light" id="features">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-7 text-center">
            <h2 class="fw-bold">Our Features</h2>
            <p class="text-muted">
              Eager to provide small and medium business solutions. Our focus is to deliver the best option to suit your need in a technological environment.
            </p>
          </div>
        </div>

        <div class="row align-items-center mb-5">
          <div class="col-md-5 order-2 order-md-1 mt-md-0 mt-5">
            <h2 class="mb-4">Purchasing and sales management</h2>
            <p class="text-muted mb-5">
              With us you have the facility to manage both your purchases and your sales, 
              notify suppliers and customers at any time you need for your business.
            </p>
          </div>
          <div class="col-md-6 ms-md-auto order-1 order-md-2">
            <div class="position-relative">
              <div class="ms-5 features-img">
                <img
                  src="@/assets/images/features-2.jpg"
                  alt=""
                  class="img-fluid d-block ms-auto rounded shadow"
                />
              </div>
              <img
                src="@/assets/images/dot-img.png"
                alt=""
                class="dot-img-left"
              />
            </div>
          </div>
        </div>
        <!-- end row -->
        <div class="row align-items-center section pb-5">
          <div class="col-md-6">
            <div class="position-relative mb-md-0 mb-5">
              <div class="me-5 features-img">
                <img
                  src="@/assets/images/features-3.jpg"
                  alt=""
                  class="img-fluid d-block ms-auto rounded shadow"
                />
              </div>
              <img
                src="@/assets/images/dot-img.png"
                alt=""
                class="dot-img-right"
              />
            </div>
          </div>
          <div class="col-md-5 ms-md-auto">
            <h2 class="mb-4">
              Billing system
            </h2>
            <p class="text-muted mb-5">
              A detailed billing system, customizable with your company's 
              logo for a more personalized touch, showing the information you want to send or print.
            </p>
          </div>
        </div>
        <!-- end row -->
        <div class="row align-items-center section mb-5 pb-0">
          <div class="col-md-5 order-2 order-md-1 mt-md-0 mt-5">
            <h2 class="mb-4">Access to instant updates</h2>
            <p class="text-muted mb-5">
              Keep up to date with everything that happens in your company, Cloudreports provides billing, 
              purchasing management, management of your employees, accounting data to date and detailed 24 hours a day, 7 days a week.
            </p>
          </div>
          <div class="col-md-6 ms-md-auto order-1 order-md-2">
            <div class="position-relative">
              <div class="ms-5 features-img">
                <img
                  src="@/assets/images/features-1.jpg"
                  alt=""
                  class="img-fluid d-block ms-auto rounded shadow"
                />
              </div>
              <img
                src="@/assets/images/dot-img.png"
                alt=""
                class="dot-img-left"
              />
            </div>
          </div>
        </div>
        <!-- end row -->
        <div class="row align-items-center section pb-0">
          <div class="col-md-6">
            <div class="position-relative mb-md-0 mb-5">
              <div class="me-5 features-img">
                <img
                  src="@/assets/images/features-4.jpg"
                  alt=""
                  class="img-fluid d-block ms-auto rounded shadow"
                />
              </div>
              <img
                src="@/assets/images/dot-img.png"
                alt=""
                class="dot-img-right"
              />
            </div>
          </div>
          <div class="col-md-5 ms-md-auto">
            <h2 class="mb-4">
              Mobile First Design
            </h2>
            <p class="text-muted mb-5">
              We are oriented to your comfort and availability. fOur application 
              is 100% adaptable to every electronic device of today, 
              be it PC, Laptop, Tablet or Phone we will be there for you.
            </p>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- Features end -->

    <section class="section bg-gradient-primary">
      <div
        class="bg-overlay-img"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/demos.png') + ')',
        }"
      ></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="text-center">
              <h1 class="text-white mb-4">Why us ?</h1>
              <p class="text-white mb-5 font-size-16">
                We are an emerging company focused on those little details that can bring value and advantages into solutions for you and your team while making it friendly and intuitive.
              </p>
              <a href="#" class="btn btn-lg btn-light" v-scroll-to="'#contact'">Ask for Demonstration</a>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- Cta end -->
  </div>
</template>