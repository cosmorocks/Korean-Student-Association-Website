<template>
    <div class="officers container">
        <h1 class="meet-the-team-header">Meet the team</h1>
        <div class="people-holder container">
            <div class="row justify-content-between">
                <div class="col-xl-3 col-l-4 col-m-4 col-s-6">
                </div>
                <div class="col-xl-3 col-l-4 col-m-4 col-s-6">
                </div>
                <div class="col-xl-3 col-l-4 col-m-4 col-s-6">
                </div>
                <div class="col-xl-3 col-l-4 col-m-4 col-s-6">
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="person col-xl-3 col-l-4 col-m-4 col-s-6">
                </div>
                <div class="person col-xl-3 col-l-4 col-m-4 col-s-6">
                </div>
                <div class="person col-xl-3 col-l-4 col-m-4 col-s-6">
                </div>
                <div class="person col-xl-3 col-l-4 col-m-4 col-s-6">
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="person col-xl-3 col-l-4 col-m-4 col-s-6">
                </div>
                <div class="person col-xl-3 col-l-4 col-m-4 col-s-6">
                </div>
                <div class="person col-xl-3 col-l-4 col-m-4 col-s-6">
                </div>
                <div class="person col-xl-3 col-l-4 col-m-4 col-s-6">
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
        /* border: 2px dotted red; */
        height: fit-content;
    }
    .person{
        border: 1px solid blue;
        height: 250px;
        width: 200px;
        display: inline-block;
        margin-top: 60px;
    }
</style>