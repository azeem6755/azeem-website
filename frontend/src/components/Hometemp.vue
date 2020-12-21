<template>
    <div class="container">
        <div class = "row" style="height: 100%">
            <div class="col-lg-2 left-container">
                <div class="title">
                    <span class="title-text"> Azeem Shaikh </span>
                </div>
                <div class="intro">
                    <span class="intro-text">
                        Ipsem lorum dorufdlsjdfslkdfsjasfldk
                        dlsakdjsfkadfljdfs
                        ldfksldsfjlkfdsaj
                    </span>
                </div>
            </div>
            <div class="col-lg-8 center-container">
                <div class="cover-pic">
                    <img src="@/assets/coverpic.jpg" style="height: 100%; width: 100%"/>
                </div>
                <div class="social-links">
                    <ul id="social-list">
                      <li class="site-link" v-for="link in this.socialMedia" :key="link">
                        <a :href="link.link" target="_blank"><font-awesome-icon class="icon" :icon="['fab', link.name]" size="2x" /></a>
                      </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-2 right-container">
                <div class="link-image">
                  Please insert image here
                </div>
                <div class="nav">
                  <ul id="navigation-links" class="nav-links">
                    <li class="navigation-link link-anchor" @click="navigateTo('test')">HOME</li>
                    <li class="navigation-link link-anchor" @click="navigateTo('Blog')">BLOG</li>
                    <li class="navigation-link">geh</li>
                    <li class="navigation-link">geh</li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data: function () {
        return {
            'home': null,
            'socialMedia': [
              {
                'name': 'github',
                'link': 'https://github.com/azeem6755'
              },
              {
                'name': 'instagram',
                'link': 'https://www.instagram.com/azeem._shaikh/'
              },
              {
                'name': 'facebook',
                'link': '#'
              },
              {
                'name': 'linkedin',
                'link': 'https://www.linkedin.com/in/azeem-shaikh-629686118/'
              },
              {
                'name': 'twitter',
                'link': 'https://twitter.com/azeemshaikh1997'
              },
            ]
        }
    },
    methods: {
      navigateTo : function(page) {
        console.log('Navigate To', page);
        this.$router.replace(page)
      }
    }
}
</script>

<style scoped>
    .left-container {
    }
    .center-container {
        background-color: white;
    }
    .right-container {
        background-color: white;
    }
    .cover-pic {
        width: 100%;
        height: 200px;
    }
    .title{
        border: 0.1em black solid;
        text-align: center;
        padding: 0.5em 1em;
        margin: 0 0 1.5em 0;
    }
    .title-text {
        font-size: 48px;
    }

    /*Social media links*/
    .social-links{
      margin: 1.5em 0;
    }

    #social-list{
        display: flex;
        padding: 0 7em;
        list-style-type: none;
    }

    .site-link {
      margin: auto;
      background-color: #479af1;
      padding: 0.35em 0.5em;
      border-radius: 50%;
    }

    .icon {
      color: antiquewhite;
    }

    .nav {
      background-color: #cdcdcd;
    }

    .nav-links {
      /*display: flex;*/
        padding: 0;
        list-style-type: none;
    }

    .navigation-link {
      padding: 0.5em 0;
      text-align: center;
      /*margin: auto;*/
      border: 0.01em #646464 solid;
    }

    .link-anchor, .link-anchor:hover, .link-anchor:active, .link-anchor:visited {
      text-decoration: none;
      color: black;
      cursor: pointer;
    }

</style>