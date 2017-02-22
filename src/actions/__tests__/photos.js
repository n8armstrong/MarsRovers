import createPhotoActions from '../photos'
import { dispatch } from '../../store'

jest.mock('../../common/nasaApi')

describe('createPhotoActions', () => {
  test('getPhotos :)', async () => {
    await createPhotoActions(dispatch).getPhotos('curiosity', 0)
  })
})
