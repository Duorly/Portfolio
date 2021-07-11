<template>
  <div>
    <particles-bg type="cobweb" :bg="true" />

    <Loader v-if="isLoading" />
    
    <!-- Page Content-->
    <div v-else class="container-fluid p-0">
      <!-- About-->
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <div class="wrapper animate__animated animate__backInLeft">
            <div class="typing-demo">
              <h1 class="mb-0">
                {{ profile.Prenoms }}
                <span class="text-primary">{{ profile.Nom }}</span>
              </h1>
            </div>
          </div>
          <div class="subheading mb-5 animate__animated animate__backInLeft">
            {{ adresses.Adresse }} · {{ adresses.Ville }} ·
            {{ adresses.Pays }} • {{ adresses.Tel }} ·
            <a :href="`mailto:${adresses.Mail}`">{{ adresses.Mail }}</a>
          </div>
          <p class="lead mb-5 animate__animated animate__backInLeft">
            {{ profile.biographie }}
          </p>
          <div class="social-icons animate__animated animate__backInLeft">
            <a
              target="_blank"
              v-for="social in links"
              :key="social.id"
              class="social-icon bg-animation"
              :href="social.link"
              ><i :class="social.icon"></i
            ></a>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Experience-->
      <section class="resume-section" id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">{{ $t("experience") }}</h2>
          <div
            v-for="experience in experiences"
            :key="experience.id"
            class="d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div class="flex-grow-1">
              <h3 class="mb-0">{{ experience.Titre }}</h3>
              <div class="subheading mb-3">{{ experience.Entreprise }}</div>
              <p>
                {{ experience.Description }}
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">
                {{ new Date(experience.DateDebut).toLocaleDateString() }}
                -
                {{ new Date(experience.DateFin).toLocaleDateString() }}
              </span>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Education-->
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 class="mb-5">{{ $t("formation") }}</h2>
          <div
            v-for="formation in formations"
            :key="formation.id"
            class="d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div class="flex-grow-1">
              <h3 class="mb-0">{{ formation.Ecole }}</h3>
              <div class="subheading mb-3">{{ formation.Diplome }}</div>
              <div>{{ formation.Description }}</div>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">
                {{ new Date(formation.DateDebut).toLocaleDateString() }}
                -
                {{ new Date(formation.DateFin).toLocaleDateString() }}
              </span>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Skills-->
      <section class="resume-section" id="skills">
        <div class="resume-section-content">
          <h2 class="mb-5">{{ $t("competence") }}</h2>
          <div class="subheading mb-3">{{ $t("language") }}</div>
          <ul class="list-inline dev-icons">
            <li
              v-for="skill in skills"
              :key="skill.id"
              class="list-inline-item"
            >
              <i :class="skill.icon"></i>
            </li>
          </ul>
          <div class="subheading mb-3">{{ $t("workflow") }}</div>
          <ul class="fa-ul mb-0">
            <li v-for="wf in workflow" :key="wf.id">
              <span class="fa-li"><i class="fas fa-check"></i></span>
              {{ wf.titre }}
            </li>
          </ul>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Interests-->
      <section class="resume-section" id="interests">
        <div class="resume-section-content">
          <h2 class="mb-5">{{ $t("interet") }}</h2>
          <p>
            {{ profile.interet }}
          </p>
          <p class="mb-0"></p>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Awards-->
      <section class="resume-section" id="awards">
        <div class="resume-section-content">
          <h2 class="mb-5">{{ $t("prix") }}</h2>
          <ul class="fa-ul mb-0">
            <li class="animate__animated animate__backInLeft" v-for="certification in certifications" :key="certification.id">
              <span class="fa-li"
                ><i :class="`${certification.icon} ${certification.color}`"></i
              ></span>
              {{ certification.titre }}
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      experiences: [],
      adresses: {},
      profile: {},
      formations: [],
      certifications: [],
      skills: [],
      workflow: [],
      links: []
    };
  },
  async fetch() {
    this.isLoading = true;

    this.adresses = await this.$strapi.find("adresse", [
      ["_locale", this.$i18n.locale]
    ]);
    this.profile = await this.$strapi.find("profile", [
      ["_locale", this.$i18n.locale]
    ]);

    this.links = await this.$strapi.find("social-networks");

    this.isLoading = false;

    this.experiences = await this.$strapi.find("experiences", [
      ["_locale", this.$i18n.locale]
    ]);
    this.formations = await this.$strapi.find("formations", [
      ["_locale", this.$i18n.locale]
    ]);

    this.skills = await this.$strapi.find("skills");

        this.workflow = await this.$strapi.find("workflows", [
      ["_locale", this.$i18n.locale]
    ]);

    this.certifications = await this.$strapi.find("certifications", [
      ["_locale", this.$i18n.locale], ["_sort", "createdAt:DESC"]
    ]);
  },
};
</script>

<style>
.particles-bg-canvas-self{

  background-color: rgb(255, 255, 255);
}
</style>
