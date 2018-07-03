<template>
    <div class="container card-bg">
        <div class="hero-image">
            <div class="title">
            <h1>The Korean Student Association</h1>
            </div>
        </div>
    </div>
</template>

<style>
    .hero-image{
        background-image: url('../hero-image.jpg');
        background-position: -100px -100px;
        background-size: 120%;
        background-repeat: no-repeat;
        width: 100%;
        height: 575px;
        margin: 0 auto;
        position: relative;
        /* border-radius: 15px; */
        z-index: -99;
    }
    .card-bg{
      border: 1px solid rgba(216,216,216,0.9);
      box-shadow: 0px 5px rgba(0,0,0,0.1); 
      border-radius: 15px;
      padding: 15px;
    }
    .title{
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        color: white;
        width: fit-content;
    }
    .title h1{
        font-size: 3.5em;
        white-space: nowrap;
    }
    /** lg **/
    @media only screen and (max-width: 992px) {
        .title{
            transform: translate(-50%,-90%);
        }
        .title h1{
            font-size: 2.5em;
        }
        .card-bg{
            height: 550px;
            margin-top: 40px;
        }
    }
    /** md **/
    @media only screen and (max-width: 768px) {
        .title{
            transform: translate(-50%,-275%);
        }
        .title h1{
            font-size: 2em;
        }
        .card-bg{
            height: 390px;
            margin-top: 40px;
        }
    }
    /** small **/
    @media only screen and (max-width: 576px) {
        .hero-image{
            background-position: top;
        }
        .card-bg{
            height: 91vw;
        }
        .title h1{
            font-size: 5.25vw;
        }
        .title{
            top: 45vw;
            left:50%;
            transform: translate(-50%,-50%);
        }
        
    }
</style>
