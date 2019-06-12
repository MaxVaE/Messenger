import ButtonSend from '@/components/ButtonSend/ButtonSend.vue'

export default {
  components: {
    ButtonSend
  },
  data () {
    return {
      message: ""
    }
  },
  methods: {
    sendMessage () {
      console.log(this.message)
    }
  }  
}