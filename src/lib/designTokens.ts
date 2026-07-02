/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Design Tokens - Centralized design system values
 * Use these constants throughout the application for consistency
 */

// ==================== COLORS ====================

export const colors = {
  // Brand Colors
  brand: {
    primary: '#008751',
    primaryHover: '#007043',
    primaryLight: '#00A862',
    dark: '#1A2E26',
    darkAlpha: (opacity: number) => `rgba(26, 46, 38, ${opacity})`,
    accent: '#00ff88',
    accentGlow: 'rgba(0, 255, 136, 0.4)',
  },
  
  // Background Colors
  bg: {
    primary: '#FFFFFF',
    secondary: '#F8FAF9',
    tertiary: '#F1F5F3',
  },
  
  // Text Colors
  text: {
    primary: 'text-[#1A2E26]',
    secondary: 'text-slate-600',
    tertiary: 'text-slate-500',
    inverse: 'text-white',
  },
  
  // Semantic Colors
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
};

// ==================== SPACING ====================

export const spacing = {
  // Section Spacing
  section: {
    mobile: 'py-16',
    desktop: 'lg:py-24',
    default: 'py-16 lg:py-24',
  },
  
  // Container Padding
  container: {
    mobile: 'px-4',
    tablet: 'sm:px-6',
    desktop: 'lg:px-8',
    default: 'px-4 sm:px-6 lg:px-8',
  },
  
  // Card/Component Padding
  card: {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
    default: 'p-6',
  },
  
  // Gaps
  gap: {
    small: 'gap-4',
    medium: 'gap-6',
    large: 'gap-8',
    default: 'gap-6',
  },
};

// ==================== BORDER RADIUS ====================

export const radius = {
  small: 'rounded-lg',      // 8px - badges, tags
  medium: 'rounded-xl',     // 12px - buttons, inputs
  large: 'rounded-2xl',     // 16px - cards, containers
  xlarge: 'rounded-3xl',    // 24px - large sections
  default: 'rounded-2xl',
};

// ==================== TYPOGRAPHY ====================

export const typography = {
  // Headings
  heading: {
    hero: 'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold',
    h1: 'text-4xl lg:text-5xl font-extrabold',
    h2: 'text-3xl lg:text-4xl font-bold',
    h3: 'text-2xl lg:text-3xl font-bold',
    h4: 'text-xl lg:text-2xl font-semibold',
  },
  
  // Body Text
  body: {
    large: 'text-lg leading-relaxed',
    base: 'text-base leading-normal',
    small: 'text-sm leading-normal',
  },
  
  // Labels
  label: {
    large: 'text-sm font-semibold uppercase tracking-wider',
    small: 'text-xs font-bold uppercase tracking-[0.3em]',
  },
};

// ==================== SHADOWS ====================

export const shadows = {
  small: 'shadow-sm',
  medium: 'shadow-md',
  large: 'shadow-lg',
  xlarge: 'shadow-xl',
  brand: 'shadow-lg shadow-[#008751]/20',
  brandHover: 'hover:shadow-xl hover:shadow-[#008751]/30',
  default: 'shadow-md',
};

// ==================== TRANSITIONS ====================

export const transitions = {
  fast: 'duration-300',
  medium: 'duration-500',
  slow: 'duration-700',
  default: 'transition-all duration-300',
  all: 'transition-all',
};

// ==================== ICON SIZES ====================

export const iconSizes = {
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 32,
  default: 20,
};

// ==================== BUTTONS ====================

export const buttons = {
  // Base Button Classes
  base: `${radius.medium} font-bold ${transitions.default}`,
  
  // Size Variants
  sizes: {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  },
  
  // Style Variants
  primary: `bg-[#008751] text-white hover:bg-[#007043] hover:scale-105 ${shadows.brand}`,
  secondary: `bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50`,
  ghost: `text-[#008751] hover:bg-emerald-50`,
  outline: `border-2 border-[#008751] text-[#008751] hover:bg-[#008751] hover:text-white`,
};

// ==================== CARDS ====================

export const cards = {
  base: `${radius.large} ${spacing.card.default} ${transitions.default}`,
  
  variants: {
    default: `bg-white border border-slate-100 hover:border-[#008751]/30 ${shadows.default} hover:shadow-lg`,
    glass: `bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15`,
    elevated: `bg-white ${shadows.large} hover:shadow-xl hover:scale-[1.02]`,
  },
};

// ==================== GRIDS ====================

export const grids = {
  // Responsive Grid Layouts
  two: 'grid grid-cols-1 sm:grid-cols-2',
  three: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  four: 'grid grid-cols-2 lg:grid-cols-4',
  
  // With gaps
  twoWithGap: `grid grid-cols-1 sm:grid-cols-2 ${spacing.gap.default}`,
  threeWithGap: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${spacing.gap.default}`,
  fourWithGap: `grid grid-cols-2 lg:grid-cols-4 ${spacing.gap.default}`,
};

// ==================== HOVER STATES ====================

export const hover = {
  scale: {
    small: 'hover:scale-[1.02]',
    medium: 'hover:scale-105',
    large: 'hover:scale-110',
  },
  
  opacity: {
    reduce: 'hover:opacity-80',
    increase: 'hover:opacity-100',
  },
};

// ==================== ANIMATIONS ====================

export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  },
};

// ==================== HELPER FUNCTIONS ====================

/**
 * Combine multiple class strings
 */
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Get responsive padding for sections
 */
export const getSectionPadding = () => spacing.section.default;

/**
 * Get responsive container padding
 */
export const getContainerPadding = () => spacing.container.default;

/**
 * Build button classes
 */
export const getButtonClasses = (
  variant: 'primary' | 'secondary' | 'ghost' | 'outline' = 'primary',
  size: 'small' | 'medium' | 'large' = 'medium'
) => {
  return cn(buttons.base, buttons.sizes[size], buttons[variant]);
};

/**
 * Build card classes
 */
export const getCardClasses = (
  variant: 'default' | 'glass' | 'elevated' = 'default'
) => {
  return cn(cards.base, cards.variants[variant]);
};

// ==================== EXPORT DEFAULT ====================

export default {
  colors,
  spacing,
  radius,
  typography,
  shadows,
  transitions,
  iconSizes,
  buttons,
  cards,
  grids,
  hover,
  animations,
  cn,
  getSectionPadding,
  getContainerPadding,
  getButtonClasses,
  getCardClasses,
};
