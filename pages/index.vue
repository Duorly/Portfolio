<template>
  <div>
    <Loader v-if="isLoading" />
    <!-- Page Content-->
    <div v-else class="container-fluid p-0">

      <!-- About-->
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <div class="wrapper">
            <div class="typing-demo">
              <h1 class="mb-0">
                {{ profile.Prenoms }}
                <span class="text-primary">{{ profile.Nom }}</span>
              </h1>
            </div>
          </div>
          <div class="subheading mb-5">
            {{ adresses.Adresse }} · {{ adresses.Ville }} ·
            {{ adresses.Pays }} • {{ adresses.Tel }} ·
            <a :href="`mailto:${adresses.Mail}`">{{ adresses.Mail }}</a>
          </div>
          <p class="lead mb-5">
            {{ profile.biographie }}
          </p>
          <div class="social-icons">
            <a
              class="social-icon bg-animation"
              href="https://www.linkedin.com/in/duorli-massengo/"
              ><i class="fab fa-linkedin-in"></i
            ></a>
            <a class="social-icon" href="https://github.com/Duorly"
              ><i class="fab fa-github"></i
            ></a>
            <a
              class="social-icon bg-animation"
              href="https://twitter.com/maitre_padawane"
              ><i class="fab fa-twitter"></i
            ></a>
            <a
              class="social-icon"
              href="https://www.facebook.com/duorly.massengo/"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a class="social-icon bg-animation" href="https://nebeldev.com"
              ><i class="fab fa-wordpress"></i
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
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Mobile-First, Responsive Design
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Cross Browser Testing & Debugging
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Cross Functional Teams
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Agile Development & Scrum
            </li>
          </ul>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Interests-->
      <section class="resume-section" id="interests">
        <div class="resume-section-content">
          <h2 class="mb-5">Intérêts</h2>
          <p>
            {{profile.interet}}
          </p>
          <p class="mb-0">
          </p>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Awards-->
      <section class="resume-section" id="awards">
        <div class="resume-section-content">
          <h2 class="mb-5">{{ $t('prix') }}</h2>
          <ul class="fa-ul mb-0">
            <li>
              <span class="fa-li"
                ><i class="fas fa-trophy text-warning"></i
              ></span>
              Google Analytics Certified Developer
            </li>
            <li>
              <span class="fa-li"
                ><i class="fas fa-award text-success"></i
              ></span>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <span class="fa-li"
                ><i class="fas fa-certificate text-success"></i
              ></span>
              1
              <sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <span class="fa-li"
                ><i class="fas fa-trophy text-warning"></i
              ></span>
              1
              <sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <span class="fa-li"
                ><i class="fas fa-trophy text-warning"></i
              ></span>
              2
              <sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <span class="fa-li"
                ><i class="fas fa-trophy text-warning"></i
              ></span>
              1
              <sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <span class="fa-li"
                ><i class="fas fa-trophy text-warning"></i
              ></span>
              3
              <sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
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
      skills: []
    };
  },
  async mounted() {
    this.isLoading = true

    this.experiences = await this.$strapi.find("experiences", [
      ["_locale", this.$i18n.locale]
    ]);
    this.adresses = await this.$strapi.find("adresse", [
      ["_locale", this.$i18n.locale]
    ]);
    this.profile = await this.$strapi.find("profile", [
      ["_locale", this.$i18n.locale]
    ]);
    this.formations = await this.$strapi.find("formations", [
      ["_locale", this.$i18n.locale]
    ]);
    this.skills = await this.$strapi.find("skills");

    this.isLoading = false
  }
};
</script>
