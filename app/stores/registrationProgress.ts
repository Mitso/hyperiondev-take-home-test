import { defineStore } from 'pinia'

export const useRegistrationProgress = defineStore('registrationProgress', {
  state: () => ({
    currentStep: 1,
    totalSteps: 2,
    completed: false
  }),
  actions: {
    setStep(step: number) {
      this.currentStep = step
    },
    markCompleted() {
      this.completed = true
    },
    reset() {
      this.currentStep = 1
      this.completed = false
    }
  }
})
