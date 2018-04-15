Vue.component('search-bar', {
  template: `<input class="input" type="text" placeholder="search..." v-model="searchText" @keyup.enter="search">`,
  data() {
    return {
      searchText: '',
      searchResult: []
    }
  },
  methods: {
    search() {
      let self = this

      axios.get('/api/search', {
        params: {
          query: this.searchText
        }
      })
      .then(function (response) {
        this.searchResult = response.data
        self.$emit('on-search', this.searchResult)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })

    }
  }
})

Vue.component('card', {
  props: ['list'],
  template: `
  <div>
    <article class="media" v-for="item in list">
      <figure class="media-left">
        <p class="image is-128x128">
          <img :src="item.imageUrl">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            Title: {{ item.title }}
            <br>
            Price: {{ item.price }}
            <br>
            Description: {{ item.descrition }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
  `
})

new Vue({
  el: '#app',
  data: {
    message: 'app',
    result: []
  },
  methods: {
    showResult(result) {
      this.result = result
    }
  }
})