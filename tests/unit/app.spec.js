import { shallowMount } from "@vue/test-utils";

import App from '@/App';
import MovieList from '@/components/MovieList'

import SearchComponent from "@/components/SearchComponent"

describe('App',()=>{
  it('should change movie results when  evnet is triggered',()=>{
    const wrapper=shallowMount(App);
    expect(wrapper.vm.movies).toEqual([]);
    const movies = ['Kingsman: The Secret Service', 'Kingsman: The Golden Circle'];
    let search = wrapper.find(SearchComponent)
    search.vm.$emit('search', movies)
    expect(wrapper.vm.movies).toBe(movies)
  });

  it('Should pass the movies prop to MovieList', () => {
    const wrapper = shallowMount(App);
    const movieList = wrapper.find(MovieList);
    expect(movieList.props().movies).toBe(wrapper.vm.movies);
})
})
