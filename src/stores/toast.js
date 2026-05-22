import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [],
    type: {
      info: 'info',
      success: 'success',
      warning: 'warning',
      error: 'error',
    },
  }),
  actions: {
    show({ type, message, duration = 3000 }) {
      const id = Date.now()
      this.toasts.push({ id, type, message, duration })

      setTimeout(() => this.remove(id), duration)
    },
    remove(id) {
      this.toasts = this.toasts.filter((t) => t.id !== id)
    },
    info(message) {
      this.show({ type: this.type.info, message })
    },
    success(message) {
      this.show({ type: this.type.success, message })
    },
    warning(message) {
      this.show({ type: this.type.warning, message })
    },
    error(message) {
      this.show({ type: this.type.error, message })
    },
  },
})
