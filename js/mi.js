// 1 - VARIABLES

const boton = $("#boton");
const contenido = $("#contenido"); //para escribir contenido en el html

// 2 - FUNCIONES

const llamarAPI = e => {
  e.preventDefault(); //para que no recargue toda la página
  //copiado de la API randomuser.me
  $.ajax({
    url: "https://randomuser.me/api/?nat=es&result=10",
    dataType: "json",
    success: function(data) {
      console.log(data);
      console.log(data.results[0].name.title);
      console.log(data.results[0].name.first);
      console.log(data.results[0].name.last);

      let miContenido =
        /*html*/
        `<img id="rounded-circle" src="${data.results[0].picture.large}">
    <br>
    <p>${data.results[0].name.first} ${data.results[0].name.last}</p>
   `;
      $("#datos").fadeOut("slow", function() {
        $(this)
          //.css("display","none")
          .fadeIn("slow")
          .html(miContenido);
      });

      contenido.html(miContenido);
    },
    error: function() {
      console.log("Ha habido un errrrrorrrr");
      alert("cagadón");
    }
  });
};

const mostrarLento = e => {
  foto.fadeIn(2000);
};

// 3 - EVENTOS

/*$('#boton').click(function (e) { 
    e.preventDefault();
    llamarAPI();
});  ésta es la manera cutringa, mejor declarando la variable*/

boton.on("click", llamarAPI);
