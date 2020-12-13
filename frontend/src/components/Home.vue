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
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-instagram"></a></li>
                        <li><a href="#" class="fa fa-reddit"></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-2 right-container">
                dd
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data: function () {
        return {
            'home': null
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
        background-color: blue;
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
    #social-list {
        display: inline;
    }
</style>