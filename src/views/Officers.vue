<template>
    <div class="everything">
        <div class="officers my-container">
            <h1 class="meet-the-team-header">Meet the team</h1>
            <div class="people-holder">
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/steve.jpg">
                    </div>
                    <h4>Steve Hong</h4>
                    <p>President</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/matthew.jpg">
                    </div>
                    <h4>Matthew Han</h4>
                    <p>Vice President</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/ardean.jpg">
                    </div>
                    <h4>Ardean Kim</h4>
                    <p>Treasurer</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/leesun.jpg">
                    </div>
                    <h4>Leesun Chea</h4>
                    <p>Secretary</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/val.jpg">
                    </div>
                    <h4>Valerie Young</h4>
                    <p>Culture</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/sherlyn.jpg">
                    </div>
                    <h4>Sherlyn Chuang</h4>
                    <p>Culture</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/sab.jpg">
                    </div>
                    <h4>Sabrina Baldassarre</h4>
                    <p>Outreach</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/hannah.jpg">
                    </div>
                    <h4>Hannah Bae</h4>
                    <p>Outreach</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/philip.jpg">
                    </div>
                    <h4>Philip Song</h4>
                    <p>Internal</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/edmund.jpg">
                    </div>
                    <h4>Edmund Pan</h4>
                    <p>Internal</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/ariel.jpg">
                    </div>
                    <h4>Ariel Ben-Salmon</h4>
                    <p>Internal</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/jenny.jpg">
                    </div>
                    <h4>Jenny Yao</h4>
                    <p>Public Relations</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/april.jpg">
                    </div>
                    <h4>April Xie</h4>
                    <p>Public Relations</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/lan.jpg">
                    </div>
                    <h4>Lan Anh Do</h4>
                    <p>Historian</p>
                </div>
                <div class="person-holder">
                    <div class="image">
                        <img src="../assets/rebecca.jpg">
                    </div>
                    <h4>Rebecca Yang</h4>
                    <p>Historian</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'Officers',
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
    .my-container{
        max-width: 1140px;
        margin: 0 auto;
    }
    .meet-the-team-header{
        text-align: center;
        font-size: 45px;
        margin-top: 40px;
    }
    .people-holder{
        display: grid;
        margin-top: 70px;
        max-width: 100%;
        // grid-template-columns: repeat(4,1fr);
        grid-template-columns: repeat(auto-fit,minmax(15em,1fr));
        // grid-auto-rows:minmax(100px,auto);
        grid-gap: 3em;
        .person-holder{
            height: auto; /** fixed my issues **/
            text-align: center;
            img{
                width: 100%;
            }
            h4{
                margin-top: 10px;
                margin-bottom: 0;
            }
        }
    }
</style>