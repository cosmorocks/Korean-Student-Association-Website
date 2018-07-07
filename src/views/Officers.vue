<template>
    <div class="officers container">
        <h1 class="meet-the-team-header">Meet the team</h1>
        <div class="people-holder">
            <div class="person-holder">
                
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
        border: 1px solid red;
        display: grid;
        grid-template-columns: 4;
        .person-holder{
            border: 1px solid blue;
            height: 200px;
        }
    }
</style>