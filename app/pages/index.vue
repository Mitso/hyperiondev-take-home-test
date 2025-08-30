<!-- page: Account Register -->
<template>
    <div class="account min-h-screen">
        <div class="account-register flex min-h-screen">
            <!-- Start: Left Column -->
            <div class="left-column w-1/2">
                <div class="left-column__inner w-full h-full flex items-center justify-center p-12">
                    <!-- Account Registration | Hyperion Job Statistics -->
                    <div class="account-register__stats stats px-8 text-center">
                        <div class="flex items-center">
                          <img 
                            src="/hd.svg" 
                            alt="178% Salary Increase" 
                            width="auto"
                            height="auto"
                            class="stats-heading mx-auto my-0"/>
                        </div>
                        <div class="relative text-center mt-12">
                          <p class="stats-salary-txt text-white text-2xl font-medium">
                            According to the 2024 Graduate Outcomes Report, graduates of HyperionDev bootcamps have seen an average salary increase. This figure is based on verified graduate data.
                          </p>
                          <p class="stats-salary-txt text-white text-2xl font-medium mt-4">
                            *Read the report <a href="#" class="text-[#bd932e] underline">here</a>.
                          </p>
                        </div>>
                    </div>
                </div>
            </div>
            <!-- End: Left Column -->

             <!-- Start: Right Column -->
            <div class="right-column w-1/2 bg-white flex flex-col">
                <div class="right-column__inner flex-1 flex flex-col items-center justify-center p-12">
                   
                  <!-- Create Account | Signup Description -->
                    <div class="account-register__heading mb-8">
                      <h2 class="text-4xl font-bold mb-2">Create your account</h2>
                    </div>

                    <!-- Create Account | Signup Form -->
                    <form @submit="handleSubmit" class="account-register__signup signup max-w-[65%] space-y-4">
                        <div class="signup-field">
                            <input
                                v-model="form.fullName"
                                type="text"
                                placeholder="Full name"
                                required
                                class="signup-input"
                                :class="{ 'border-red-400': errors.fullName }"
                            />
                            <span v-if="errors.fullName" class="text-red-300 text-sm">{{ errors.fullName }}</span>
                        </div>

                        <div class="signup-field">
                            <input
                                v-model="form.email"
                                type="email"
                                placeholder="Email address"
                                required
                                class="signup-input"
                                :class="{ 'border-red-400': errors.email }"
                            />
                            <span v-if="errors.email" class="text-red-300 text-sm">{{ errors.email }}</span>
                        </div>

                        <div class="signup-field">
                            <input
                                v-model="form.password"
                                type="password"
                                placeholder="Password"
                                required
                                class="signup-input"
                                :class="{ 'border-red-400': errors.password }"
                            />
                            <span v-if="errors.password" class="text-red-300 text-sm">{{ errors.password }}</span>
                        </div>

                        <div class="signup-field flex items-start space-x-3">
                            <input
                                v-model="form.agreeToTerms"
                                type="checkbox"
                                id="terms"
                                required
                                class="signup-checkbox mt-1 w-4 h-4 text-gray-600 bg-transparent border-2 border-blue-300 rounded focus:ring-blue-500"
                            />
                            <label for="terms" class="signup-agreement-opts text-sm leading-relaxed">
                                I agree to HyperionDev's 
                                <a href="#" class="anchor anchor-terms text-yellow-400 underline">Terms & Conditions</a> and 
                                <a href="#" class="anchor anchor-privacy text-yellow-400 underline">Privacy Policy</a>.
                            </label>
                        </div>

                        <p class="signup-consent text-xs mt-4 leading-relaxed">
                            By submitting this form you agree and accept the Terms of Use and consent to receiving communications from us.
                        </p>

                        <button
                            type="submit"
                            :disabled="isSubmitting"
                            class="signup-submit w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                        >
                            {{ isSubmitting ? 'Creating account...' : 'Continue' }}
                        </button>

                        <div class="signup-divider flex items-center my-6">
                          <span class="signup-divider-line flex-grow border-t"></span>
                          <span class="signup-divider-txt mx-4 text-sm">or</span>
                          <span class="signup-divider-line flex-grow border-t"></span>
                        </div>

                        <button
                            type="button"
                            @click="signUpWithGoogle"
                            class="signup-google-btn w-[80%] mx-auto my-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                        >
                            <svg class="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span class="signup-google-cta">Sign up with Google</span>
                        </button>
                    </form>

                    <!-- reCAPTCHA notice -->
                    <p class="account-register__security-txt text-xs mt-4 text-center">
                        This site is protected by reCAPTCHA and the Google 
                        <a href="#" class="anchor anchor-privacy text-yellow-400 underline">Privacy Policy</a> and 
                        <a href="#" class="anchor anchor-terms text-yellow-400 underline">Terms of Service</a> apply.
                    </p>
                  
                  
                 
                
                
                
                  </div>
            </div>
             <!-- End: Right Column -->
        </div>
    </div>
</template>

<script setup>
// Form state
const form = reactive({
  fullName: '',
  email: '',
  password: '',
  agreeToTerms: false
})

// Form validation errors
const errors = reactive({
  fullName: '',
  email: '',
  password: ''
})

// Loading state
const isSubmitting = ref(false)

// Validation function
const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })

  let isValid = true

  // Validate full name
  if (!form.fullName.trim()) {
    errors.fullName = 'Full name is required'
    isValid = false
  } else if (form.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters'
    isValid = false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Email address is required'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  // Validate password
  if (!form.password) {
    errors.password = 'Password is required'
    isValid = false
  } else if (form.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
    isValid = false
  }

  return isValid
}

// Form submission handler
const handleSubmit = async (event) => {
  event.preventDefault()
  
  if (!validateForm()) {
    return
  }

  if (!form.agreeToTerms) {
    alert('Please agree to the Terms & Conditions and Privacy Policy')
    return
  }

  isSubmitting.value = true

  try {
    // Call the server API endpoint
    const { data } = await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        fullName: form.fullName.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password
      }
    })

    // Handle success
    console.log('Registration successful:', data)
    
    // Redirect to success page or dashboard
    await navigateTo('/dashboard')
    
  } catch (error) {
    console.error('Registration error:', error)
    
    // Handle specific error cases
    if (error.data?.message) {
      if (error.data.message.includes('email')) {
        errors.email = error.data.message
      } else if (error.data.message.includes('password')) {
        errors.password = error.data.message
      } else {
        alert(error.data.message)
      }
    } else {
      alert('Registration failed. Please try again.')
    }
  } finally {
    isSubmitting.value = false
  }
}

// Google sign up handler
const signUpWithGoogle = async () => {
  try {
    // Redirect to Google OAuth endpoint
    window.location.href = '/api/auth/google'
  } catch (error) {
    console.error('Google sign up error:', error)
    alert('Google sign up is currently unavailable. Please try again later.')
  }
}

// SEO and meta
useHead({
  title: 'Create your account - HyperionDev',
  meta: [
    { name: 'description', content: 'Join HyperionDev and start your journey to a 178% salary increase. Create your account today.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>

<style>
.left-column  {
  background-color: var(--moderate-blue);
}
/* Custom checkbox styling for better visibility on blue background */
input[type="checkbox"] {
  background-color: transparent;
  border: 2px solid #93c5fd;
}

input[type="checkbox"]:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

/* Custom focus styles */
input:focus {
  box-shadow: 0 0 0 3px rgba(147, 197, 253, 0.3);
}

/* Responsive design */
@media (max-width: 768px) {
  .min-h-screen {
    flex-direction: column;
  }
  
  .w-1\/2 {
    width: 100%;
  }
}
</style>