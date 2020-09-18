window.onload = function ()
{
let initialarray=[]

if(localStorage.getItem("busdetails") == null){
  let stringbus=JSON.stringify(initialarray)
  localStorage.setItem("busdetails",stringbus)
  

}
};
function display(bus=undefined)
{
    let arrays;
    let tabledata = "";
    if(bus == undefined)
    {
      arrays=JSON.parse(localStorage.getItem("busdetails"))
    }
    else{
      arrays=bus
    }
    

    arrays.forEach(function (arr, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${arr.name}</td>
      <td>${arr.source}</td>
      <td>${arr.destination}</td>
      <td>${arr.busnum}</td>
      <td>${arr.capacity}</td>
    
      </td>
      </tr>`;
  // <button onclick='deleteRecord(${index})'>delete</button>
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
   

}
display()

function addBusDetails(e) {
  e.preventDefault();
  let arr = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let busnum = document.getElementById("busnum").value;
  let capacity = document.getElementById("capacity").value;
  arr.name = name;
  arr.source = source;
  arr.destination = destination;
  arr.busnum = busnum;
  arr.capacity=capacity;

  let array=JSON.parse(localStorage.getItem("busdetails"))
  array.push(arr);
  localStorage.setItem("busdetails",JSON.stringify(array))

  display();

  document.getElementById("name").value="";
  document.getElementById("source").value="";
  document.getElementById("destination").value="";
  document.getElementById("busnum").value="";
  document.getElementById("capacity").value="";
}




function searchBySource() {
    let searchValue = document.getElementById("searchSource").value;
    let array=JSON.parse(localStorage.getItem("busdetails"))
    let newdata = array.filter(function (array) {
      return (
        // array.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        array.source.toUpperCase().startsWith(searchValue.toUpperCase()) != false
      );
    });
  
    display(newdata);
  }

  function searchByDestination() {
    let searchValue = document.getElementById("searchDestination").value;
    let array=JSON.parse(localStorage.getItem("busdetails"))
    let newdata = array.filter(function (array) {
      return (
        // array.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        array.destination.toUpperCase().startsWith(searchValue.toUpperCase()) != false
      );
      
    });
  
    display(newdata);
  }