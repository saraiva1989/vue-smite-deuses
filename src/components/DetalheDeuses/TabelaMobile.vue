<script setup>
</script>

<template>
  <div class="card-detalhe">
    <div>
      <h1>Habilidades</h1>
    </div>
    <hr />
    <br />
    <div id="conteudo-habilidade">
      <div v-for="(habilidade, index) in deus.habilidades" :key="index">
        <h1>{{habilidade.nome}}</h1>
        <p>
          <img
            :src="habilidade.imagem"
            alt=""
            srcset=""
          />
        </p>
        <div class="historia">
          <b>Descrição Habilidade: </b>{{habilidade.descricao}}
        </div>
        <br />
        <b><p class="destaque-habilidade">Dano da habilidade:</p></b>

        <ul v-for="(poderHabilidade, index) in habilidade.infoPoderHabilidades" :key="index">
          <li><b>{{poderHabilidade.descricao}}</b> {{poderHabilidade.valor}}</li>
        </ul>
        <br />
        <b><p class="destaque-habilidade">informação da habilidade:</p></b>

        <ul v-for="(infoHabilidade, index) in habilidade.infoHabilidades" :key="index">
          <li><b>{{infoHabilidade.descricao}}</b> {{infoHabilidade.valor}}</li>
        </ul>

        <br />
        <p style="text-align: center">
          <button
            type="button"
            class="btn-video"
            @click="ModalHabilidade(habilidade.urlVideo, 300, 350)"
          >
            <span>Video Habilidade</span>
          </button>
        </p>
        <br />
        <hr class="separador-habilidade" />
      </div>

      <div>
        <h1>Presságio Sombrio</h1>
        <p>
          <img
            src="https://webcdn.hirezstudios.com/smite/god-abilities/dark-omen.jpg"
            alt=""
            srcset=""
          />
        </p>
        <div class="historia">
          <b>Descrição Habilidade: </b>A Morrigan lança uma onda de magia negra
          que causa dano nos inimigos, dano bônus em lacaios e amaldiçoa deuses
          inimigos por 8s. Deuses amaldiçoados receberão dano bônus na próxima
          vez que forem atingidos por qualquer habilidade de dano.
        </div>
        <br />
        <b><p class="destaque-habilidade">Dano da habilidade:</p></b>

        <ul>
          <li>
            <b>Dano Inicial:</b> 40/70/100/130/160 (40% do seu poder mágico)
          </li>
        </ul>

        <ul>
          <li>
            <b>Dano Bônus em Lacaios:</b> 40/70/100/130/160 (+20% do seu poder
            mágico)
          </li>
        </ul>

        <ul>
          <li>
            <b>Dano Bônus em Deues:</b> 40/70/100/130/160 (+40% do seu poder
            mágico)
          </li>
        </ul>

        <br />
        <b><p class="destaque-habilidade">informação da habilidade:</p></b>

        <ul>
          <li><b>Habilidade:</b> Projétil</li>
        </ul>

        <ul>
          <li><b>Afeta:</b> Inimigos</li>
        </ul>

        <ul>
          <li><b>Dano:</b> Mágico</li>
        </ul>

        <ul>
          <li><b>Alcance:</b> 70</li>
        </ul>

        <br />
        <p style="text-align: center">
          <button
            type="button"
            class="btn-video"
            onclick="componentModalHabilidade('IWifb6oToJo', 300, 350)"
          >
            <span>Video Habilidade</span>
          </button>
        </p>
        <br />
        <hr class="separador-habilidade" />
      </div>

      <div>
        <h1>Confusão</h1>
        <p>
          <img
            src="https://webcdn.hirezstudios.com/smite/god-abilities/confusion.jpg"
            alt=""
            srcset=""
          />
        </p>
        <div class="historia">
          <b>Descrição Habilidade: </b>A Morrigan cria um fantasma de si mesma
          enquanto fica invisível e aumenta seu movimento. O fantasma corre para
          a área indicada, sem causar dano, e morrendo ao receber dano. Se A
          Morrigan atacar ou receber dano ela será revelada e perderá o bônus de
          movimento.
        </div>
        <br />
        <b><p class="destaque-habilidade">Dano da habilidade:</p></b>

        <ul>
          <li><b>Duração:</b> 3/3.5/4/4.5/5s</li>
        </ul>

        <ul>
          <li><b>Movimento:</b> 30/32.5/35/37.5/40%</li>
        </ul>

        <br />
        <b><p class="destaque-habilidade">informação da habilidade:</p></b>

        <ul>
          <li><b>Habilidade:</b> Invisibilidade</li>
        </ul>

        <ul>
          <li><b>Afeta:</b> Você</li>
        </ul>

        <ul>
          <li><b>Alcance:</b> 80</li>
        </ul>

        <br />
        <p style="text-align: center">
          <button
            type="button"
            class="btn-video"
            onclick="componentModalHabilidade('ldxCG5uHqfE', 300, 350)"
          >
            <span>Video Habilidade</span>
          </button>
        </p>
        <br />
        <hr class="separador-habilidade" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // deus: this.$store.state.DetalheDeuses.GET_DEUS,
    };
  },
  computed: {
    deus() {
      return this.$store.state.DetalheDeuses.GET_DEUS;
    },
  },
  methods: {
    ModalHabilidade(url, altura, largura) {
      this.$store.commit("DetalheDeuses/SET_MODAL", true);
      this.$store.commit("DetalheDeuses/SET_YOUTUBE", url);
      this.$store.commit("DetalheDeuses/SET_ALTURA", altura);
      this.$store.commit("DetalheDeuses/SET_LARGURA", largura);

      //this.$store.state.DetalheDeuses.GET_MODAL
    },
  },
};
</script>