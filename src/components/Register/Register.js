/* eslint-disable */
import axios from 'axios'
import ButtonAccount from '@/components/ButtonAccount/ButtonAccount.vue'

export default {
  components: {
    ButtonAccount
  },
  data () {
    return {
      obj: {
        Email: '',
        Password: '',
        ConfirmPassword: ''
      },
      bool: true
    }
  },
  computed: {
    emptyInput () {
      this.bool = this.obj.Email === '' || this.obj.Password === '' || this.obj.ConfirmPassword === ''
      return this.bool
    }
  },
  methods: {
    validateEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      console.log(re.test(email))
      return re.test(email)
    },
    login () {
      const bool = this.bool
      const obj = this.obj
      if (!bool) {
        if (this.validateEmail(obj.Email)) {
          if (obj.Password === obj.ConfirmPassword) {
            console.log(obj)
            // axios
            //   .post('URL', obj)
          }
        }
      }
    }
  }
}