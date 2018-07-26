<template>
    <div class="event card-bg container">
        <div class="holder">
            <div class="content-holder">
                <div class="event-date-holder">
                    <div class="month-holder">
                        <h4>{{month}}</h4>
                    </div>
                    <div class="line"></div>
                    <div class="day-holder">
                        <h3>{{day}}</h3>
                    </div>
                </div>
                <div class="image-holder">
                    <img v-bind:src="getImgUrl(image)"/>
                </div>
                <div class="description-holder">
                    <h1>{{title}}</h1>
                    <p>{{description}}</p>
                    <h6>{{location}} | {{time}} </h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        month:{
            type: String,
            required: true
        },
        day: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            default: 'This is the default description.'
        },
        time: {
            type: String,
            required: false
        },
        location: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true,
            default: 'title'
        },
        image: {
            type: String,
            default: 'first-gen-meeting.jpg',
            required: false
        }
    },
    methods: {
        getImgUrl(image) { // needed to fix weird pathing issue
            return require('../assets/'+image)
        }
    }
}
</script>

<style lang="scss">
    .event{
        height: fit-content;
        .holder{
            margin:1.5em 0 1.5em 0;
            .event-date-holder{
                // border: 1px solid black;
                width: fit-content;
                text-align: center;
                display: inline-block;
                vertical-align: middle;
                margin: 0 3em 0 3em;
                .month-holder{
                    h4{
                        font-size: 35px;
                    }
                }
                .line{
                    border-top: 1px solid rgba(0,0,0,0.4);
                    margin: 0 0 9px 0;
                }
                .day-holder{
                    h3{
                        font-size: 25px;
                    }
                }
            }
            .image-holder{
                display: inline-block;
                width: 300px;
                height: auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .title-holder{
                font-size: 40px;
                vertical-align: top;
                margin: 0 auto 0.5em auto;
                text-align: center;
            }
            .description-holder{
                display: inline-block;
                width: 30em;
                margin-left: 2em;
                vertical-align: middle;
                h6{
                    font-weight: bold;
                    font-size: 20px;
                }
            }
            .content-holder{
                width: fit-content;
                margin: 0 auto;
            }
        }
    }
    /** extra-lg **/
    @media only screen and (max-width: 1200px) {
        .event{
            .holder{
                .description-holder{
                    width: 17em;
                }
            }
        }
    }
    /** lg **/
    @media only screen and (max-width: 992px) {
        .event{
            .holder{
                .description-holder{
                    width: 90%;
                    text-align: center;
                    margin-left: 0em;
                    margin: 0 auto;
                }
                .content-holder{
                    text-align: center;
                }
            }
        }
    }
        /** md **/
    @media only screen and (max-width: 768px) {

    }
</style>

