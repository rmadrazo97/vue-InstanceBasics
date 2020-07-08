var app1 = new Vue({
  el: '#app1',
  data: {
    title: "Hello Mundo",

  },
  methods: {
    alertMe: function(){
      alert('hola desde app1');
    }
  },
});

var app2 = new Vue({
  el: '#app2',
  data: {
    title: "Hola World",

  },
  methods: {
    onChange: function(){
      app1.title = "Changeeeeed by app2";
      app1.alertMe();
    }
  },
});