import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stones: [
      {
        id: 1,
        imageUrl:
          'https://images.unsplash.com/photo-1469006117505-78ac7334ccf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1250&h=1800&q=80',
        tags: ['hand', 'grey']
      },
      {
        id: 2,
        imageUrl:
          'https://images.unsplash.com/photo-1472494731104-3ba69e52845b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&h=800&q=80',
        tags: ['pile', 'multiple', 'warm', 'tower']
      },
      {
        id: 3,
        imageUrl:
          'https://images.unsplash.com/photo-1447616061459-f7d9b9329bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=600&q=80',
        tags: ['hands', 'brown', 'jacket']
      },
      {
        id: 4,
        imageUrl:
          'https://images.unsplash.com/photo-1472494731104-3ba69e52845b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&h=800&q=80',
        tags: ['pile', 'multiple', 'warm', 'tower']
      },
      {
        id: 5,
        imageUrl:
          'https://images.unsplash.com/photo-1447616061459-f7d9b9329bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=600&q=80',
        tags: ['hand', 'hands', 'brown', 'jacket']
      },
      {
        id: 6,
        imageUrl:
          'https://images.unsplash.com/photo-1552063356-754a5a497c70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&h=600&q=80',
        tags: ['gold', 'grey']
      },
      {
        id: 7,
        imageUrl:
          'https://images.unsplash.com/photo-1447616061459-f7d9b9329bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        tags: ['hand', 'hands', 'brown', 'jacket']
      },
      {
        id: 8,
        imageUrl:
          'https://images.unsplash.com/photo-1469006117505-78ac7334ccf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1250&h=1800&q=80',
        tags: ['hand', 'grey']
      },
      {
        id: 9,
        imageUrl:
          'https://images.unsplash.com/photo-1469006117505-78ac7334ccf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1250&h=1800&q=80',
        tags: ['hand', 'grey']
      },
      {
        id: 10,
        imageUrl:
          'https://images.unsplash.com/photo-1469006117505-78ac7334ccf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1250&h=1800&q=80',
        tags: ['hand', 'grey']
      },
      {
        id: 11,
        imageUrl:
          'https://images.unsplash.com/photo-1472494731104-3ba69e52845b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&h=800&q=80',
        tags: ['pile', 'multiple', 'warm', 'tower']
      },
      {
        id: 12,
        imageUrl:
          'https://images.unsplash.com/photo-1447616061459-f7d9b9329bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=600&q=80',
        tags: ['hands', 'brown', 'jacket']
      },
      {
        id: 13,
        imageUrl:
          'https://images.unsplash.com/photo-1552063356-754a5a497c70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&h=600&q=80',
        tags: ['gold', 'grey']
      },
      {
        id: 14,
        imageUrl:
          'https://images.unsplash.com/photo-1469006117505-78ac7334ccf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1250&h=1800&q=80',
        tags: ['hand', 'grey']
      },
      {
        id: 15,
        imageUrl:
          'https://images.unsplash.com/photo-1469006117505-78ac7334ccf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1250&h=1800&q=80',
        tags: ['hand', 'grey']
      },
      {
        id: 16,
        imageUrl:
          'https://images.unsplash.com/photo-1472494731104-3ba69e52845b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&h=800&q=80',
        tags: ['pile', 'multiple', 'warm', 'tower']
      },
      {
        id: 17,
        imageUrl:
          'https://images.unsplash.com/photo-1552063356-754a5a497c70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&h=600&q=80',
        tags: ['gold', 'grey']
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getStoneById: state => id => {
      return state.stones.find(stone => stone.id === id)
    },
    findStonesByTag: state => tag => {
      return state.stones.filter(stone => stone.tags.includes(tag))
    },
    findSimilarTags: state => tags => {
      return state.stones.filter(stone => stone.tags.includes(tags))
    }
  }
})
