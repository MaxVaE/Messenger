export default {
  props: {
    label: String,
    Email: String,
    Password: String
  },
  computed: {
    buttonDisabled () {
      return this.Email === '' || this.Password === ''
    }
  },
  methods: {
    click () {
      this.$emit("login")
    }
  }
}