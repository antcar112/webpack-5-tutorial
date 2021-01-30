import './heading.scss'

class Header {
  render() {
    const h1 = document.createElement('h1')
    const body = document.querySelector('body')
    h1.innerHTML = 'Webpack is awesome'
    h1.classList.add('header')
    body.append(h1)
  }
}

export default Header
