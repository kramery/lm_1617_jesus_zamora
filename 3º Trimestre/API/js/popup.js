

//This function recover data from the web service

    
function loadData() {
   $.ajax({
       url : "http://datos.santander.es/api/rest/datasets/mediciones.json", 
   })
           .done(function(data) {
                var resources = data.resources;
                console.log(resources);
                for (i=0; i<resources.length;i++) {
                    
                   var text="";
                    
                    var valor = resources[i];
                    
                   text+="<a href='"+resources[i]["uri"]+"'> <h4>Identificador del Sensor: "+resources[i]["ayto:ocupacion"]+"</span></a></br></br>";
                    
                    
                   $("#resultados").append("<li>"+text+"</li>");
                   
                 //  $("div.estacion:odd").css("background-color", "#DDDDDD");
               }
       
       $("a").click(function(event) {

                         event.preventDefault();
                         $("#detalles").html("");
                         $.ajax({
                                url : $(this).attr("href"),
                        })
                           .done(function(data) {
                             
                    
                             
                   var text1="<span>Porcentaje de tiempo de la espira que esta ocupada por un vehiculo: "+data.resources[0]["ayto:medida"]+"<span>"+"</br></br>";
                    
                   var text2="<span>Bicis disponibles: "+data.resources[0]["ayto:idSensor"]+"</span>"+"</br></br>";
                    
                   var text3="<span>Numero de vehiculos contados: "+data.resources[0]["ayto:intensidad"]+"</span>"+"</br></br>";
                    
                   var text4="<span>Fecha modificacion: "+data.resources[0]["dc:modified"]+"<span>"+"</br></br>";
                    
                   var text5="<span>Identificador: "+data.resources[0]["dc:identifier"]+"</span></br></br>";
                    
                   var text6="<span>Representa una estimacion del grado de congestion en base a un algoritmo que usa como factores la intensidad y la ocupacion: "+data.resources[0]["ayto:carga"]+"</span></br></br>";   
                             
                $("#detalles").append("<li>"+text1+"</li>");
                $("#detalles").append("<li>"+text2+"</li>");
                $("#detalles").append("<li>"+text3+"</li>");
                $("#detalles").append("<li>"+text4+"</li>");
                $("#detalles").append("<li>"+text5+"</li>");
                $("#detalles").append("<li>"+text6+"</li>");
//                
                             
                             
                            })
                            .fail(function() {
                                    alert("Impossible to recover data from the server");
                            });
                     });
               
           })
           .fail(function() {
               $("#resultados").append("<h2>Imposible recuperar los datos</h2>");
           });
}




//On Document ready
$(function() {
 
   
   
   $("#cargar").click(function() {
      //Cleaning the 
      //Reloading data
      loadData();
   });
    
    
			           
			 
   
   // Jesús Zamora
   
});
