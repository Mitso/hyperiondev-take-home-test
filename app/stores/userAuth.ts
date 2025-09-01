import { defineStore } from 'pinia'

export const useUserAuth = defineStore('userAuth', {
  state: () => ({
    user: null as {
      (): Promise<void>;
      fullName?: string;
      email?: string;
      password?: string;
      jwt?: string;
      signedIn?: boolean;
    } | null,
    isAuthenticated: false,
  }),
  actions: {
    setUser(user: { (): Promise<void>; fullName?: string; email?: string; password?: string; jwt?: string; signedIn?: boolean } | null) {
      this.user = user
      this.isAuthenticated = !!user
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
    }
  }
})