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

  <!-- Start: Header Section -->
    <!-- Navigation -->
    <header class="header h-18 px-4 lg:px-12 py-4 shadow-md w-full">
      <nav class="nav flex items-center justify-between flex justify-between items-center ">
        <div class="menu flex space-x-8">
            <a href="#" class="logo">
              <img 
                alt="HyperionDev" 
                src="/logo.svg" 
                width="170"
                height="auto"
                class="logo__image"
              />
            </a>
            <ul class="menu-list flex items-center">
              <li class="menu-list__item">
               <button class="menu-list__link rounded-md bg-yellow-600">Explore courses</button>
              </li>
              <li class="menu-list__item">
                <a href="#" class="menu-list__link">Study options</a>
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
          <button class="nav-cta__item text-white hover:text-gray-800">Log in</button>
          <span class="nav-cta__item block w-[2px] h-8 bg-white"></span>
          <button class="nav-cta__item border-2 border-white text-white px-4 py-1 rounded">Begin trial</button>
        </div>
      </nav>
    </header>
  <!-- End: Header Section -->

  <!-- Start: Body Section -->
    <!-- <NuxtWelcome /> -->
    <section class="body">
      <NuxtPage />
    </section>

  <!-- End: Body Section -->
  
  <!-- Start: Footer Section -->
    <!-- Bottom navigation -->
    <footer class="footer flex justify-center space-x-8 p-6 border-t">
      <div class="footer__content">
        <button class="p-3 text-gray-400 hover:text-gray-600">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          <span class="block text-xs mt-1">Home</span>
        </button>
        <button class="p-3 text-gray-400 hover:text-gray-600">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 2.5l3.5 2.5-3.5 2.5v-5zM4 6l8 5 8-5v12H4V6z"/>
          </svg>
          <span class="block text-xs mt-1">Messages</span>
        </button>
      </div>
    </footer>
  <!-- End: Footer Section -->
</template>