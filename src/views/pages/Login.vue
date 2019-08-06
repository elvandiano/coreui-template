<template>
    <div id="bgrn" class="app flex-row align-items-center" v-loading.fullscreen.lock="loading">
        <div class="container">
            <b-row class="justify-content-center">
                <b-col md="5">
                    <b-card-group>
                        <b-card no-body class="p-4" id="dataInput">
                            <b-card-body>
                                <b-form>
                                    <div align="center" style="margin-bottom: 20px;">
                                        <img class="navbar-brand-full" src="img/brand/2.png" height="60"
                                             alt="AirSale Logo">
                                    </div>
                                    <p style="color: whitesmoke" >Sign In to your account</p>
                                    <b-input-group class="mb-3">
                                        <b-input-group-prepend>
                                            <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                                        </b-input-group-prepend>
                                        <b-form-input type="text" class="form-control" placeholder="Username"
                                                      v-model="username"
                                                      autocomplete="username email"/>
                                    </b-input-group>
                                    <b-input-group class="mb-4">
                                        <b-input-group-prepend>
                                            <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                                        </b-input-group-prepend>
                                        <b-form-input type="password" class="form-control" placeholder="Password"
                                                      v-model="password"
                                                      autocomplete="current-password"/>
                                    </b-input-group>
                                    <b-row>
                                        <b-col cols="12">
                                            <div align="center">
                                                <b-button type="submit" @click="onLogin" class="btn">Login
                                                </b-button>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {HTTP} from "../../base_api/base_api";
    // import Cookie from 'js-cookie';

    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
                loading: false,
            }
        },
        watch: {
            username() {
                // console.log(this.username);
            }
        },
        beforeCreate() {
            if (localStorage.getItem("token")) {
                this.$router.replace("/Dashboard");
            }
        },
        methods: {
            /**
             * LOGIN Back Office
             * - @param username
             * - @param password
             */
            onLogin(e) {
                this.$router.replace("/dashboard");
                // e.preventDefault();
                // let data = {
                //     'password': this.password,
                //     'username': this.username,
                // };
                // const config = {
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // };
                //
                // /**
                //  * Set TOKEN to LocalStorage
                //  */
                //
                // HTTP.post('/auth/login', data, config)
                //     .then(response => {
                //         let res = response.data.success;
                //         if (res === true) {
                //             localStorage.setItem("token", response.data.data.token);
                //             // console.log(res, response.data.message)
                //             this.$router.replace("/dashboard");
                //             this.loading = false;
                //         } else {
                //             Vue.$alert("error", response.data.message);
                //             // Vue.swal("Error", response.data.message, "error");
                //             // error.status === 401
                //             //     ? Vue.prototype.$notification("danger", "Username or Password wrong.")
                //             //     : Vue.prototype.$notification("danger", "Oppsss can't login");
                //             // reject(error)
                //             // Vue.$notification("danger",response.data.message);
                //             this.loading = false;
                //         }
                //     })
            }
        }
    }
</script>

<style scoped>
    #bgrn {
        background-image: url("../../../public/img/avatars/ace.jpg");
    }
    #dataInput {
        background: rgba(1,8.1,9.7,0.3);
        border: 0;
        border-radius: 10px;
    }
    .btn:hover {
        background-color: #3a8c8e;
        color: white;
    }
    .btn {
        background-color: #ddd;
        border: none;
        color: black;
        text-align: center;
        transition: 0.2s;
        width:80%;
        border-radius: 30px;
        font-family: "cursive";
    }

</style>
