import Card from "./Card";

function App() {



 const fetchData = ()=> {}

  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_dHCl88eFrm023zFcznv2DWQvf25ae1HLqFrTGPSx8aQMpV8cfXdbCgWj7UPzPyeg"
  });
  
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  
  fetch("https://api.thedogapi.com/v1/images/search?limit=10", requestOptions)
    .then(response => response.text())
    .then( data => console.log(data))
    .catch(error => console.log('error', error)); 

    //.then(result => console.log(result))
  return (
    <>
      <h1>Pieski</h1>
      
    </>
  )
}

export default App
