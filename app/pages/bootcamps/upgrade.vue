<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 via-teal-400 to-green-400">
    <!-- Promotion Banner -->
    <div class="text-center py-4 bg-green-500 text-white font-semibold">
      Go bold. Get ahead. 🎯 30% OFF
    </div>

    <!-- Main Content -->
    <main class="upgrage-wrapper px-0 py-8 lg:py-12">
      <!-- Countdown Section -->
      <section class="countdown-section text-center text-white mb-16">
        <h1 class="text-2xl lg:text-4xl md:text-5xl font-bold mb-4 lg:mb-8">
          Next Software Engineering cohort starts in
        </h1>
        
        <div class="flex justify-center space-x-2 lg:space-x-4 mb-8">
          <div class="bg-white text-gray-900 rounded-lg p-2 lg:p-6 min-w-[20%] lg:min-w-[80px]">
            <div class="text-3xl font-bold">{{ countdown.days }}</div>
            <div class="text-sm text-gray-600">Days</div>
          </div>
          <div class="bg-white text-gray-900 rounded-lg p-2 lg:p-6 min-w-[20%] lg:min-w-[80px]">
            <div class="text-2xl lg:text-3xl font-bold">{{ countdown.hours }}</div>
            <div class="text-sm text-gray-600">Hours</div>
          </div>
          <div class="bg-white text-gray-900 rounded-lg p-2 lg:p-6 min-w-[20%] lg:min-w-[80px]">
            <div class="text-2xl lg:text-3xl font-bold">{{ countdown.minutes }}</div>
            <div class="text-sm text-gray-600">Minutes</div>
          </div>
          <div class="bg-white text-gray-900 rounded-lg p-2 lg:p-6 min-w-[20%] lg:min-w-[80px]">
            <div class="text-2xl lg:text-3xl font-bold">{{ countdown.seconds }}</div>
            <div class="text-sm text-gray-600">Seconds</div>
          </div>
        </div>

        <div class="countdown-desc text-lg mb-4 lg:mb-8">
          Due to high demand and limits on enrollment set by the University, there are only 
          <span class="font-bold text-2xl">20</span> places remaining for students for the 2025 academic year.
        </div>
      </section>

      <!-- Pricing Options -->
      <section class="pricing-section w-full lg:max-w-6xl mx-auto mb-16 p-2 lg:p-0">
        <div class="pricing-section--inner bg-white rounded-2xl p-4 lg:p-8 shadow-2xl">
          <h2 class="text-4xl font-bold text-center mb-6 text-gray-900">
            You've got options...
          </h2>
          
          <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            You can study this course on multiple options - select what works best for you below. Don't worry, after 
            paying you can select a different bootcamp or start date than the one listed below. Please note, by 
            selecting "Pay with Card" you accept our Terms & Conditions and Refund Policy.
          </p>

          <div class="grid md:grid-cols-4 gap-6">
            <!-- Full Time Option 1 -->
            <div class="relative border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div class="absolute -top-3 -left-3 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                20% OFF
              </div>
              <div class="text-center">
                <h3 class="font-semibold mb-2">Study <span class="text-blue-600">Full Time</span></h3>
                <div class="text-gray-500 line-through text-sm">£4,995</div>
                <div class="text-3xl font-bold text-gray-900 mb-2">£4,245</div>
                <div class="text-sm text-gray-600 mb-4">Upfront</div>
                <div class="text-sm text-gray-600 mb-6">Study over 3 months</div>
                <div class="text-xs text-gray-500 mb-6">
                  Pay upfront, get a 15% discount & study over 3 months
                </div>
                <button class="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Pay with Card →
                </button>
              </div>
            </div>

            <!-- Part Time Option 1 -->
            <div class="relative border-2 border-blue-500 rounded-xl p-6 hover:shadow-lg transition-shadow bg-blue-50">
              <div class="absolute -top-3 -left-3 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                20% OFF
              </div>
              <div class="text-center">
                <h3 class="font-semibold mb-2">Study <span class="text-blue-600">Part Time</span></h3>
                <div class="text-gray-500 line-through text-sm">£4,995</div>
                <div class="text-3xl font-bold text-gray-900 mb-2">£4,245</div>
                <div class="text-sm text-gray-600 mb-4">Upfront</div>
                <div class="text-sm text-gray-600 mb-6">Study over 6 months</div>
                <div class="text-xs text-gray-500 mb-6">
                  Pay upfront, get a 15% discount & study over 6 months
                </div>
                <button class="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Pay with Card →
                </button>
              </div>
            </div>

            <!-- Full Time Option 2 -->
            <div class="border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div class="text-center">
                <h3 class="font-semibold mb-2">Study <span class="text-blue-600">Full Time</span></h3>
                <div class="text-3xl font-bold text-gray-900 mb-2">£1,885</div>
                <div class="text-sm text-gray-600 mb-4">Monthly</div>
                <div class="text-sm text-gray-600 mb-6">Study over 3 months</div>
                <div class="text-xs text-gray-500 mb-6">
                  Pay over 2 months after an initial installment of £2,995 to secure your place
                </div>
                <button class="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Pay with Card →
                </button>
              </div>
            </div>

            <!-- Part Time Option 2 -->
            <div class="border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div class="text-center">
                <h3 class="font-semibold mb-2">Study <span class="text-blue-600">Part Time</span></h3>
                <div class="text-3xl font-bold text-gray-900 mb-2">£754</div>
                <div class="text-sm text-gray-600 mb-4">Monthly</div>
                <div class="text-sm text-gray-600 mb-6">Study over 6 months</div>
                <div class="text-xs text-gray-500 mb-6">
                  Pay over 5 months after an initial installment of £2,995 to secure your place
                </div>
                <button class="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Pay with Card →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div class="services w-full bg-white flex items-start justify-center flex-col lg:flex-row lg:space-x-8 mx-auto my-0 pt-8">
        <div class="services--inner border-b-2 lg:max-w-6xl">
          <!-- Student Loan Section -->
          <section class="student-loan-section mx-auto text-center mb-4 lg:mb-8">
            <div class="student-loan-inner border-b-2 p-4 lg:p-8">
              <div class="flex items-center justify-center mb-4">
                <div class="pr-3 flex items-center justify-center">
                  🏛️
                </div>
                <h2 class="text-3xl font-bold text-gray-900">Need a student loan?</h2>
              </div>
              
              <p class="text-xl text-gray-700 mb-6">
                Pay as little as <span class="text-yellow-600 font-bold">£389</span> over 12 months
              </p>
              <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
                We've partnered with local banks and other financial services organisations to 
                offer you access to cost effective student financing to take a bootcamp.
              </p>
              <button class="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Apply for loan
              </button>
            </div>
          </section>

          <!-- Support Section -->
          <section class="support-section mx-auto text-center mb-4 lg:mb-16">
            <div class="support-section--inner p-4 lg:p-8">
              <div class="flex items-start justify-center mb-4">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">We're standing by...</h2>
              </div>
              
              <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
                Our Admissions Consultants are here to help. Simply book a convenient time for 
                us to contact you and we'll be in touch. Alternatively, download the course 
                syllabus for more information.
              </p>
              <div class="flex justify-center space-x-4">
                <button class="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Download Syllabus
                </button>
                <button class="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                  Book a call
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
     
      
      <!-- Success Story max-w-6xl shadow-2xl -->
      <section class="testimonial bg-white w-full mx-auto mb-4 lg:mb-16 pt-4 lg:pt-8">
        <div class="testimonial--inner p-4 lg:p-8 text-center">
          <h2 class="text-2xl lg:text-5xl font-bold text-center text-[#333]">
            From Politics to Data Analyst in 3 months
          </h2>
         
          <div class="p-1 pb-5">
            <h3 class="text-2xl font-bold mb-1">Alexandra Munteanu</h3>
            <p class="text-gray-500 text-lg">Data Science Bootcamp Graduate</p>
          </div>
          
          <div class="testimonial--video bg-gray-200 rounded-xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/CnCR3ZDu5EA?rel=0" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;"></iframe>
          </div>
          <div class="pt-8">
            <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Meet Alex who previously studied for 3 years in the field of International Relations and Politics, earning a 
              degree. She was able to switch her career to a Data Analyst job within just 3 months of starting a 
              bootcamp, getting her first job offer within just 10 days of finishing her bootcamp.
            </p>
          </div>
        </div>
      </section>

      <!-- Trustpilot Section -->
      <section class="trustpilot-section w-full lg:max-w-2xl mx-auto text-center p-4 lg:p-0">
        <div class="bg-white rounded-2xl p-8 shadow-2xl">
          <div class="flex justify-center mb-4">
            <div class="text-green-600 text-2xl font-bold">★ Trustpilot</div>
          </div>
          <div class="flex justify-center mb-4">
            <div class="flex space-x-1">
              <span v-for="i in 5" :key="i" class="text-green-500 text-2xl">★</span>
            </div>
          </div>
          <p class="text-gray-600">
            <span class="font-bold">TrustScore 4.5</span> | <span class="font-bold">1,142 reviews</span>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Countdown timer state
const countdown = ref({
  days: 4,
  hours: 14,
  minutes: 24,
  seconds: 57
})

let countdownInterval = null

// Calculate target date (approximately 4 days from now)
const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 4)
targetDate.setHours(14, 24, 57, 0)

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now

  if (distance > 0) {
    countdown.value = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
  } else {
    countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
}

onMounted(() => {
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})

// SEO Meta
useHead({
  title: 'Software Engineering Bootcamp | HyperionDev',
  meta: [
    { name: 'description', content: 'Join our Software Engineering bootcamp. Limited spots available for 2025. Multiple payment options and flexible study schedules.' }
  ]
})
</script>

<style scoped>
.bg-gradient-to-br {
  background: linear-gradient(135deg, #3b82f6 0%, #14b8a6 50%, #10b981 100%);
}
</style>