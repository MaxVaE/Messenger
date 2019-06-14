import axios from 'axios'
import ButtonAccount from '@/components/ButtonAccount/ButtonAccount.vue'

export default {
  components: {
    ButtonAccount
  },
  data () {
    return {
      obj: {
        Email: "",
        Password: ""
      }
    }
  },
  methods: {
    login () {
      if ((this.obj.Email === '' || this.obj.Password === '') === false) {
        axios
          .post('URL', this.obj) 
      }
    }
  }
}