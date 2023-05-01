<template>
    <v-app>
      <v-main class="background d-flex justify-center align-center">
        <v-col cols="10" lg="4" class="mx-auto">
          <v-card class="pa-4">
            <div class="text-center">
              <v-avatar size="100" color="blue">
                <v-icon size="40" class="mdi mdi-account" color="gray"></v-icon>
              </v-avatar>
              <h2>Bienvenue</h2>
            </div>
            <v-form @submit.prevent="login">
              <v-card-text>
                <v-text-field
                  type="email"
                  label="Email"
                  v-model="email"
                  placeholder="Entez votre email"
                  prepend-inner-icon="mdi-account"
                />
                <v-text-field
                  :type="passwordShow ? 'text': 'password'"
                  label="Mot de passe"
                  v-model="password"
                  placeholder="Entez votre mot de passe"
                  prepend-inner-icon="mdi-key"
                  :append-inner-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                  @click:append-inner="passwordShow = !passwordShow"
                />
                  
               <v-checkbox label="Se souvenir de moi" color="blue"> </v-checkbox>
               <div justify-content="space-around">
                  <a class="text center mt-3" href="#">Vous avez oubliez votre mot de passe ?</a>
                </div>
              </v-card-text>
  
              <v-card-actions class="justify-center">
                <v-btn type="submit" color="blue">
                  <span class="white--text px-8">
                    Connexion
                  </span>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-main>
    
    </v-app>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'loginForm',
  
  
    data: () => ({
      passwordShow:false,
      email:'',
      password:''
    }),
    methods: {
      login() {
       axios.post('http://localhost:8080/login', {
          email: this.email,
          password: this.password
        }).then(response => {
          // Authentication was successful, redirect to Home page
          console.log(response.data)
          this.$router.push('/home')
        }).catch(error => {
          // Authentication failed, show an error message
          console.error(error)
        })
      }

    }
  }
  </script>
  <style>
  .background{
    background-image: url(../assets/MiR-leasing.jpg) !important;
    width: 100%;
    height:100%;
    display: block;
    background-position: center;
    background-size: cover;
  }
  </style>
  