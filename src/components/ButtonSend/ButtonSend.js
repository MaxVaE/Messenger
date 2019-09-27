export default {
  props: {
    label: String
  },
  methods: {
    click () {
      this.$emit('send')
    }
  }
}
