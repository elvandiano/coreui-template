import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Beranda = () => import('@/views/Dashboard')

const Login = () => import('@/views/pages/Login')

//menu
const Profile = () => import('@/views/profile/Profile')

//Menu Pengaduan
const Pengaduan = () => import('@/views/pengaduan/Pengaduan')
const DetailPengaduan = () => import('@/views/pengaduan/DetailPengaduan')

//menu Berita
const Berita = () => import('@/views/berita/Berita')
const TambahBerita = () => import('@/views/berita/TambahBerita')
const EditBerita = () => import('@/views/berita/EditBerita')

//menu Lokasi
const Lokasi = () => import('@/views/lokasi/Lokasi')
const TambahLokasi = () => import('@/views/lokasi/TambahLokasi')
const EditLokasi = () => import('@/views/lokasi/EditLokasi')

//menu Acara
const Acara = () => import('@/views/acara/Acara')
const TambahAcara = () => import('@/views/acara/TambahAcara')
const EditAcara = () => import('@/views/acara/EditAcara')

//menu Government
const Pemerintah = () => import('@/views/government/Government')
const TambahPemerintah = () => import('@/views/government/TambahGovernment')
const EditPemerintah = () => import('@/views/government/EditGovernment')

Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            redirect: 'pages/login',
            component: DefaultContainer,
            children: [
                {
                    path: 'dashboard',
                    name: 'Beranda',
                    component: Beranda,
                    // beforeEnter(to, from, next) {
                    //     if (localStorage.getItem("token")) {
                    //         next()
                    //     } else {
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'pengaduan',
                    name: 'Pengaduan',
                    component: Pengaduan,
                    // beforeEnter(to, from, next) {
                    //     if (localStorage.getItem("token")) {
                    //         next()
                    //     } else {
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'pengaduan/detail/:id',
                    name: 'Detail Pengaduan',
                    component: DetailPengaduan,
                    // beforeEnter(to, from, next) {
                    //     if (localStorage.getItem("token")) {
                    //         next()
                    //     } else {
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'profile',
                    name: 'Profile',
                    component: Profile,
                    // beforeEnter(to, from, next) {
                    //     if (localStorage.getItem("token")) {
                    //         next()
                    //     } else {
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'acara',
                    name: 'Acara',
                    component: Acara,
                    // beforeEnter(to, from, next) {
                    //     if (localStorage.getItem("token")) {
                    //         next()
                    //     } else {
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'acara/tambah',
                    name: 'Acara / Tambah',
                    component: TambahAcara,
                    // beforeEnter(to, from, next){
                    //     if(localStorage.getItem("token")){
                    //         next()
                    //     }else{
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'acara/edit/:id',
                    name: 'Acara / Edit',
                    component: EditAcara,
                    // beforeEnter(to, from, next){
                    //     if(localStorage.getItem("token")){
                    //         next()
                    //     }else{
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'lokasi',
                    name: 'Lokasi',
                    component: Lokasi,
                    // beforeEnter(to, from, next) {
                    //     if (localStorage.getItem("token")) {
                    //         next()
                    //     } else {
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'lokasi/tambah',
                    name: 'Lokasi / Tambah',
                    component: TambahLokasi,
                    // beforeEnter(to, from, next){
                    //     if(localStorage.getItem("token")){
                    //         next()
                    //     }else{
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'lokasi/edit/:id',
                    name: 'Lokasi / edit',
                    component: EditLokasi,
                    // beforeEnter(to, from, next){
                    //     if(localStorage.getItem("token")){
                    //         next()
                    //     }else{
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'berita',
                    name: 'Berita',
                    component: Berita,
                    // beforeEnter(to, from, next) {
                    //     if (localStorage.getItem("token")) {
                    //         next()
                    //     } else {
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'berita/tambah',
                    name: 'Berita / Tambah',
                    component: TambahBerita,
                    // beforeEnter(to, from, next){
                    //     if(localStorage.getItem("token")){
                    //         next()
                    //     }else{
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'berita/edit/:id',
                    name: 'Berita / edit',
                    component: EditBerita,
                    // beforeEnter(to, from, next){
                    //     if(localStorage.getItem("token")){
                    //         next()
                    //     }else{
                    //         next('/')
                    //     }
                    // }
                },


                //government
                {
                    path: 'pemerintah',
                    name: 'Pemerintah',
                    component: Pemerintah,
                    // beforeEnter(to, from, next) {
                    //     if (localStorage.getItem("token")) {
                    //         next()
                    //     } else {
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'pemerintah/tambah',
                    name: 'Pemerintah / Tambah',
                    component: TambahPemerintah,
                    // beforeEnter(to, from, next){
                    //     if(localStorage.getItem("token")){
                    //         next()
                    //     }else{
                    //         next('/')
                    //     }
                    // }
                },
                {
                    path: 'pemerintah/edit/:id',
                    name: 'Pemerintah / edit',
                    component: EditPemerintah,
                    // beforeEnter(to, from, next){
                    //     if(localStorage.getItem("token")){
                    //         next()
                    //     }else{
                    //         next('/')
                    //     }
                    // }
                },

            ]
        },
        {
            path: '/pages',
            redirect: '/pages/login',
            name: 'Pages',
            component: {
                render(c) {
                    return c('router-view')
                }
            },
            children: [
                {
                    path: 'login',
                    name: 'Login',
                    component: Login
                },
            ]
        }
    ]
})
