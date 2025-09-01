<template>
     <!-- Form -->
    <form class="bootcamp-reg-form step-2 max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div class="space-y-6">
                <!-- Content knowledge -->
                <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                    Content knowledge
                    </label>
                    <select
                    v-model="form.contentKnowledge"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                    >
                    <option value="" disabled>---------</option>
                    <option value="complete_beginner">Complete beginner</option>
                    <option value="some_experience">Some programming experience</option>
                    <option value="intermediate">Intermediate level</option>
                    <option value="advanced">Advanced programmer</option>
                    <option value="professional">Professional developer</option>
                    </select>
                </div>

            

                <!-- Additional fields for comprehensive profile -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Current employment status
                    </label>
                    <select
                        v-model="form.employmentStatus"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                    >
                        <option value="" disabled>---------</option>
                        <option value="employed_full_time">Employed (Full-time)</option>
                        <option value="employed_part_time">Employed (Part-time)</option>
                        <option value="self_employed">Self-employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="student">Student</option>
                        <option value="retired">Retired</option>
                        <option value="other">Other</option>
                    </select>
                    </div>

                    <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Preferred learning schedule
                    </label>
                    <select
                        v-model="form.learningSchedule"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                    >
                        <option value="" disabled>---------</option>
                        <option value="full_time">Full-time (40+ hours/week)</option>
                        <option value="part_time_evenings">Part-time evenings (10-20 hours/week)</option>
                        <option value="part_time_weekends">Part-time weekends (10-15 hours/week)</option>
                        <option value="flexible">Flexible schedule</option>
                        <option value="intensive">Intensive (60+ hours/week)</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>

        <!-- Action buttons -->
        <div class="flex justify-between items-center mt-8 max-w-2xl mx-auto">
            <button
                type="button"
                @click="goBackToStep1"
                class="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
                Back
            </button>
            <button
            type="submit"
            :disabled="!isFormValid || isSubmitting"
            @click="handleStep2Submit"
            class="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {{ isSubmitting ? 'Saving...' : 'Submit' }}
            </button>
        </div>
    </form>
</template>
<script setup>
const emit = defineEmits(['submit', 'prev']);

const form = reactive({
  contentKnowledge: '',
  employmentStatus: '',
  learningSchedule: ''
})

// Loading state
const isSubmitting = ref(false)

// Form validation
const isFormValid = computed(() => {
  return form.contentKnowledge && 
    form.employmentStatus && 
    form.learningSchedule 
})

const goBackToStep1 = () => {
  emit('prev');
}
const handleStep2Submit = () => {
    if (!isFormValid.value) {
        return
    } 
    isSubmitting.value = true

    emit('submit', {  
        data: { ...form } 
    });
};
</script>