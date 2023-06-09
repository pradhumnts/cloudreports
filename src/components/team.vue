<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      teamData: [
        {
          profile: require("@/assets/images/team/1.png"),
          name: "Catojisa S.A.S",
          url: "https://www.catojisa.com/",
        },
        {
          profile: require("@/assets/images/team/6.png"),
          name: "Creditcan",
          url: "https://www.creditcan.com.do/",
        },
        {
          profile: require("@/assets/images/team/7.png"),
          name: "150Details",
          classname: "team-150-details",
          url: "https://www.150details.me",
        },
        {
          profile: require("@/assets/images/team/5.png"),
          name: "Wintax",
          url: "IG: @wintaxsrl",
        },
        {
          profile: require("@/assets/images/team/2.png"),
          name: "FiscalconRD",
          url: "IG: @FiscalconRD",
        },
        {
          profile: require("@/assets/images/team/4.png"),
          name: "Quality Global Business",
          url: "https://www.qualitygb.com",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- Team start -->
  <section class="section bg-light" id="team">
    <div class="container">
      <div class="row justify-content-center mb-4">
        <div class="col-lg-7 text-center">
          <h2 class="fw-bold">Our Partners</h2>
          <p class="text-muted">
            Meet some of our Clients and Partners.
          </p>
        </div>
      </div>


    <!-- Carousel Partners -->
    <div class="row">
      <div class="container">
    <carousel :perPageCustom="[[480, 2], [768, 4]]" :mouse-drag="true" :loop="true" :centerMode="true">
      <slide 
          class="p-2 overflow-hidden"
          v-for="(item, index) of teamData"
          :key="index"
          >
        <div
            class="team-box mt-4 p-2 position-relative overflow-hidden rounded text-center shadow set-h"
          >
            <div class="position-relative overflow-hidden">
              <img
                :src="item.profile"
                alt=""
                class="d-block mx-auto img-fluid"
                :class="item.classname || ''"
              />
            </div>
            <div class="py-4">
              <h5 class="font-size-19 mb-1">{{ item.name }}</h5>
              <a :href="item.url" target="_blank" class="text-muted text-uppercase font-size-13 mb-0">
                {{ item.url }}
              </a>
            </div>
          </div>
      </slide>
    </carousel>
    </div>
    </div>
    <!-- Carousel Partners End-->

    </div>
    <!-- end container -->
  </section>
  <!-- Team end -->
</template>