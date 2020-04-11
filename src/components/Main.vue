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
    <div class="col-lg-12">
      <div v-bind:class="{'col-lg-4': widthScreen > 1024, 'description': true, 'offset-4' : widthScreen > 1024}">
        <p>
          O Clube Carnavalesco Misto Elefante de Olinda foi fundado em 12 de fevereiro de 1952. Desde 
          então o Elefante nunca deixou de desfilar no carnaval. O frevo Marcha Olinda Nº2 - Hino do 
          Elefante (1954) é o hino extraoficial de Olinda. O Desfile Oficial ocorre no domingo de 
          carnaval às 19h e o Trote do Elefante acontece no sábado, 15 dias antes do carnaval, no mesmo 
          horário. O Baile Encarnado acontece nos meses finais do ano. Todos os eventos são gratuitos.
        </p>
      </div>
    </div>
    <h3>Hino do Elefante de Olinda</h3>
    <div v-bind:class="{'row': widthScreen > 1024, 'col-lg-12': true, 'hymn': true}">
      <div v-bind:class="{'col-lg-4': widthScreen > 1024, 'offset-2' : widthScreen > 1024}">
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
      <div v-bind:class="{'col-lg-4': widthScreen > 1024, 'sound': true, 'smart': widthScreen <= 414}">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tMa67fMqhyo" frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
      </div>
    </div>
    <div class="gallery">
      <h3>Galeria</h3>
      <div class="row col-lg-12 justify-content-between gallery-time">
        <img class="col-lg-2 first-gallery-item gallery-item" src="./../assets/1953.jpg" />
        <iframe class="col-lg-2 gallery-item" width="560" height="315" src="https://www.youtube.com/embed/5fonu7btiT4?start=68" 
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
        <iframe class="col-lg-2 gallery-item" width="560" height="315" src="https://www.youtube.com/embed/FSq37fLQPmU" frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <img class="col-lg-2 gallery-item" src="./../assets/nino.jpg" />
        <iframe class="col-lg-2 gallery-item" width="560" height="315" src="https://www.youtube.com/embed/p3vS_BD1H5I" frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
    </div>
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
       widthScreen: window.innerWidth
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

.description {
  margin-top: 40px;
  background-color: #A81317;
  padding-top: 2.5%;
  padding-left: 5%;
  padding-right: 5%;
  border-radius: 10px;
  padding-bottom: 2.5%;
}

.description p {
  color: white;
  margin-bottom: 0px;
  text-align: justify;
}

.hymn {
  margin-top: 3%;
}

.sound {
  margin-top: 2%;
}

.smart iframe {
  max-width: 100%;
}

.gallery {
  background-color: #A81317;
  color: white;
  padding-top: 0.5%;
  padding-bottom: 3%;
  margin-top: 2%;
}

.gallery-time {
  padding-top: 1%;
}

.first-gallery-item {
  margin-left: 3%;
}

.gallery-item {
  margin-top: 1%;
  border: 2px solid white;
  border-radius: 10px;
  margin-right: 1%;
  max-height: 120px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>
