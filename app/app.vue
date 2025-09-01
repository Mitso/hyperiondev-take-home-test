<template>
  <!-- page: global/main -->

  <!-- Start: Other Sections -->
    <!-- Loader -->
    <NuxtRouteAnnouncer />
    <!-- Chat widget -->
    <div class="fixed bottom-8 right-8 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.6 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    </div>
  <!-- End: Other Sections -->

  <!-- Start: Primary Header Section -->
    <!-- Navigation -->
    <header class="header h-18 px-4 lg:px-12 py-4 shadow-md w-full">
      <nav class="nav flex flex-col lg:flex-row items-center justify-between">
        <div class="menu flex flex-col lg:flex-row space-x-8">
          <NuxtLink to="/" class="logo">
            <img 
              alt="HyperionDev" 
              src="/logo.svg" 
              width="170"
              height="auto"
              class="logo__image"
            />
          </NuxtLink>
          <ul class="menu-list hidden lg:flex flex-col lg:flex-row items-center">
            <li class="menu-list__item">
              <button class="menu-list__link menu-list__link-highlight dropdown !flex items-center justify-between space-x-1">
                <span>Explore courses</span>
                <span class="dropdown-arrow">
                  <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7081 1.5813L6.48605 6.7832L1.42505 1.7017" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>            
                </span>
              </button>
            </li>
            <li class="menu-list__item">
              <a href="#" class="menu-list__link dropdown !flex items-center justify-between space-x-1">
                <span>Study options</span>
                <span class="dropdown-arrow">
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7081 1.5813L6.48605 6.7832L1.42505 1.7017" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>            
              </span>
              </a>
            </li>
            <li class="menu-list__item">
              <a href="#" class="menu-list__link">Pricing</a>
            </li>
            <li class="menu-list__item">
              <a href="#" class="menu-list__link">Reviews</a>
            </li>
            <li class="menu-list__item">
              <a href="#" class="menu-list__link">Contact us</a>
            </li>
          </ul>
        </div>
        
        <div class="nav-cta flex center items-center space-x-4">
          <div class="flex justify-center items-center space-x-2">
            <template v-if="userAuth.isAuthenticated">
              <NuxtLink v-if="!userAuth.user.signedIn" to="/login" class="nav-cta__item text-white hover:text-gray-800">Sign In</NuxtLink>
              <NuxtLink to="/account/dashboard" class="nav-cta__item text-white hover:text-gray-800">Dashboard</NuxtLink>
              <span class="nav-cta__item block w-[2px] h-8 bg-white"></span>
              <button @click="logout" class="nav-cta__btn border-2 border-white text-white px-4 py-1 rounded">Log out</button>
            </template>

            <template v-else>
                <NuxtLink to="/" class="nav-cta__item text-white hover:text-gray-800">Sign Up</NuxtLink>
                <span class="nav-cta__item block">/</span>
                <NuxtLink to="/login" class="nav-cta__item text-white hover:text-gray-800">Sign In</NuxtLink>
                <span class="nav-cta__item block w-[2px] h-8 bg-white"></span>
                <button class="nav-cta__btn border-2 border-white text-white px-4 py-1 rounded">Begin trial</button>
            </template>
           
          </div>
        </div>
      </nav>
    </header>
  <!-- End: Primary Header Section -->

  <!-- Start: Secondary Header Section -->
  <header v-if="userAuth.isAuthenticated" class="bootcamp-secondary-header secondary-header bg-slate-800 text-white py-4 px-4 lg:px-12">
      <div class="secondary-header-inner flex flex-col lg:flex-row items-center justify-center">
        <NuxtLink to="/" class="menu-list__link">Contact course Adviser</NuxtLink>
        
        <NuxtLink to="/account/profile" class="menu-list__link">My Profile</NuxtLink>
       
        <NuxtLink v-if="courseDataLength === 0 && !registrationProgress.completed" :to="`/course/register/software-engineering?step=${registrationProgress.currentStep}`" class="menu-list__link">Complete Bootcamp Registration</NuxtLink>
       
        <NuxtLink to="/bootcamps/upgrade" class="menu-list__link menu-list__link-highlight text-white px-4 py-1 rounded menu-list__link-btn">
          Upgrade to full Bootcamp
        </NuxtLink>
      </div>
  </header>
  <!-- StEndart: Secondary Header Section -->

  <!-- Start: Body Section -->
    <!-- <NuxtWelcome /> -->
    <section class="body">
      <NuxtPage />
    </section>

  <!-- End: Body Section -->
  
  <!-- Start: Footer Section -->
    <!-- Bottom navigation -->
    <footer class="footer flex justify-center p-6">
      <div class="footer__content">
        <p class="footer-text">© HyperionDev. All rights reserved.</p>
      </div>
    </footer>
  <!-- End: Footer Section -->
</template>

<script setup>
  import localforage from 'localforage';
  import { useUserAuth } from '~/stores/userAuth'
  import { useRegistrationProgress } from '~/stores/registrationProgress'

  const userAuth = useUserAuth()
  const registrationProgress = useRegistrationProgress()

  let userData = reactive({})
  let courseData = reactive({})
  const courseDataLength = ref(0)

  onMounted(async () => {
    // Check if user state is technically authenticated and get their basic info
    if(!userAuth.user) await navigateTo('/')
    userData = await localforage.getItem('user')
    courseData = await localforage.getItem('courseRegForm')
    courseDataLength.value = Object.entries(courseData.body).lengt
    userAuth.setUser(userData)
  })
 
  const logout = async () => {
    try {
      await localforage.removeItem('user');
      await localforage.removeItem('courseRegForm');
      await navigateTo('/');
      userAuth.logout()
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }
</script>