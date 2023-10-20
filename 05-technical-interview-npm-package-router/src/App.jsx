import { lazy, Suspense } from 'react'

import { Router, Route } from './components/Router'

import './App.css'

const LazyPage404 = lazy(() => import('./pages/404'))
const LazyAboutPage = lazy(() => import('./pages/AboutPage'))
const LazyHomePage = lazy(() => import('./pages/HomePage'))
const LazySearchPage = lazy(() => import('./pages/SearchPage'))

const appRoutes = [
  {
    path: '/:lang/about',
    component: LazyAboutPage,
  },
  {
    path: '/search/:query',
    component: LazySearchPage,
  },
]

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={LazyPage404}>
          <Route path="/" component={LazyHomePage} />
          <Route path="/about" component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
