<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
    <!-- CTA start -->
    <section
      class="section pt-5 bg-center w-100 bg-light"
      :style="{
        'background-image':
          'url(' + require('@/assets/images/cta-bg.png') + ')',
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card bg-gradient-primary text-center border-0">
              <div
                class="bg-overlay-img"
                :style="{
                  'background-image':
                    'url(' + require('@/assets/images/demos.png') + ')',
                }"
              ></div>
              <div class="card-body mx-auto p-sm-5 p-4">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="p-3">
                      <h2 class="text-white mb-4 w-100">
                        Join our Growing Partnership
                      </h2>
                      <!-- <p class="text-white-70 font-size-16 mb-4 pb-3">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p> -->
                      <a
                        v-scroll-to="'#contact'"
                        href="javascript: void(0);"
                        class="btn btn-light rounded-pill"
                        >Get a Quote</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- CTA end -->
</template>