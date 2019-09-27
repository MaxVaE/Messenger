import DialogWidget from '@/components/DialogWidget/DialogWidget.vue'
import ButtonSend from '@/components/ButtonSend/ButtonSend.vue'
// import axios from 'axios'

export default {
  components: {
    DialogWidget,
    ButtonSend
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage () {
      if (this.message !== '') {
        const obj = {
          message: this.message
        }
        console.log(obj.message)
        // Отправляет запрос на сервер
        // axios
        //   .post('URL', obj)
        this.message = ''
      }
    }
  }
}
