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
      this.todoItems.push(inputNode.value)
    },
    updateItem: function (index, event) {
      const inputNode = event.target.parentNode.querySelector('input.item-edit-input')
      this.$set(this.todoItems, index, inputNode.value)
    },
    deleteItem: function (index) {
      this.todoItems.splice(index, 1)
    }
  }
})
