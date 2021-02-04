import HelloWorldButton from './components/hello-world-button/hello-world-button'
import Heading from './components/heading/heading'
import { upperFirst } from 'lodash'

const heading = new Heading()
heading.render(upperFirst('hello world'))
const helloWorld = new HelloWorldButton()
helloWorld.render()
