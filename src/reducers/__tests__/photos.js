import { PHOTO_REQUEST_STARTED } from '../../actions/photos'
import photosReducer from '../../reducers/photos'

describe('photosReducer', () => {
  test('request started', () => {
    const stateBefore = {}
    const stateAfter = {
      photosPending: true,
      photosSuccessful: false,
      photosError: null
    }

    expect(
      photosReducer(stateBefore, { type: PHOTO_REQUEST_STARTED })
    ).toEqual(stateAfter)
  })
})
