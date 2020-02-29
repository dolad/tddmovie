import { shallowMount } from '@vue/test-utils'

import MovieList from '@/components/MovieList'
import MovieListItem from '@/components/MovieListItem'

describe('components/MovieList', () => {
  it('Should pass down the movie prop to every MovieListItem', () => {
    const movies = [
      { Title: 'Mission Impossible' },
      { Title: 'Mission Impossible II' },
      { Title: 'Mission Impossible III' }
    ]

    const wrapper = shallowMount(MovieList, {
      propsData: {
        movies
      }
    });
    const items = wrapper.findAll(MovieListItem);
    expect(items.length).toBe(movies.length);

    // iterating through the element pass

    for (let i = 0; i < items.length; i++) {
      const item = items.at(i)
      expect(item.props().movie).toBe(movies[i])
    }

  })
})
