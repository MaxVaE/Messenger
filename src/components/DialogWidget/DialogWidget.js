// import axios from 'axios'

export default {
  data () {
    return {
      dialog: {
        id: '',
        message: ''
      }
    }
  },
  methods: {
    DialogWindow () {
      // Получаю сообщения с сервера
      // axios
      // .get('http://192.168.1.7:3000/', this.dialog)
      this.dialog.id = 'Max'
      this.dialog.message = 'Hello'
    }
  }
}
