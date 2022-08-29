/*function sumatoriaBajoImporte (arr)
{
    let ganancia = 0;
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i]>0&&arr[i]<1000)
        {
            ganancia+=arr[i];
        }
    }
    return ganancia;
}
let arr =  [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000];
console.log(sumatoriaBajoImporte(arr));
*/
/*
function asientosDisponibles(arr_asientos,asiento_a_ocupar)
{   
    let mensaje = " ";
    for(let i = 0; i<arr_asientos.length;i++)
    {
        if(arr_asientos[i]==asiento_a_ocupar)
        {
             return mensaje =  "Felicitaciones, el asiento número " + asiento_a_ocupar + " está disponible";
        } else
        {
            mensaje = "Lo sentimos, el asiento número " + asiento_a_ocupar + " está ocupado, pero aún quedan " + arr_asientos.length + " asientos disponibles";
        }
    }
    
    return mensaje;
}
console.log(asientosDisponibles([3, 15, 18, 25,4],75));
*/
function reporteDePasajeros(estaciones)
{
    let pasajeros = 200;
    let reporte = [];
    for(let i = 0;i<=estaciones;i++)
    {
        if(i==5)
        {
            pasajeros +=40;
        }else if(i>0){
            pasajeros +=20;
        }
        reporte[i] = "En la estacion " + i + " hay " + pasajeros + " pasajeros arriba del tren";   
    }
    return reporte;
    
}
console.log(reporteDePasajeros(5));