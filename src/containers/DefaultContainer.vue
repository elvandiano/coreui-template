<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile/>
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="img/brand/2.png" height="25" alt="AirSale Logo">
        <img class="navbar-brand-minimized" src="img/brand/AIRsale_Ia_revisi_icon.png" height="30" alt="AirSale Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg"/>
      <b-navbar-nav class="d-md-down-none">
        <!--<b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>-->
        <!--<b-nav-item class="px-3" to="/users" exact>Users</b-nav-item>-->
        <!--<b-nav-item class="px-3">Settings</b-nav-item>-->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <!--<i class="icon-list"></i>-->
        </b-nav-item>
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item class="d-md-down-none">
          <!--<i class="icon-list"></i>-->
        </b-nav-item>
      </b-navbar-nav>
      <!--<AsideToggler class="d-none d-lg-block" />-->
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">

      <!--SideBar Menu Samping-->
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>

      <!--Main Menu-->
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>

    </div>

    <!--footer-->
    <TheFooter>
      <div>
        <span class="ml-1">&copy; 2019 AIRNation.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="http://www.iconpln.co.id/en/" target="_blank">ICON+</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
  import nav from '@/_nav'
  import {
    Header as AppHeader,
    SidebarToggler,
    Sidebar as AppSidebar,
    SidebarFooter,
    SidebarForm,
    SidebarHeader,
    SidebarMinimizer,
    SidebarNav,
    Aside as AppAside,
    AsideToggler,
    Footer as TheFooter,
    Breadcrumb
  } from '@coreui/vue'
  import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'

  export default {
    name: 'DefaultContainer',
    components: {
      AsideToggler,
      AppHeader,
      AppSidebar,
      AppAside,
      TheFooter,
      Breadcrumb,
      DefaultHeaderDropdownAccnt,
      SidebarForm,
      SidebarFooter,
      SidebarToggler,
      SidebarHeader,
      SidebarNav,
      SidebarMinimizer
    },
    data() {
      return {
        nav: nav.items
      }
    },
    computed: {
      name() {
        return this.$route.name
      },
      list() {
        return this.$route.matched.filter((route) => route.name || route.meta.label)
      }
    },
    methods: {

    }
  }
</script>
