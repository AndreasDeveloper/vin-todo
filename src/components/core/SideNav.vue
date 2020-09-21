<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="/" class="nav-link">
          <span class="link-text logo-text vin-font">Vin</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              />
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              />
            </g>
          </svg>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" @click.prevent="handleRoute('/dashboard')" class="nav-link">
          <DashboardIcon fill="#fff" />
          <span class="link-text">Dashboard</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" @click.prevent="handleRoute('/calendar')" class="nav-link">
          <CalendarIcon fill="#fff" />
          <span class="link-text">Calendar</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">
          <DataIcon fill="#fff" />
          <span class="link-text">Data</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">
          <TasksIcon fill="#fff" />
          <span class="link-text">Tasks</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">
          <AnalyticsIcon fill="#fff" />
          <span class="link-text">Analytics</span>
        </a>
      </li>

      <li class="nav-item" id="themeButton">
        <a href="#" class="nav-link">
          <LogoutIcon fill="#fff" />
          <span class="link-text">Logout</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import DashboardIcon from "@/assets/icons/dashboard.svg";
import CalendarIcon from "@/assets/icons/appointment.svg";
import DataIcon from "@/assets/icons/secure.svg";
import TasksIcon from "@/assets/icons/checklist.svg";
import AnalyticsIcon from "@/assets/icons/data.svg";
import LogoutIcon from "@/assets/icons/logout.svg";

export default {
  name: "SideNav",
  components: {
    DashboardIcon,
    CalendarIcon,
    DataIcon,
    TasksIcon,
    AnalyticsIcon,
    LogoutIcon,
  },
  methods: {
    handleRoute(path) {
      this.$router.push(path).catch((err) => {
        if (err) {
          if (err.name === "NavigationDuplicated") {
          }
        }
      });
      this.currentPath = path;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/_side-nav.scss";
</style>