<template>
    <div class="officers container">
        <h1 class="meet-the-team-header">Meet the team</h1>
        <div class="people-holder">
            <div class="person-holder">
                <div class="image">
                    <img src="../assets/steve.jpg">
                </div>
                <h4>Steve Hong</h4>
                <p>President</p>
            </div>
            <div class="person-holder">

            </div>
            <div class="person-holder">

            </div>
            <div class="person-holder">

            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .meet-the-team-header{
        text-align: center;
        font-size: 45px;
        margin-top: 40px;
    }
    .people-holder{
        display: grid;
        margin-top: 70px;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 3em;
        .person-holder{
            border: 1px solid red;
            height: 300px;
            text-align: center;
            img{
                max-width: 100%;
            }
            h4{
                margin-top: 10px;
                margin-bottom: 0;
            }
        }
    }
</style>