import { Link } from '../components/Router'

const i18n = {
  en: {
    title: 'About',
    description: 'This is the about page',
    button: 'Go to home page',
  },
  es: {
    title: 'Acerca de',
    description: 'Esta es la página de acerca de',
    button: 'Ir a la página de inicio',
  },
}

const use18n = (lang) => {
  return i18n[lang] || i18n.en
}
export default function AboutPage({ routeParams }) {
  const i18n = use18n(routeParams.lang)

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to="/">{i18n.button}</Link>
    </>
  )
}
