Vue.component('search-bar', {
  template: `<input class="input" type="text" placeholder="search..." v-model="searchText" @keyup.enter="search">`,
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    search() {
      console.log(this.searchText)
    }
  }
})

Vue.component('card', {
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
    `,
  data() {
    return {
      list: [
        { title: 'arms', imageUrl: "https://cdn01.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_Arms_image500w.jpg",descrition: "ARMS for Nintendo Switch lets you trade blows using extendable arms in a unique multiplayer fighting game!", price: "TWD 1,763.70" },
        { title: 'arms', imageUrl: "https://cdn01.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_Arms_image500w.jpg",descrition: "ARMS for Nintendo Switch lets you trade blows using extendable arms in a unique multiplayer fighting game!", price: "TWD 1,763.70" },
        { title: 'arms', imageUrl: "https://cdn01.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_Arms_image500w.jpg",descrition: "ARMS for Nintendo Switch lets you trade blows using extendable arms in a unique multiplayer fighting game!", price: "TWD 1,763.70" },
      ]
    }
  }
})

new Vue({
  el: '#app',
  data: {
    message: 'app'
  }
})