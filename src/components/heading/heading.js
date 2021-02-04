import './heading.scss'

class Header {
  render(pageName) {
    const h1 = document.createElement('h1')
    const body = document.querySelector('body')
    h1.innerHTML = `Webpack is awesome. This is the ${pageName} page`
    h1.classList.add('header')
    body.append(h1)
  }
}

export default Header
