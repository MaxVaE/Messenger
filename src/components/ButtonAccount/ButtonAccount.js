export default {
  props: {
    label: String,
    bool: Boolean
  },
  computed: {
    buttonDisabled () {
      return this.bool
    }
  },
  methods: {
    click () {
      this.$emit('login')
    }
  }
}
