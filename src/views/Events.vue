<template>
    <div class="events">
        <div class="container">
            <h1 class="header">Events</h1>
            
            <div class="card-bg fb-page-holder">
                <div class="fb-page" data-href="https://www.facebook.com/ksaatuva/" data-tabs="timeline, events" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ksaatuva/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ksaatuva/">Korean Student Association at UVA</a></blockquote></div>
            </div>
            <div class="card-bg more-info">
                <h3>First General Body Meeting TBD</h3>
            </div>

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
    components:{
        Footer
    }
}
</script>

<style lang="scss" scoped>
    .events{
        height: fit-content;
        .container{
            text-align: center;
            .header{
                text-align: center;
                font-size: 45px;
                margin: 40px 0 0 0;
                padding: 0;
            }
            .fb-page-holder{
                display: inline-block;
            }
            .card-bg{
                width: fit-content;
                height: fit-content;
                margin: 40px 0 0 0;
            }
            .more-info{
                display: inline-block;
                width: fit-content;
                height: fit-content;
                vertical-align: top;
                margin-left: 20px;
            }
        }
    }
    /** small **/
    @media only screen and (max-width: 576px) {
        //centers events when mobile
        .events{
            .container{
                .more-info{
                    margin-left: 0;
                }
            }
        }
    }
</style>
