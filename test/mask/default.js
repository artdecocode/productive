import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import productive from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await productive({
      text: input,
    })
    return res
  },
  context: Context,
})