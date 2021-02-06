import React from 'react'
import HelloWorldButton from './components/hello-world-button/hello-world-button'
import Heading from './components/heading/heading'

export const helloWorld = () => {
  const heading = new Heading()
  heading.render('hello world')
  const helloWorld = new HelloWorldButton()
  helloWorld.render()
}
