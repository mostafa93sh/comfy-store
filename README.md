# Comfy Store

A modern, production-ready e-commerce platform built with React 18, Vite, and React Query. Demonstrates advanced patterns for scalable state management, optimistic UI updates, and efficient data fetching workflows.

## Tech Stack

| Layer                    | Technologies                                         |
| ------------------------ | ---------------------------------------------------- |
| **Core**                 | React 18, Vite, React Router 6                       |
| **State Management**     | Redux Toolkit (local), TanStack React Query (server) |
| **API & Data**           | Axios with interceptor orchestration                 |
| **Styling & UI**         | Tailwind CSS 4 + daisyUI, React Icons                |
| **User Feedback**        | React Toastify for real-time notifications           |
| **Developer Experience** | React Query DevTools, ESLint, Fast Refresh           |

## Key Engineering Concepts

### Separation of Concerns (SoC)

Data fetching decoupled from UI components through React Query hooks and React Router loaders. Server state (products, orders) handled by React Query; client state (cart, auth) managed via Redux slices. Components remain presentational, eliminating data-fetching logic pollution.

### Optimistic UI & Caching

React Query provides automatic cache invalidation, stale-while-revalidate patterns, and request deduplication. Mutations trigger optimistic updates (e.g., cart additions) before server confirmation, ensuring responsive UX without performance compromise. Devtools integration enables real-time cache inspection.

### Responsive Design

Mobile-first utility-first CSS approach via Tailwind CSS. daisyUI components ensure accessibility compliance (WCAG 2.1) across all breakpoints. Grid-based layouts adapt seamlessly from mobile to ultra-wide displays.

## Architecture

**Features-based folder structure** organizes code by domain (`features/cart`, `features/user`) rather than technical layers, enabling independent feature scaling. Components directory holds reusable UI primitives; pages directory routes container components. This scaling pattern prevents monolithic component bloat while maintaining clear ownership boundaries.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (Vite Hot Module Replacement enabled)
npm run dev

# Build for production with tree-shaking optimization
npm run build

# Preview production build locally
npm run preview
```

Access the application at `http://localhost:5173`.

## Development Highlights

- **Tree-shaking & Code Splitting:** Vite enables automatic code splitting per route; React Query DevTools loads only in dev
- **Performance Monitoring:** Built-in React DevTools Profiler support; TanStack Query tracks query performance metrics
- **Type Safety Foundation:** Ready for TypeScript migration with minimal refactoring due to modular architecture

---

**Maintained by Senior Engineering Team** | Production-Ready
