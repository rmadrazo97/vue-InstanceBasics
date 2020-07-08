var app1 = new Vue({
  el: '#app1',
  data: {
    title: "Hello Mundo",
    title2: "title 2",

  },
  methods: {
    alertMe: function(){
      alert('hola desde app1');
    }
  },
});

// important we cannot add reactive  (common vue properties) properties like this
app1.staticProperty = "I'm not reactive";
console.log(app1.staticProperty.title);

// adding real (reactive) properties

// accesing data elements
console.log(app1.$data.title);

// accesing elements by ref
console.log(app1.$refs.title2);

setTimeout(function(){
app1.$refs.title2.innerText = "hola perruno";

},3000);

var app2 = new Vue({
  // no el property
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
// mounting instead of el property
app2.$mount('#app2');


// mounting templates
var app3 = new Vue({
  template: '<h1>Hello Gatuno</h1>'
});

//app3.$mount('#app3');
