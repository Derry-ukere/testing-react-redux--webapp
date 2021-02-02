import { types } from '../../actions/types'
import postReducer from './postReducer'

describe('testing post reducers', () => {
  it('it should return state', () => {
    const newState = postReducer(undefined, {})
    expect(newState).toEqual([])
  })

  it('it should return new state if receiving new type', () => {
    const posts = [
      { title: 'Test 1' },
      { title: 'Test 1' },
      { title: 'Test 1' },
    ]
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    })
    expect(newState).toEqual(posts)
  })
})
