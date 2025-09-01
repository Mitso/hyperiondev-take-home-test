<!-- Pages - course/register/software-engineering.vue -->
<template>
    <div class="bootcamp min-h-screen bg-gray-50">
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
              <span class="text-yellow-600 text-sm font-medium mr-4">Step {{  currentStep  }} of 2</span>
              <div class="flex space-x-2">
                  <div class="w-32 h-2 bg-yellow-500 rounded-full"></div>
                  <div 
                    class="w-32 h-2 bg-gray-300 rounded-full"
                    :class="{ 'bg-yellow-500': currentStep > 1 }"
                  ></div>
              </div>
              </div>
          </div>
          </div>
          <!-- Registration Form -->
          <component 
            :is="activeComponent" 
            @next="handleGoToStep2"
            @prev="handleGoBackToStep1" 
            @submit="handleAllStepsFormSubmit" />
      </div>
    </div>
</template>

<script setup>
import localforage from 'localforage';

// SEO
useHead({
  title: 'Registration Step 1 - Tell us about yourself | HyperionDev',
  meta: [
    { name: 'description', content: 'Complete your HyperionDev registration by telling us about your background and goals.' },
    { name: 'robots', content: 'noindex' } // Don't index registration pages
  ]
})

const stepOne = defineAsyncComponent(() => import('~/components/step-one.vue'));
const stepTwo = defineAsyncComponent(() => import('~/components/step-two.vue'));

const courseRegFormStep1 = reactive({
  reasonForRegistering: '',
  contentKnowledge: '',
  educationBackground: '',
  age: '',
  gender: '',
  countryOfResidence: 'ZA', // Default to South Africa
  phoneNumber: '',
});

const courseRegFormStep2 = reactive({
  contentKnowledge: '',
  employmentStatus: '',
  learningSchedule: ''
});

const currentStep = ref(1);

const route = useRoute()
const router = useRouter()

// Watch for changes in the route's query parameter and update the step
watch(() => route.query.step, (newStep) => {
  if (newStep) {
    currentStep.value = parseInt(newStep, 10);
  } else {
    // If no query parameter exists, always default to step 1
    currentStep.value = 1;
  }
}, { immediate: true });

const handleGoToStep2 = (payload) => {
  //Step 1: Data Save
  Object.assign(courseRegFormStep1, payload.data);

  //Route to Step 2
  router.push({ query: { ...route.query, step: 2 } });
};

const handleGoBackToStep1 = () => {
  //Route to Step 1
  router.push({ query: { ...route.query, step: 1 } });
};

// Form submission handler
const handleAllStepsFormSubmit = async (payload) => {
  //Step 2: Data Save
  Object.assign(courseRegFormStep2, payload.data);
  
  try {
    const courseData = await localforage.setItem('courseRegForm', {
      body: {
        ...courseRegFormStep1,
        ...courseRegFormStep2
      }
    })
    console.log('Software engineering: Form data saved locally', courseData)
    router.push('/account/dashboard')
  } catch (error) {
    console.error('Software engineering: Error saving form data:', error)
    alert('Failed to save information. Please try again.')
  } finally {
    console.error('Software engineering: Form submission complete')
  }
}

const activeComponent = computed(() => {
  return currentStep.value === 1 ? stepOne : stepTwo;
});

</script>