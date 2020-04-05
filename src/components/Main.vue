<template>
  <div class="hello">
    <nav class="navbar">
      <ul class="items">
        <li>
          <img alt="Elefante logo" src="./../assets/logo.jpg">
        </li>
        <li class="title">
          <h1>{{ msg }}</h1>
        </li>
      </ul>
    </nav>
    <img alt="Elefante parade" src="./../assets/main.jpg" class="parade">
    <p>
      O Clube Carnavalesco Misto Elefante de Olinda foi fundado em 12 de fevereiro de 1952.<br>
      Nosso hino é o hino extraoficial de Olinda.
    </p>
    <h3>Hino do Elefante de Olinda (Olinda Nº2)</h3>
    <div v-bind:class="{'row': tabletScreen > 1024, 'col-lg-12': true, 'hymn': true}">
      <div v-bind:class="{'col-lg-4': tabletScreen > 1024, 'offset-2' : tabletScreen > 1024}">
        <p><i>Ao som dos clarins de Momo<br>
        O povo aclama com todo ardor<br>
        O Elefante exaltando as suas tradições<br>
        E também seu esplendor<br>
        Olinda, este meu canto<br>
        Foi inspirado em teu louvor<br>
        Entre confetes e serpentinas<br>
        Venho te oferecer<br>
        Com alegria o meu amor<br><br>
        Olinda! Quero cantar a ti esta canção<br>
        Teus coqueirais, o teu sol, o teu mar<br>
        Faz vibrar meu coração, de amor a sonhar<br>
        Minha Olinda sem igual<br>
        Salve o teu Carnaval!</i></p>
        <p>Clídio Nigro / Clóvis Vieira</p>
      </div>
      <div v-bind:class="{'col-lg-4': tabletScreen > 1024, 'sound': true}">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tMa67fMqhyo" frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
      </div>
    </div>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  },
  data() {
    return {
       tabletScreen: window.innerWidth
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.navbar {
  margin-top: 1%;
}

.items {
  display:table-row;
}

li {
  vertical-align: middle;
}

.navbar img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}

.parade {
  max-width: 100%;
}

.hymn {
  margin-top: 3%;
}

.sound {
  margin-top: 2%;
}
</style>
