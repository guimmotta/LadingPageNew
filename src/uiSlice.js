import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    accordion: { openId: 'faq-0' },
    carousel: {
      testimonials: { activeIndex: 0, total: 6 },
      results: { activeIndex: 0, total: 5 },
    },
    mobileMenuOpen: false,
    ctaVisible: false,
  },
  reducers: {
    toggleAccordion: (state, action) => {
      state.accordion.openId =
        state.accordion.openId === action.payload ? null : action.payload
    },
    nextSlide: (state, action) => {
      const { carouselId } = action.payload
      const c = state.carousel[carouselId]
      c.activeIndex = (c.activeIndex + 1) % c.total
    },
    prevSlide: (state, action) => {
      const { carouselId } = action.payload
      const c = state.carousel[carouselId]
      c.activeIndex = (c.activeIndex - 1 + c.total) % c.total
    },
    setSlide: (state, action) => {
      const { carouselId, index } = action.payload
      state.carousel[carouselId].activeIndex = index
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    setCTAVisible: (state, action) => {
      state.ctaVisible = action.payload
    },
  },
})

export const {
  toggleAccordion,
  nextSlide,
  prevSlide,
  setSlide,
  toggleMobileMenu,
  setCTAVisible,
} = uiSlice.actions

export default uiSlice.reducer

