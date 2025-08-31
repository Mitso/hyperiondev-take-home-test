<template>  
    <!-- Form -->
    <form @submit="saveAndContinue" class="bootcamp-reg-form step-1 max-w-4xl mx-auto">
        <div class="step-1--inner bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div class="space-y-6">
                <!-- Reason for registering -->
                <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                    Reason for registering
                    </label>
                    <select
                    v-model="form.reasonForRegistering"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700"
                    >
                    <option value="" disabled>---------</option>
                    <option value="career_change">Career change</option>
                    <option value="skill_upgrade">Upgrade my skills</option>
                    <option value="student">I'm a student</option>
                    <option value="entrepreneur">Start my own business</option>
                    <option value="hobby">Personal interest/hobby</option>
                    <option value="promotion">Get a promotion</option>
                    <option value="freelance">Become a freelancer</option>
                    </select>
                </div>

                <!-- Content knowledge -->
                <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                    Content knowledge
                    </label>
                    <select
                    v-model="form.contentKnowledge"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700"
                    >
                    <option value="" disabled>---------</option>
                    <option value="complete_beginner">Complete beginner</option>
                    <option value="some_experience">Some programming experience</option>
                    <option value="intermediate">Intermediate level</option>
                    <option value="advanced">Advanced programmer</option>
                    <option value="professional">Professional developer</option>
                    </select>
                </div>

                <!-- Education background, Age, Gender row -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Education background
                    </label>
                    <select
                        v-model="form.educationBackground"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700"
                    >
                        <option value="" disabled>---------</option>
                        <option value="high_school">High School</option>
                        <option value="some_college">Some College</option>
                        <option value="bachelors">Bachelor's Degree</option>
                        <option value="masters">Master's Degree</option>
                        <option value="doctorate">Doctorate</option>
                        <option value="professional">Professional Certification</option>
                        <option value="other">Other</option>
                    </select>
                    </div>

                    <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Age
                    </label>
                    <select
                        v-model="form.age"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700"
                    >
                        <option value="" disabled>---------</option>
                        <option value="under_18">Under 18</option>
                        <option value="18_24">18-24</option>
                        <option value="25_34">25-34</option>
                        <option value="35_44">35-44</option>
                        <option value="45_54">45-54</option>
                        <option value="55_plus">55+</option>
                    </select>
                    </div>

                    <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                    </label>
                    <select
                        v-model="form.gender"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700"
                    >
                        <option value="" disabled>---------</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non_binary">Non-binary</option>
                        <option value="prefer_not_to_say">Prefer not to say</option>
                        <option value="other">Other</option>
                    </select>
                    </div>
                </div>

                 <!-- Country of Residence row -->
                <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Country of residence
                    </label>
                    <select
                        v-model="form.countryOfResidence"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700"
                    >
                        <option value="" disabled>South Africa</option>
                        <option value="ZA">South Africa</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="NL">Netherlands</option>
                        <option value="NG">Nigeria</option>
                        <option value="KE">Kenya</option>
                        <option value="GH">Ghana</option>
                        <option value="EG">Egypt</option>
                        <option value="IN">India</option>
                        <option value="BR">Brazil</option>
                        <option value="MX">Mexico</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>
                 <!-- Country and Phone number row -->
                <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Phone number
                    </label>
                    <div class="flex phone-field">
                        <select
                            v-model="form.phoneCountryCode"
                            class="px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg text-gray-700"
                        >
                            <option value="+27">South African +27</option>
                            <option value="+1">USA +1</option>
                            <option value="+1">Canada +1</option>
                            <option value="+44">UK +44</option>
                            <option value="+61">Australia +61</option>
                            <option value="+49">Germany +49</option>
                            <option value="+33">France +33</option>
                            <option value="+31">Netherlands +31</option>
                            <option value="+234">Nigeria +234</option>
                            <option value="+254">Kenya +254</option>
                            <option value="+233">Ghana +233</option>
                            <option value="+20">Egypt +20</option>
                            <option value="+91">India +91</option>
                        </select>
                        <input
                            v-model="form.phoneNumber"
                            type="tel"
                            placeholder="Enter phone number"
                            class="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- Action buttons -->
        <div class="step-1-cta flex justify-end items-center mt-8 max-w-4xl mx-auto">
            <button
                type="submit"
                :disabled="!isFormValid || isSubmitting"
                class="step-1-continue px-8 py-3 text-black font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {{ isSubmitting ? 'Saving...' : 'Continue' }}
            </button>
        </div>
    </form>
</template>

<script setup>

const emit = defineEmits(['next']);
// Form state
const form = reactive({
  reasonForRegistering: '',
  contentKnowledge: '',
  educationBackground: '',
  age: '',
  gender: '',
  countryOfResidence: 'ZA', // Default to South Africa
  phoneCountryCode: '+27',
  phoneNumber: '',
})
// Loading state
const isSubmitting = ref(false)

// Form validation
const isFormValid = computed(() => {
  return form.reasonForRegistering && 
    form.contentKnowledge && 
    form.educationBackground && 
    form.age && 
    form.gender && 
    form.countryOfResidence
})


// Prevent navigation away without saving
onBeforeRouteLeave((to, from) => {
  if (isSubmitting.value) {
    return false
  }
  
  // Check if form has unsaved changes
  const hasChanges = Object.values(form).some(value => value !== '' && value !== 'ZA' && value !== '+27')
  
  if (hasChanges && !confirm('You have unsaved changes. Are you sure you want to leave?')) {
    return false
  }
})

// Save and continue handler
const saveAndContinue = async () => {
  if (!isFormValid.value) {
    return
  } 
    isSubmitting.value = true
    try {
        // // Save step 1 data to localforage
        // // In a real app, you would send this data to your backend API
        // // Here we simulate an API call with a timeout
        // await new Promise(resolve => setTimeout(resolve, 1000))
        // const data = await localforage.setItem('course_registration', {
        //     body: {
        //         ...form,
        //         phoneNumber: form.phoneCountryCode + form.phoneNumber
        //     }
        // })
  
        // console.log('Step 1: Success:', data)
      
        // Emit event to parent to go to next step
        emit('next', {
            step: 1,
            data: form
        })
      
    } catch (error) {
      console.error('Step 1: Error:', error)
       // Optionally show error to user
      if (error.data?.message) {
        alert(error.data.message)
      } else {
        alert('Failed to save information. Please try again.')
      }
    } finally {
        console.error('Step 1:', error)
        isSubmitting.value = false
    }
}

</script>

<style lang="scss">
.step-1  {
    &-continue {
        background-color: var(--gold);
        color: white;
        &:hover {
            background-color: var(--dark-gold);
        }
    }
}
/* Mobile responsiveness */
@media (max-width: 768px) {
     .grid-cols-2,
    .grid-cols-3 {
        grid-template-columns: 1fr;
    }
}


/* Phone number input styling */
.phone-field {
    select:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        min-width: 25%;
    }
    input:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
    }
}

/* Custom select styling */
select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}

/* Focus states */
input:focus, select:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(196,196,196, 0.2);
}

/* Disabled state */
button:disabled {
  cursor: not-allowed;
}
</style>