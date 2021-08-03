new Vue({
  el: '#main',
  data: {
    todoItems: []
  },
  mounted() {
    if (localStorage.todoItems) {
      this.todoItems = JSON.parse(localStorage.getItem('todoItems'))
    }
  },
  watch: {
    todoItems() {
      localStorage.setItem('todoItems', JSON.stringify(this.todoItems))
    }
  },
  methods: {
    createItem: function () {
      const inputNode = document.querySelector('input.item-new-input')
      const newItem = {
        body: inputNode.value,
        editing: false,
        editingBody: inputNode.value
      }
      this.todoItems.push(newItem)
      inputNode.value = ''
    },
    editItem: function (item) {
      item.editing = true
    },
    updateItem: function (index, item) {
      item.body = item.editingBody
      this.$set(this.todoItems, index, item)
      item.editing = false
    },
    deleteItem: function (index) {
      this.todoItems.splice(index, 1)
    }
  },
})
