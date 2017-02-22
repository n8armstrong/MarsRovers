import type { roverTypes } from '../nasaApi'

const photos = {
  nextSol: 1,
  photos: {
    photos: []
  },
  status: 200
}

export async function getPhotos (rover: roverTypes, sol: number): Promise<any> {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(photos))
  })
}
