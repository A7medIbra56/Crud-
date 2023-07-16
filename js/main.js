var Patient = document.getElementById(`Patient`)
var address = document.getElementById(`address`)
var Phone = document.getElementById(`Phone`)
var Camment = document.getElementById(`Camment`)
var Add = document.getElementById(`Add`)
var Update = document.getElementById(`Update`)
var productContener=[]


if(localStorage.getItem(`my stor`) !=null)
{
    productContener=JSON.parse(localStorage.getItem(`my stor`))
    displyProduct(productContener)
}
else
{
    productContener=[]
}
function addForm()
{

    if(valdetonProduct()==true)
    {
        var product =
        {
            PatientName:Patient.value,
            address:address.value,
            Phone:Phone.value,
            Camment:Camment.value,
        }
        productContener.push(product)
        displyProduct(productContener)
        car=``
        document.getElementById(`erorr`).innerHTML=car;
        

    }
    else
    {
        car=`<h5>erorr plees enter Name</h5>`
        document.getElementById(`erorr`).innerHTML=car;
    }
  
}
 
function claer()
{
    Patient.value =``
    address.value =``
    Phone.value =``
    Camment.value =``
}
function displyProduct(list)
{
    var Store=[]

    for(var i=0 ; i<list.length;i++ )
    {
        Store+=`<tr>
        <td>${i+1}</td>
        <td>${list[i].PatientName}</td>
        <td>${list[i].address}</td>
        <td>${list[i].Phone}</td>
        <td>${list[i].Camment}</td>
        <td> <button onclick="updateProduct(${i})"  class="btn btn-sm btn-outline-dark ">Update</button></td>
        <td> <button onclick="deleteProduct(${i})"  class="btn btn-sm btn-outline-dark  ">delete</button></td>
       </tr>`
    }
    document.getElementById(`ProductBody`).innerHTML=Store
    localStorage.setItem(`my stor`,JSON.stringify( productContener) )
}

function productSearch(search)
 {
    var searchRuslt=[]

    for(var i=0 ;i<productContener.length ;i++)
    {
        if(productContener[i].PatientName.toLowerCase().includes(search.toLowerCase()) == true ) 
        {
            searchRuslt.push(productContener[i]) 
        }
        displyProduct(searchRuslt)
    }
 }

 function deleteProduct(Idex)
 {
    productContener.splice(Idex,1)
    localStorage.setItem(`my stor`,JSON.stringify( productContener) )
    displyProduct(productContener)
 }

 var global=``;
 function updateProduct(Input)
 {
    global=Input

    var productglobal=productContener[Input]
    Patient.value= productglobal.PatientName
    address.value= productglobal.address
    Phone.value= productglobal.Phone
    Camment.value= productglobal.Camment

       

    Update.classList.replace("d-none" , "d-inline-block")
    Add.classList.replace("d-inline-block" , "d-none")
    
 }
 

 function addUpdate()
 {

    var product =
    {
        PatientName:Patient.value,
        address:address.value,
        Phone:Phone.value,
        Camment:Camment.value,
    }

    productContener[global]=(product);
    localStorage.setItem(`my stor`,JSON.stringify( productContener) )
   displyProduct(productContener)
 }
  
 function valdetonProduct()
 {
    var regex = /^[A-Z][a-z]{5,8}$/;
    if( regex.test(Patient.value) == true) 
    {
        Patient.classList.replace(`is-invalid`,`is-valid`)
        return true;
    }
    else
    {
        Patient.classList.add(`is-invalid`)
        return false
    }
 }