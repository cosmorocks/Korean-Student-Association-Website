<template>
    <div class="home-block-one container card-bg">
        <div class="image-holder">
            <img class="fam-pic" src='../assets/fam-pic.jpg'>
        </div>
        <div class="text">
            <h1>More than just an organization</h1>
            <p class="descrip">Join KSA and be placed into a "family" - a small group led by upperclassmen. You'll get to hangout, play games, get food, and have fun in all kinds of social events while meeting new people and making lifelong friends.</p>
        </div>
    </div>
</template>

<style scoped>
    .home-block-one{
        height: 310px;
        margin-top: 30px;
        position: relative;
    }
    .image-holder{
        width: 500px;
        position: absolute;
        top: 50%;
        left: 24%;
        transform: translate(-50%, -50%);
    }
    .fam-pic{
        height: 100%;
        width: 100%;
    }
    .text{
        float: right;
        position: absolute;
        top: 25%;
        left: 54%;
    }
    .text h1{
        font-size: 30px;
        font-weight: bold;
    }
    .descrip{
        width: 435px;
        margin-top: 20px;
    }
    /** xl **/
    @media only screen and (max-width: 1200px) {
        .text{
            left: 51%;
        }
        .image-holder{
            width: 450px;
            left: 25%;
        }
    }
    /** lg **/
    @media only screen and (max-width: 992px) {
        .descrip{
            width: 285px;
        }
        .text{
            top: 15%;
            left: 54%;
        }
        .image-holder{
            width: 350px;
            left: 27%;
        }
    }
    /** md **/
    @media only screen and (max-width: 768px) {
        .descrip{
            width: 450px;
        }
        .image-holder{
            width: 500px;
            position: absolute;
            top: 31%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .text{
            float: none;
            top: 63%;
            left: 9%;
        }
        .home-block-one{
            height: 500px;
        }
    }
    /** small **/
    @media only screen and (max-width: 576px) {
        .image-holder{
            width: 90%;
            min-height: 100%;
            top: 54%;
        }
        .descrip{
            width: 90%;
        }
        .home-block-one{
            height: 90vw;
        }
        .text{
            top: 60%;
        }
        .text h1{
            font-size: 5vw;
        }
        .descrip{
            width: 90%;
            font-size: 3vw;
        }
    }
</style>