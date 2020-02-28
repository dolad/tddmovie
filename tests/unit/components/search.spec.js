import Vue from 'vue'
import  axios  from "axios";

import {shallowMount} from '@vue/test-utils';

import SearchComponent from '@/components/SearchComponent';
jest.mock('axios')

describe('Search',()=>{
  let wrapper, input
  beforeEach(()=>{
    wrapper=shallowMount(SearchComponent);
    input=wrapper.find('input');
    input.setValue('kingsman');
  })
  it('should send a request to the api and append the search parameter', ()=>{
    const response ={status:200, data:{Response:'True'}};
    axios.get.mockImplementation(async () => response);
    input.trigger('keyup.enter');
    expect(axios.get).toHaveBeenCalledWith(`https://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDB_KEY}&s=kingsman`);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
  it('should emit result if the result if they are successfully retreived', async ()=>{
    const movies = ['Kingsman: The Secret Service', 'Kingsman: The Golden Circle'];
    const response = { status: 200, data: { Response: 'True', Search: movies } };
    axios.get.mockImplementation(async()=>response)
    input.trigger('keyup.enter');

    await Vue.nextTick()

    expect(wrapper.emitted().search).toBeTruthy();
  })
})
