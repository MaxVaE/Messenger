import ButtonSend from '@/components/ButtonSend/ButtonSend.vue'
import axios from 'axios'

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
      if (this.message != ''){
        axios
          .post('http://192.168.1.7:3000/', this.message)
          this.message = ''
      }
    }
  }
}