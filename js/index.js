new Vue({
  el: '#main',
  data: {
    todoItems: [],
    canEdit: false
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
      this.todoItems.push({ body: inputNode.value })
    },
    editItem: function () {
      this.canEdit = true
    },
    listItem: function () {
      this.canEdit = false
    },
    updateItem: function (index, item) {
      this.$set(this.todoItems, index, item)
      this.canEdit = false
    },
    deleteItem: function (index) {
      this.todoItems.splice(index, 1)
      this.canEdit = false
    }
  },
})
