/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('sto', require('./components/Sto.vue').default);
Vue.component('stolovi', require('./components/Stolovi.vue').default);
Vue.component('meni', require('./components/Meni.vue').default);
Vue.component('proizvod', require('./components/Proizvod.vue').default);
Vue.component('novi-proizvod', require('./components/NoviProizvod.vue').default);
Vue.component('racun', require('./components/Racun.vue').default);
Vue.component('meni-racun', require('./components/MeniRacun.vue').default);
Vue.component('stavka-racuna', require('./components/StavkaRacuna.vue').default);
Vue.component('stavka-racun-meni', require('./components/StavkaRacunMeni.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
