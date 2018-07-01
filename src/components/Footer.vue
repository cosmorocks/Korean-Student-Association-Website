<template>
    <div class="footer">
        <footer>
            <div class="ksa-logo">
                <img class="ksa-logo" src="../assets/logo.png">
            </div>
            <div class="uva-text">
                <p>Although this organization has members who are University of Virginia students and may have University employees associated or engaged in its activities and affairs, the organization is not a part of or an agency of the University. It is a separate and independent organization, which is responsible for and manages its own activities and affairs. The University does not direct, supervise or control the organization and is not responsible for the organization’s contracts, acts or omissions.</p>
            </div>
            <div class="footer-line">
            </div>
            <div class="facebook-icon">
                <a href="" target="_blank"><i class="fab fa-facebook"></i></a>
            </div>
            <div class="author-statement">
                <p>Made with <i class="fas fa-heart heart-icon"></i> by <a class="matthew-han-link" href="" target="_blank">Matthew Han </a></p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    .footer{
        margin-top: 90px;
    }
    footer{
        background-color: black;
        height: 250px;
        width: 100%;
        position: relative;
    }
    .author-statement{
        text-align: center;
        color: white;
        position: absolute;
        font-size: 14px;
        top: 86%;
        left:147px;
        transform: translate(-50%, -50%);
    }
    .heart-icon{
        color: red;
        padding: 0 5px 0 5px;
    }
    .matthew-han-link{
        color: white;
    }
    .facebook-icon{
        color: white;
        position: absolute;
        bottom: 20px;
        font-size: 40px;
        left: 95.7%;
        top: 73%;
    }
    .uva-text{
        color: white;
        width: 70%;
        text-align: right;
        top: 37%;
        left: 62.5%;
        transform: translate(-50%, -50%);
        position: absolute;
        font-size: 13px;
    }
    .footer-line{
        border-top: 1px solid white;
        position: absolute;
        top: 100px;
        width: 95%;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .ksa-logo{
        width: 100px;
        position: absolute;
        left: 1.5%;
        top: 20%;
    }
    /* .like-us{
        font-size: 20px;
        display: absol
    } */
    /** lg **/
    @media only screen and (max-width: 1200px) {
        .author-statement{
            left: 130px;
        }
        .facebook-icon{
            left: 94%;
        }
    }
        /** lg **/
    @media only screen and (max-width: 992px) {
        .author-statement{
            left: 130px;
        }
        .facebook-icon{
            left: 93%;
        }
    }
    /** md **/
    @media only screen and (max-width: 768px) {
        .author-statement p{
            font-size: 12px;
            left: 90px;
        }
        .uva-text{
            font-size: 10px;
        }
        .facebook-icon{
            left: 91%;
        }
    }
    /** small **/
    @media only screen and (max-width: 576px) {
        .uva-text{
            font-size: 9px;
        }
        .author-statement{
            left: 100px;
        }
        .facebook-icon{
            left: 88%;
        }
        .ksa-logo{
            left: -1.4%;
        }
    }
</style>