<template>
    <div class="events">
        <div class="container my-container">
            <h1 class="header">Events</h1>
            <a href="https://www.facebook.com/events/1425184384271825/"><Event class="event-item" image="smores.jpg" title="Smores Night with JC and ISA" description="Come out to eat some s'mores and meet members from other CIOs!" month="Nov" day="10th" time="7pm" location="Lawn Room 25"></Event></a>
            <a href="https://www.facebook.com/events/595754221233098/"><Event class="event-item" title="Chipotle Fundraiser" description="Come to Chipotle with us to raise money for KSA and to eat with friends! Sign up for a ride in the Facebook event description." month="Nov" day="12th" time="5pm" location="Barracks Chipotle" image="chip.jpg"></Event></a>
            <Event class="event-item" title="Thanksgiving Potluck" description="Families will be cooking food for us to enjoy for an organization-wide potluck before Thanksgiving break! Come out to try some yummy Korean food." month="Nov" day="24th" time="6pm" location="MSC" image="logo.png"></Event>
            <Event class="event-item" image="first-gen-meeting.jpg" title="Spring General Meeting" description="KSA's spring general body meeting! Come by to learn more about upcoming KSA events, watch our K-EXPO dance previews, and make new friends! See you there!" month="Jan" day="18th" time="6pm" location="Runk Green Room"></Event>
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
