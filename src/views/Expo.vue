<template>
    <div class="expo container">
        <h1 class="header">K-Expo</h1>
        <div class="card-bg flyer-holder">
            <img src="../assets/k-expo-flyer.jpg"/>
        </div>
        <div class="card-bg description-holder">
            <h2>What is K-Expo?</h2>
            <div class="paragraph">
                <p>Our largest event in the spring semester is K-Expo. This cultural show celebrates the beauty of both traditional and modern Korean cultural, featuring spectacular student acts in singing, dancing, acting, and much more! Anyone is welcome to not only watch but also participate, as we invite other CIOs to perform alongside our own members as well. Our members work hard to provide the audience with an immersive cultural experience, concluding both of these cultural events with a feast of classic Korean foods.</p>
            </div>
        </div>
        <div class="card-bg bong-soon-holder">
            <iframe src="https://www.youtube.com/embed/7vz9ELxjxuk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .expo{
        .header{
            text-align: center;
            font-size: 45px;
            margin: 40px 0 0 0;
            padding: 0;
        }
        .card-bg{
            width: fit-content;
            height: fit-content;
            h2{
                text-align: center;
            }
        }
        .description-holder{
            width: 93.5%;
            margin: 40px auto;
        }
        .flyer-holder{
            img{
                width: 100%;
                height: 100%;
            }
            margin: 40px auto;
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
    }
</style>
