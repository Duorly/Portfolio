<template>
  <div id="page-top">
    <audio src="/assets/cono.opus" autoplay loop></audio>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-animation fixed-top"
      id="sideNav"
    >
      <a
        @click="$router.push(localePath('/'))"
        class="navbar-brand js-scroll-trigger"
      >
        <span class="d-block d-lg-none">{{profile.Prenoms}}</span>
        <span class="d-none d-lg-block"
          ><img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            :src="`/assets/img/profile.jpg`"
            alt="Nebel"
        /></span>
      </a>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="true"
        aria-label="Toggle navigation"
        @click="menu = !menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        :class="
          menu ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
        "
        id="navbarResponsive"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">{{
              $t("moi")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">{{
              $t("experience")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">{{
              $t("formation")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">{{
              $t("competence")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">
              {{ $t("interet") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards"
              >{{ $t("recompense") }}
            </a>
          </li>
          <hr class="" style="background-color: white" />
          <li class="nav-item">
            <nuxt-link :to="switchLocalePath('fr')">
              <img
                class="border border-white rounded-circle bg-primary"
                src="https://img.icons8.com/color/48/000000/france-circular.png"
              />
            </nuxt-link>
            <!-- <nuxt-link :to="localePath('blog')">
              <img
                class="border border-white rounded-circle bg-primary"
                src="https://img.icons8.com/color/48/000000/france-circular.png"
              />
            </nuxt-link> -->
            <nuxt-link :to="switchLocalePath('en')">
              <img
                class="border border-white rounded-circle bg-primary"
                src="https://img.icons8.com/color/48/000000/usa-circular.png"
              />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <Nuxt keep-alive :keep-alive-props="{ max: 3 }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      profile: {}
    };
  },
  async fetch() {
    this.profile = await this.$strapi.find("profile", [
      ["_locale", this.$i18n.locale]
    ]);
  }
};
</script>

<style>
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
a {
  cursor: pointer;
}
.bg-animation {
  background: linear-gradient(-45deg, #500070, #a736db, #0057da, #22216e);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.wrapper {
  height: auto;
  /*This part is important for centering*/
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  flex-wrap: wrap;
}

.typing-demo {
  width: 80ch;
  animation: typing 8s steps(80) infinite,
    blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 1.5em;
  color: #500070;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
