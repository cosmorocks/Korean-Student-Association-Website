<template>
    <div class="officers container">
        <h1 class="meet-the-team-header">Meet the team</h1>
        <div class="people-holder container">
            <div class="row">
                <div class="person col-lg-3">
                </div>
                <div class="person col-lg-3">
                </div>
                <div class="person col-lg-3">
                </div>
                <div class="person col-lg-3">
                </div>
            </div>
            <div class="row">
                <div class="person col-lg-3">
                </div>
                <div class="person col-lg-3">
                </div>
                <div class="person col-lg-3">
                </div>
                <div class="person col-lg-3">
                </div>
            </div>
            <div class="row">
                <div class="person col-lg-3">
                </div>
                <div class="person col-lg-3">
                </div>
                <div class="person col-lg-3">
                </div>
                <div class="person col-lg-3">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .officers{
        height: 1000px;
    }
    .meet-the-team-header{
        text-align: center;
        font-size: 45px;
        margin-top: 40px;
    }
    .people-holder{ /** strictly to help me build this page, delete before export **/
        border: 2px dotted red;
        height: fit-content;
        margin-top: 60px; 
    }
    .person{
        border: 1px solid blue;
        height: 250px;
        width: 200px;
        display: inline-block;
    }
</style>