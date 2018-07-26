<template>
    <div class="events">
        <div class="container my-container">
            <h1 class="header">Events</h1>
            <Event class="event-item" image="first-gen-meeting.jpg" title="First General Meeting!" description="KSA's first general body meeting! Come by to learn more about KSA, make new friends, and meet the amazing officer board! See you there!" month="Sept" day="3rd" time="7pm" location="Physics Building"></Event>
            <Event class="event-item" title="More to come soon!" description="Visit our facebook page to keep up with all of our events!" month="TBD" day="tbd" time="tbd" location="tbd" image="logo.png"></Event>
            <Event class="event-item" title="More to come soon!" description="Visit our facebook page to keep up with all of our events!" month="TBD" day="tbd" time="tbd" location="tbd" image="logo.png"></Event>
        </div>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Event from '@/components/Event.vue'
export default {
    components:{
        Footer,
        Event
    }
}
</script>

<style lang="scss" scoped>
    .events{
        .my-container{
            .header{
                text-align: center;
                font-size: 45px;
                margin: 0.85em 0 1.5em 0;
                padding: 0;
                font-weight: 500;
            }
            .event-item{
                margin-bottom: 3em;
            }
        }
    }
</style>
