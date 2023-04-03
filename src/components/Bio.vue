<template lang="pug">
base-tab.bio
  template(v-slot:info)
    h3.bio_title BIO.DMG
  template(v-slot:icon)
    img.bio_icon(:src="Account" alt="accont icon")
  template(v-slot:content)
    .bio_content
      .bio_main 
        .bio_photo 
          img.bio_img(:src="Photo" alt="Photo" draggable="false")
        .bio_info
          .bio_info_title 
            .bio_info_name Yuliya Poznyak
            .bio_info_gender SHE/HER
          .bio_info_subtitle Frontend Developer 
          .bio_info_description I love to read and spend time doing outside activities like camping, playing outdoor sports, hiking, and web development.
      .bio_additional
        .bio_social
          p.bio_social_text Social Links:
          a.bio_social_link(href="https://github.com/Juliya2323" target="_blank")
            img.bio_social_link_icon(:src="Git", alt="GitHub")
            span.bio_social_link_name @Juliya2323
            img.bio_social_link_arrow(:src="Arrow", alt="GitHub")
        span.bio_country BY
</template>

<script setup>
import { ref } from "vue";
import BaseTab from "../ui/BaseTab.vue";
import Account from "/icons/acc.svg";
import Photo from "/images/photo.jpg";
import Git from "/icons/github.svg";
import Arrow from "/icons/arrow.svg";

</script>

<style scoped lang="scss">
.bio {
  width: 582px;
  height: 339px;
  top: 135px;
  left: 85px;

  &_title {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
  }

  &_icon {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  &_content {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
  }

  &_photo {
    padding: 15px;
    box-sizing: border-box;
    background-color: var(--yellow);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_img {
    width: 160px;
    height: 160px;
    border: 1px solid rgb(137, 132, 132);
  }

  &_main {
    height: 75%;
    margin-top: 27px;
    padding: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    font-family: var(--font-inter);
  }

  &_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;

    &_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &_name {
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
    }

    &_gender {
      font-family: var(--font-ibm);
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
    }

    &_subtitle {
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
    }

    &_description {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }
  }

  &_additional {
    height: 70px;
    background: repeating-linear-gradient(
        transparent,
        transparent 30px,
        grey 32px
      ),
      repeating-linear-gradient(90deg, transparent, transparent 30px, grey 32px);
    border-top: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .bio_social {
    display: flex;
    gap: 20px;
    align-items: center;
    font-family: var(--font-ibm);

    &_text {
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;
      margin: 0;
    }

    &_link {
      display: flex;
      gap: 8px;
      align-items: center;
      color: black;

      &_icon {
        width: 20px;
        height: 20px;
        text-decoration: none;
      }

      &_name {
        font-weight: 600;
        font-size: 12px;
      }

      &_arrow {
        width: 12px;
        height: 12px;
      }
    }
  }

  &_country {
    font-weight: 700;
    font-size: 12px;
  }
}
</style>
