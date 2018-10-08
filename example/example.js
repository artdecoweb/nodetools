/* yarn example/ */
import nodetools from '../src'

(async () => {
  const res = await nodetools({
    text: 'example',
  })
  console.log(res)
})()