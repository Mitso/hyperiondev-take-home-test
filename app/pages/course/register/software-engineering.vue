<!-- Pages - course/register/software-engineering.vue -->
<template>
    <div class="bootcamp min-h-screen bg-gray-50">
    <!-- Secondary Header -->
    <header class="bootcamp-secondary-header secondary-header bg-slate-800 text-white py-4 px-12">
        <div class="secondary-header-inner flex items-center justify-center">
        <NuxtLink to="/course/register/software-engineering" class="menu-list__link">Course</NuxtLink>
        </div>
    </header>

    <!-- Main Content -->
    <div class="bootcamp-info info max-w-4xl mx-auto py-12 px-6">
        <!-- Registration Header -->
        <div class="info-header text-center mb-8">
          <div class="info-intro flex items-center justify-center mb-6">
              <img class="info-icon mr-4" src="/assets/images/hd-se-icon.svg" alt="Computer Icon" width="80px" height="75px" />
              <div class="info-heading text-left">
              <h1 class="info-title text-5xl font-bold text-slate-800">Registration</h1>
              <p class="info-subtitle text-sm text-slate-600">Software Engineer Bootcamp</p>
              </div>
          </div>
          
          <h2 class="info-caption text-3xl font-bold text-slate-800 mb-8">Tell us about yourself</h2>
          
          <!-- Progress indicator -->
          <div class="info-step-indicator flex items-center justify-center mb-8">
              <div class="flex items-center">
              <span class="text-yellow-600 text-sm font-medium mr-4">Step 1 of 2</span>
              <div class="flex space-x-2">
                  <div class="w-32 h-2 bg-yellow-500 rounded-full"></div>
                  <div class="w-32 h-2 bg-gray-300 rounded-full"></div>
              </div>
              </div>
          </div>
          </div>
          <!-- Registration Form -->
          <component :is="activeComponent" @next="handleNext" @prev="handlePrev" @submit="handleSubmit" />
      </div>
    </div>
</template>

<script setup>
import localforage from 'localforage';
const stepOne = defineAsyncComponent(() => import('~/components/step-one.vue'));
const stepTwo = defineAsyncComponent(() => import('~/components/step-two.vue'));

// Get user data from previous step (from route params, store, or API)
const route = useRoute()
const router = useRouter()

const courseRegForm = reactive({
  reasonForRegistering: '',
  contentKnowledge: '',
  educationBackground: '',
  age: '',
  gender: '',
  countryOfResidence: 'ZA', // Default to South Africa
  phoneCountryCode: '+27',
  phoneNumber: '',
  employmentStatus: '',
  learningSchedule: '',
  referralSource: ''
});
const currentStep = ref(1);
const handleNext = (payload) => {
  // Save data from the previous step
  Object.assign(courseRegForm, payload.data);
  // Move to the next step
  currentStep.value = 2;
};

const handlePrev = () => {
  // Move back to the previous step
  currentStep.value = 1;
};


// Load user's basic info if available
// onMounted(async () => {
//   console.log('Bootcamp page mounted', route, router);
//   try {
//     // Check if user is authenticated and get their basic info
//     const userData = await localforage.getItem('user')
//     if (userData) {
//       console.log('User data loaded:', userData)
//     }
//   } catch (error) {
//     // If not authenticated, redirect to signup
//     await navigateTo('/')
//   }
// })

const activeComponent = computed(() => {
  if (currentStep.value === 1) {
    return stepOne;
  } else {
    return stepTwo;
  }
});

// Form submission handler
const handleSubmit = async (event) => {
  event.preventDefault()
  
  if (!isFormValid.value) {
    return
  }

  try {
    // Save step 1 data to localforage
    // In a real app, you would send this data to your backend API
    // Here we simulate an API call with a timeout
    // await new Promise(resolve => setTimeout(resolve, 1000))
    // const courseData = await localforage.setItem('course_registration', {
    //     body: {
    //       ...form,
    //       phoneNumber: form.phoneCountryCode + form.phoneNumber
    //     }
    //   })

    console.log('Software engineering: Form submission success')
    
    // Navigate to step 2
    //await navigateTo('/registration/step2')
    
  } catch (error) {
    console.error('Software engineering: Form submission error:', error)
    
    // if (error.data?.message) {
    //   alert(error.data.message)
    // } else {
    //   alert('Failed to save information. Please try again.')
    // }
  } finally {
    console.error('Software engineering: Form submission complete')
  }
}


// SEO
useHead({
  title: 'Registration Step 1 - Tell us about yourself | HyperionDev',
  meta: [
    { name: 'description', content: 'Complete your HyperionDev registration by telling us about your background and goals.' },
    { name: 'robots', content: 'noindex' } // Don't index registration pages
  ]
})
</script>