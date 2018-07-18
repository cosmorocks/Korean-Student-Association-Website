<template>
    <div>
        <div class="expo container">
            <h1 class="header">K-Expo</h1>
            <div class="card-bg flyer-holder">
                <img src="../assets/k-expo-flyer.jpg"/>
            </div>
            <div class="card-bg description-holder">
                <h2>What is K-Expo?</h2>
                <div class="paragraph">
                    <p>Our largest event in the spring semester is K-Expo. This cultural show celebrates the beauty of both <strong>traditional and modern Korean culture</strong>, featuring spectacular student acts in singing, dancing, acting, and much more! <strong>Anyone</strong> is welcome to not only watch but also participate, as we invite other CIOs to perform alongside our own members as well. Our members work hard to provide the audience with an immersive cultural experience, concluding both of these cultural events with a <strong>feast of classic Korean foods.</strong></p>
                </div>
            </div>
            <div class="card-bg movie-holder">
                <h2 class="movie-header">Watch last year's movie skit, a parody of the popular k-drama 'Strong Woman Do Bong Soon'</h2>
                <div class="card-bg bong-soon-holder">
                    <iframe src="https://www.youtube.com/embed/7vz9ELxjxuk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
            <a target="_blank" href="https://www.youtube.com/channel/UCCrULtpfBAm2Mdq6qPHyGFQ">
            <div class="card-bg youtube-holder">
                <div class="more-performances">
                    <i class="fab fa-youtube"></i>
                    <p>Click to watch our past expo performances!</p>
                </div>
            </div>
            </a>
            <div class="card-bg photo-slideshow">
                <carousel :per-page="1" loop="true">
                    <slide>
                        <img src="../assets/emma-ardean.jpg"/>
                    </slide>
                    <slide>
                        <img src="../assets/val-group.jpg"/>
                    </slide>
                    <slide>
                        <img src="../assets/csa-pink.jpg"/>
                    </slide>
                    <slide>
                        <img src="../assets/dance-group.jpg"/>
                    </slide>
                    <slide>
                        <img src="../assets/dance-group-2.jpg"/>
                    </slide>
                    <slide>
                        <img src="../assets/group-pic.jpg"/>
                    </slide>
                    <slide>
                        <img src="../assets/sonny-squared.jpg"/>
                    </slide>
                </carousel>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Carousel,
        Slide,
        Footer
  }
}
</script>


<style lang="scss" scoped>
    .expo{
        .header{
            text-align: center;
            font-size: 45px;
            margin: 40px 0 0 0;
            padding: 0;
            font-weight: 500;
        }
        .card-bg{
            width: 100%;
            height: fit-content;
            h2{
                text-align: center;
            }
        }
        .description-holder{
            width: 100%;
            margin: 40px auto;
            text-align: center;
            font-size: 1.3em;
            h2{
                font-weight: 600;
            }
        }
        .flyer-holder{
            margin: 40px auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .bong-soon-holder{
            width: 93.5%;
            height: 40em;
            margin: 40px auto;
            iframe{
                width: 100%;
                height: 100%;
            }
        }
        .movie-holder{
            .movie-header{
                padding: 0;
                margin: 0.7em auto;
                font-weight: bold;
                width: 80%;
                font-size: 2em;
            }
        }
        .youtube-holder{
            margin-top: 45px;
            .fa-youtube{
                font-size: 100px;
                color: red;
                display: inline-block;
            }
            p{
                display: inline-block;
                vertical-align: top;
                margin: 30px 0 0 40px;
                font-weight: bold;
                font-size: 30px;              
            }
            .more-performances{
                text-align: center;
            }
        }
        .photo-slideshow{
            margin: 45px 0 0 0;
            img{
                width: 100%;
            }
        }
    }
        /** lg **/
    @media only screen and (max-width: 992px) {
        .expo{
            .youtube-holder{
                p{
                    margin-left: 0;
                }
            }
        }
    }
        /** md **/
    @media only screen and (max-width: 768px) {
        .expo{
            .bong-soon-holder{
                height: 350px;
            }
            .youtube-holder{
                p{
                    margin-left: 0;
                    font-size: 24px;
                }
            }
        }
    }
</style>
