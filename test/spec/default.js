import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import nodetools from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof nodetools, 'function')
  },
  async 'calls package without error'() {
    await nodetools()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await nodetools({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T