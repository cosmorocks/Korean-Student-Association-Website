<template>
    <div class="home-block-two container card-bg">
        <div class="centering-div text-center">
            <div class="mobile-fix">
                <img class="fan-dance-pic img-fluid" src='~@/assets/fan-dance.jpg'>
            </div>
            <div class="text">
                <h1>Learn about Korean culture</h1>
                <p class="descrip">Anyone interested in Korean culture is welcome to join! Take part in various cultural events held throughout the year, or join our annual cultural show: K-Expo, featuring both traditional and modern dances, a movie skit, and outside performances!</p>
            </div>
            <div class="image-holder">
                <img class="fan-dance-pic img-fluid" src='~@/assets/fan-dance.jpg'>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mobile-fix{
        display: none;
    }
    .centering-div{
        margin-left: 30px;
    }
    .home-block-two{
        height: 310px;
        margin-top: 90px;
    }
    .text{
        display: inline-block;
        width: 45%;
        text-align: left;
        margin-top: 60px;
    }
    .text h1{
        font-weight: bold;
        font-size: 30px;
    }
    .image-holder{
        display: inline-block;
        width: 50%;
        vertical-align: top;
    }
    .fan-dance-pic{
        width: 420px;
    }
    /** xl **/
    @media only screen and (max-width: 1200px) {
        .centering-div{
            margin-left: 0px;
        }
    }
    /** lg **/
    @media only screen and (max-width: 992px) {
        .image-holder{
            margin-top: 27px;
            margin-left: 25px;
        }
        .text{
            margin-top: 20px;
        }
    }
    /** md **/
    @media only screen and (max-width: 768px) {
        .fan-dance-pic{
            max-width: none; /** overiding bootstrap **/
            width: 90%;
        }
        .text{
            display: block;
            width: 85%;
            margin: 0 auto;
            margin-left: 30px;
            margin-top: 30px;
        }
        .image-holder{
            display: none;
        }
        .mobile-fix{
            display: block;
        }
        .home-block-two{
            height: 107vw;
        }
        .text h1{
            font-size: 5vw;
        }
        .descrip{
            font-size: 3.27vw;
        }
    }
    /** small **/
    @media only screen and (max-width: 576px) {
        .text{
            margin-top: 15px;
        }
    }
</style>