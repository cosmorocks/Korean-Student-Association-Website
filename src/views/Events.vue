<template>
    <div>
        <div class="container">
            <h1 class="header">Events</h1>
            <div class="card-bg first-gen-meeting">
                <h3>First General Body Meeting</h3>
                <div class="card-bg first-gen-meeting">
                    <h5>Monday, September 3rd 6-7 PM</h5>
                    <p>PHS 204 (Physics Building)</p>
                </div>
            </div>
            <div class="card-bg first-gen-meeting">
                <h3>More coming soon!</h3>
                <div class="card-bg first-gen-meeting">
                    <h5>Check out our facebook page!</h5>
                    <p>Click to stay up to date</p>
                </div>
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
    .container{
        .header{
            text-align: center;
            font-size: 45px;
            margin: 40px 0 0 0;
            padding: 0;
            font-weight: 500;
        }
        .first-gen-meeting{
            text-align: center;
            width: fit-content;
            height: fit-content;
            margin: 30px auto;
            h3{
                padding: 10px 10px 0px 10px;
            }
        }
    }
    
</style>
