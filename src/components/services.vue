<script>
import { BoxIcon, LayersIcon, ServerIcon } from "vue-feather-icons";

export default {
  components: { BoxIcon, LayersIcon, ServerIcon },
  data() {
    return {};
  },
};
</script>

<template>
  <!-- Services start -->
  <section class="section" id="services">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 text-center">
          <h2 class="fw-bold">Our Services</h2>
          <p class="text-muted">
            To provide Small and Medium Businesses solutions with proven cost-effective business processes, 
            saving time and money in the exchange between producers and consumers in order to streamline 
            business operations and develop a collaborative environment that allows any SMB to overperform, 
            furthering relationships with their suppliers, customers and employees.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <div class="service-box text-center px-4 py-5 position-relative mb-4">
            <div class="service-box-content p-4">
              <div class="icon-mono service-icon avatar-md mx-auto mb-4">
                <box-icon class=""></box-icon>
              </div>
              <h4 class="mb-3 font-size-22">Digital Design</h4>
              <p class="text-muted mb-0">
                We provide a customer friendly easy to use environment, designed specially to save you time and effort.
              </p>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-lg-4">
          <div
            class="service-box text-center px-4 py-5 position-relative mb-4 active"
          >
            <div class="service-box-content p-4">
              <div class="icon-mono service-icon avatar-md mx-auto mb-4">
                <layers-icon class=""></layers-icon>
              </div>
              <h4 class="mb-3 font-size-22">Awesome Support</h4>
              <p class="text-muted mb-0">
                We provide flexible and customizable support to fit all your needs during our journey.
              </p>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-lg-4">
          <div class="service-box text-center px-4 py-5 position-relative mb-4">
            <div class="service-box-content p-4">
              <div class="icon-mono service-icon avatar-md mx-auto mb-4">
                <server-icon class=""></server-icon>
              </div>
              <h4 class="mb-3 font-size-22">Easy to customize</h4>
              <p class="text-muted mb-0">
                Let's have a chat and see what is your fit. We are sure we can meet there.
              </p>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- Services end -->
</template>