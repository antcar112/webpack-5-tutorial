import Heading from './components/heading/heading'
import KiwiImage from './components/kiwi-image/kiwi-image'
import { upperFirst } from 'lodash'

const heading = new Heading()
heading.render(upperFirst('kiwi'))
const kiwiImage = new KiwiImage()
kiwiImage.render()
