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
          horário. O Baile Encarnado acontece nos meses finais do ano. Atualmente, quem comanda o frevo
          nessas ocasiões é a Orquestra do Maestro Oséas. Todos os eventos são gratuitos.
        </p>
      </div>
    </div>
    <div class="alternative-section gallery">
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
    </div>
    <h3>Carnavais Saudosos</h3>
    <div v-bind:class="{'section-row': true, 'row col-lg-12 justify-content-between': widthScreen > 1024}">
      <img v-b-modal.modal-1 v-bind:class="{'gallery-item': true, 'col-lg-2 first-gallery-item': widthScreen > 1024, 'smart-gallery': widthScreen <= 1024}" v-b-tooltip.hover title="Fonte: facebook/Olinda de antigamente" src="./../assets/1953.jpg" />
      <b-modal
        id="modal-1"
        title="Lá Vem o Elefante de Olinda, exaltando suas tradições... (1953)"
      >
        <img class="modal-img" src="./../assets/1953.jpg" />
        <p class="my-4">
          Fotografia do ano de 1953, Lá Vem o Elefante de Olinda, exaltando suas tradições...
          De uma brincadeira de um grupo de rapazes em 1952 surge o que talvez viria a se tornar devido a
          sua canção, um dos mais conhecidos Clubes de Olinda. É ele o Elefante de Olinda, tão exaltado na
          canção, ao que pouca gente sabe, de nome: "OLINDA N°2" considerada seu hino.

          Em seu livro "Carnavais Olindenses - História e Metamorfose Numa Travessia de Cem Anos -
          1907-2007", o professor e historiador Thales Antônio Rodrigues Galhardo transcreve um
          depoimento de Carmelo Filizola, um dos fundadores, conta a origem do Elefante:

          "No carnaval de 1950, vínhamos subindo o Bonfim, eu, Expedito (meu irmão), Jojoca, Élcio
          Siqueira, Chuquinha Nigro, Auriverton, Walter "melô", Lilo "banana", Nino e Junanci tomando
          "umas e outras" nas casas daquela rua. Paramos lá na casa do seu Alfredo para tomar mais
          "outra" e provar dos deliciosos filhós de dona Linda, e alguém do grupo teve a brilhante ideia
          de pegar o biscuit que decorava a geladeira sendo o objeto a figura de um elefante. Então
          saímos com o elefante de louça brincando atrás das agremiações inclusive encontramos com a Turma
          da Pitombeira logo depois. Tudo obra do acaso! No ano seguinte o mesmo grupo e tantos outros
          amigos saíram, sem a intenção de formar agremiações, com as camisas do time do Bonfim (vermelhas e
          brancas), mas em 1952 é que surge Elefante com uma fantasia de agave imitando índios com
          Melquíades no saxofone e Faneca no violão.
        </p>
        <template v-slot:modal-footer>
        <div class="w-100">
          <p class="float-right">Fonte: facebook/Olinda de antigamente</p>
        </div>
      </template>
      </b-modal>
      <iframe v-bind:class="{'gallery-item': true, 'col-lg-2': widthScreen > 1024, 'smart-gallery': widthScreen <= 1024}"
        width="560" height="315" src="https://www.youtube.com/embed/5fonu7btiT4?start=68"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <iframe v-bind:class="{'gallery-item': true, 'col-lg-2': widthScreen > 1024, 'smart-gallery': widthScreen <= 1024}"
        width="560" height="315" src="https://www.youtube.com/embed/FSq37fLQPmU" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <iframe v-bind:class="{'gallery-item': true, 'col-lg-2': widthScreen > 1024, 'smart-gallery': widthScreen <= 1024}"
        width="560" height="315" src="https://www.youtube.com/embed/p3vS_BD1H5I" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <iframe v-bind:class="{'gallery-item': true, 'col-lg-2': widthScreen > 1024, 'smart-gallery': widthScreen <= 1024}"
        width="560" height="315" src="https://www.youtube.com/embed/f0CmKyZ8puA" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </div>
    <div class="alternative-section midia">
      <div v-bind:class="{'section-row': true, 'row col-lg-12 justify-content-center': widthScreen > 1024}">
        <div v-bind:class="{'col-lg-6 offset-1': widthScreen > 1024}">
          <div v-bind:class="{'slide-padding': widthScreen <= 1024}">
            <b-carousel
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#dddddd"
              img-width="100%"
              img-height="290"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block w-80"
                    width="100%"
                    height="310"
                    src="./../assets/paco.jpg"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block w-80"
                    width="100%"
                    height="310"
                    src="./../assets/bruxa.jpg"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block w-80"
                    width="100%"
                    height="310"
                    src="./../assets/oseas.jpg"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block w-80"
                    width="100%"
                    height="310"
                    src="./../assets/page.jpg"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block w-80 mx-auto"
                    width="auto"
                    height="310"
                    src="./../assets/old.jpg"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>
            </b-carousel>
          </div>
          <p v-bind:class="{'follow': widthScreen > 1024}" class>Siga o Elefante</p>
          <a href="https://instagram.com/elefantedeolinda"><img v-bind:class="{'follow-midia': true}" src="./../assets/instagram.png" /></a>
          <a href="https://www.facebook.com/clubeelefantedeolindah"><img v-bind:class="{'follow-midia': true}" src="./../assets/facebook.png" /></a>
          <a href="https://twitter.com/ElefanteOlinda"><img v-bind:class="{'follow-midia': true}" src="./../assets/twitter.png" /></a>
          <a href="https://open.spotify.com/user/akua0hpd92ev9ieirigd0fmqy?si=z8KuWZ2sSzavGAkV9iy4vw"><img v-bind:class="{'follow-midia': true}" src="./../assets/spotify.jpg" /></a>
          <a href="https://www.youtube.com/channel/UCSPKBlnw52xd0DEeVoE3bbg"><img v-bind:class="{'follow-midia': true}" src="./../assets/youtube.png" /></a>
        </div>
        <div v-bind:class="{'section-row': true, 'col-lg-4 offset-1 justify-content-between listen': widthScreen > 1024}">
          <p class="listen-title"><i>O Elefante é frevo!</i></p>
          <iframe class="listen-border" src="https://open.spotify.com/embed/playlist/5fihaW6ACiFcLlFW1EAyWL" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  },
  data () {
    return {
      widthScreen: window.innerWidth,
      slide: 0,
      sliding: null,
      image: require('@/assets/logo.jpg')
    }
  },
  methods: {
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font: 700 28px Fugaz One !important;
  margin: 40px 0 0;
}
h4 {
  font: 700 24px Fugaz One !important;
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
  margin-bottom: 40px;
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

.hymn-border {
  border: 2px solid white;
  border-radius: 10px;
}

.smart iframe {
  max-width: 100%;
}

.alternative-section {
  background-color: #A81317;
  color: white;
  padding-top: 0.5%;
  padding-bottom: 3%;
}

.section-row {
  padding-top: 1%;
}

.section-row img {
  vertical-align: baseline;
}

.first-gallery-item {
  margin-left: 3%;
}

.gallery-item {
  cursor: pointer;
  margin-top: 1%;
  border: 2px solid white;
  border-radius: 10px;
  margin-right: 1%;
  max-height: 120px;
  padding-left: 0px;
  padding-right: 0px;
}

.smart-gallery {
  max-width: 240px;
}

.modal-img {
  max-width: 100%;
}

.midia {
  margin-top: 3%;
  padding-top: 3%;
}

.slide-padding {
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 3%;
  max-height: auto;
}

.slide {
  max-height: 320px;
  border-radius: 10px;
  border-color: white;
  border-style: solid;
  border-width: 5px;
}

.follow {
  font: 700 15px Fugaz One !important;
  letter-spacing: 2px;
  margin-top: 30px;
  margin-bottom: 0px;
}

.follow-midia {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-top: 1%;
  margin-left: 5px;
  margin-right: 5px;
}

.listen {
  text-align: left;
}

.listen-title {
  font: 400 15px Fugaz One !important;
  text-align: center;
}

.listen-border {
  border: 2px solid white;
  border-radius: 10px;
  border-left: 0px;
}
</style>
