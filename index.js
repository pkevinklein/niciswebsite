var app = new Vue({
  el: "#ex",
  data: {
    isOpen: false,
  },
  methods: {
    open: function () {
      this.isOpen = !this.isOpen;
    },
  },
});
