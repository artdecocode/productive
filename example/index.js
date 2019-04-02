/* alanode example/ */
import productive from '../src'

(async () => {
  const res = await productive({
    text: 'example',
  })
  console.log(res)
})()