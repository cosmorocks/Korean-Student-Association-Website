<template>
    <div class="container sign-up-form form-bg">
        <h1 class="header">What are you waiting for?</h1>
        <p class="small-text">Fill out the form below to receive our newsletter and be notified when new events happen!</p>
        <form @submit.prevent="submitForm()" class="submit-form form-bg" name="contact-form" data-netlify="true" data-netlify-honeypot="bot-field">
            <div hidden>
                <label>
                Don’t fill this out: <input name="bot-field" />
                </label>
            </div>
            <label class="form-label">First name</label>
            <input class="name-form first-name" name="name" v-validate="'required'" placeholder="Enter first name" v-model="formData.name">
            <label class="form-label-last-name">Last name </label>
            <input class="name-form first-name" name="lastName" v-validate="'required'" placeholder="Enter last name" v-model="formData.lastName">
            <label class="form-label-email">Email</label>
            <input class="name-form" v-validate="'required'" type="email" name="email" placeholder="Enter email" v-model="formData.email">
            <button class="submit-button form-bg" type="submit">SUBMIT</button>
        </form>
    </div>
</template>

<script>
    // import { required, email } from 'vuelidate/lib/validators'

    export default {
        data() {
            return{
                formData:{
                    name:'',
                    lastName:'',
                    email:''
                }
            }
        },
        methods:{
            // got this code from https://gist.github.com/Gomah/a4bbc8c05bd0e603847b94ffb6a71ac1
            // I don't understand how it works... BUT NETLIFY FORM FINALLY WORKS!!!
            encode(data) {
            return Object.keys(data)
                .map(
                key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                )
                .join('&');
            },
            submitForm() {
                this.$validator.validateAll().then(res=>{
                    if(res){
                        fetch('/', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: this.encode({ 'form-name': 'contact-form', ...this.formData }),
                        })
                                            // .then(() => alert('Success!'))
                        .then(() => this.$swal({text:"Thanks! We'll be in touch                                 shortly.",
                                            type:'success'}))
                        .catch(error => console.log(error));
                    }
                    else {
                        console.log('rip')
                        this.$swal({text:"Please fill out all forms and make sure a valid email is entered!",type:'error'})
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .form-bg{
        border: 1px solid rgba(216,216,216,0.9);
        box-shadow: 0px 5px rgba(0,0,0,0.1); 
        border-radius: 15px;
        padding: 15px;
    }
    .header{
        margin-bottom: 15px;
        font-weight: bold;
    }
    .small-text{
        margin-bottom: 20px;
    }
    .sign-up-form{
        text-align: center; /** center **/
        width: fit-content;
        margin-top: 90px; /** specific to this site for component vertical spacing 
        **/
        padding: 40px;
    }
    .submit-form{
        width: 100%;
        margin: 0 auto;
        padding: 17px;
        background-color: lightgray;
        height: 380px;
    }
    .name-form{
        display: block;
        width: 80%;
        margin: 0 auto;
        border-radius: 15px;
        border: none;
        background-color: white;
        padding: 15px;
    }
    .first-name{
        margin-bottom: 10px;
    }
    .form-label{
        margin-left: -415px;
    }
    .form-label-email{
        margin-left: -450px;
    }
    .form-label-last-name{
        margin-left: -415px;
    }
    .submit-button{
        padding: 10px 20px 10px 20px;
        margin-top: 30px;
        margin-left: 420px;
        background-color: white;
    }
    .submit-button:hover{
        padding: 12px 22px 12px 22px;
        cursor: pointer;
    }
    .submit-button:focus{
        outline: none;
    }

    /** lg **/
    @media only screen and (max-width: 992px) {
    }
    /** md **/
    @media only screen and (max-width: 768px) {
        .form-label{
            margin-left: -228px;
        }
        .form-label-last-name{
            margin-left: -228px;
        }
        .form-label-email{
            margin-left: -265px;
        }
        .submit-button{
            margin-left: 238px;
        }
        .header{
            font-size: 5vw;
        }
        .small-text{
            font-size: 3vw;
        }
    }
    /** small **/
    @media only screen and (max-width: 576px) {
        .form-label{
            margin-left: -55%;
        }
        .form-label-last-name{
            margin-left: -58%;
        }
        .form-label-email{
            margin-left: -69%;
        }
        .submit-button{
            margin-left: 50%;
        }
    }
</style>