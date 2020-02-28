import { shallowMount } from "@vue/test-utils";

import App from '@/App';

import SearchComponent from "@/components/SearchComponent"

describe('App',()=>{
  it('should change movie results when  evnet is triggered',()=>{
    const wrapper=shallowMount(App);
    expect(wrapper.vm.movies).toEqual([]);
    const movies = ['Kingsman: The Secret Service', 'Kingsman: The Golden Circle'];
    let search = wrapper.find(SearchComponent)
    search.vm.$emit('search', movies)
    expect(wrapper.vm.movies).toBe(movies)
  })
})
