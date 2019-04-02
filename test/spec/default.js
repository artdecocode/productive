import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import productive from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof productive, 'function')
  },
  async 'calls package without error'() {
    await productive()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await productive({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T