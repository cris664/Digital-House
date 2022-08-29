let autos = require("./autos.js")
let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente)
   {    
      
       let res = autos.find(auto => auto.patente == patente)
       console.log(res)
       if(res == undefined)
       {
          return null
       }
       
       return res
   },
   venderAuto: function(patente)
   {
      if(this.buscarAuto(patente)!=null)
      {
         this.buscarAuto(patente).vendido = true;
      }
      return autos.vendido;
   },
   autosParaLaVenta: function()
   {
      return autos.filter(auto => auto.vendido == false)
   },
   autosNuevos: function()
   {
       let autosVenta = this.autosParaLaVenta();
       return autosVenta.filter(auto => auto.km < 100)
   }

}
if(concesionaria.venderAuto("JJK116") == true)
{
    console.log("verdadero")
}
concesionaria.venderAuto("JJK116")
concesionaria.autosNuevos();