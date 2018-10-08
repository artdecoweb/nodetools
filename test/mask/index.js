import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import nodetools from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await nodetools({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts