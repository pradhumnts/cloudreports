<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!-- Footer Start -->
  <footer
    class="footer"
    :style="{
      'background-image':
        'url(' + require('@/assets/images/footer-bg.png') + ')',
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="mb-4">
            <router-link to="/"
              ><img
                src="@/assets/images/logo-light.png"
                alt=""
                class=""
                height="70"
            /></router-link>
            <p class="text-white-50 my-4">
              We provide lean advise and consulting for small and medium businesses that take their first online steps. Come join us and see how we can help your business grow.
  
            </p>
          </div>
        </div>
        <!-- end col -->

        <div class="col-lg-7 ms-lg-auto">
          <div class="row">
            <div class="col-lg-3 col-6">
              <div class="mt-4 mt-lg-0">
                <h4 class="text-white font-size-18 mb-3">Customer</h4>
                <ul class="list-unstyled footer-sub-menu">
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Strategy</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Releases</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link">Press</a>
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Mission</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="mt-4 mt-lg-0">
                <h4 class="text-white font-size-18 mb-3">Product</h4>
                <ul class="list-unstyled footer-sub-menu">
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Trending</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Popular</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Customers</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Features</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="mt-4 mt-lg-0">
                <h4 class="text-white font-size-18 mb-3">Information</h4>
                <ul class="list-unstyled footer-sub-menu">
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Developers</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Support</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Customer Service</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Get Started</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link">Guide</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="mt-4 mt-lg-0">
                <h4 class="text-white font-size-18 mb-3">Support</h4>
                <ul class="list-unstyled footer-sub-menu">
                  <li>
                    <a href="javascript: void(0);" class="footer-link">FAQ</a>
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Contact</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Disscusion</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-lg-12">
          <div class="text-center mt-5">
            <p class="text-white-50 f-15 mb-0">
              {{ new Date().getFullYear() }}
              © Cloudreports Inc.
            </p>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </footer>
  <!-- Footer End -->
</template>