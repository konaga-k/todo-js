new Vue({
  el: '#main',
  data: {
    todoItems: [],
    newItemBody: ''
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
      const newItem = {
        body: this.newItemBody,
        editing: false,
        editingBody: this.newItemBody
      }
      this.todoItems.push(newItem)
      this.newItemBody = ''
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
