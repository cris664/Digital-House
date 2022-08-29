/*let numeros = [1,2];
let vacio = [];
console.log(numeros[48]);
console.log(vacio[0]);
*/
/*function pasandoPorI()
{
    for(let i = 0;i<5;i++)
    {
        console.log("Aca i tiene el valor de " + i);
    }
}
*/
/*
function caloriasDeTrote(x)
{
     let aux = 5;
     let aux2=0;
    for(let i = 1;i<=x;i++)
    {
        
          aux *=i; 
          //console.log(aux);
          //aux +=aux;
            
    }
    return aux;
}
console.log(caloriasDeTrote(2));
*/
/*
function naipes(palo)
{
    console.log(palo);
    let array_cartas = [];
    for(let i = 1 ;i<=12;i++)
    {   
        if(i!=8&&i!=9)
        {
            array_cartas.push(i + " de "+ palo);
            
        }
        
    }
    
    return array_cartas;
}
console.log(naipes("espadas"));
*/
/*
function factorial(n)
{
    let res = 1;
    for(let i = 1;i<=n;i++)
    {
        res *=i;
    }
    return res;
}
console.log(factorial(3));
*/
/*
function alturaArbolUtopico(n)
{
      let altura = 1;
      if(n==0)
      {
        return altura;
      }else{
          for(let i = 1;i<=n;i++)
        {
        if(i%2==0)
            {
            altura ++;
            }else
                {
                     altura*=2;
                }
        }
  
      }
    
    return altura;
}
console.log(alturaArbolUtopico(5));
*/
function masMenos(arr)
{
    let nuevo_arr = [];
    let cantPos=0;
    let cantNeg=0;
    let cantCero=0;
    let largo = arr.length;
    for(let i = 0;i<largo;i++)
    {
        if(arr[i]>0)
        {
            cantPos++;
        }else if(arr[i]<0)
        {
            cantNeg++;
        }else{
            cantCero++;
        }

    }
    nuevo_arr[0] = cantPos/largo;
    nuevo_arr[1] = cantCero/largo;
    nuevo_arr[2] = cantNeg/largo;
    return nuevo_arr;
}
console.log(masMenos([1, 2, 0, -1]));