
const campoDePais = document.querySelector("#countryForm");
campoDePais.addEventListener( "submit" , (event) => {
      event.preventDefault();

    const searchInput = campoDePais.elements["country"]
    const searchValue = searchInput.value
    console.log(searchValue);

    getCountries(searchValue)
    searchInput.value = ""

})

async function getCountries(inputValue) {
  try {
    //le digo al endpoint que es lo que voy a buscar que tenga
    const respuesta = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
    
    //Cojo la respuesta del endpoint y la arreglo en un json
    const datos = await respuesta.json();   
    
    //De la respuesta del Endpoint, extraigo la info que quiero
    const countryFlag = datos[0]['flags']['png'];
    const countryName = datos[0]['name']['official'];
    const countryCapital = datos[0]['capital'][0]
    const countryPopulation = datos[0]['population']

    //selecciona el elemento HTML para donde va a mostrar el dato
    const imgCountry = document.querySelector('#flag');
    
    //Hace que el elemento HTML muestre el dato en el elemento HTML seleccionado
    imgCountry.src = countryFlag;

    const nameCountry = document.querySelector('#nameeCountry');
    nameCountry.innerHTML = countryName

    const capitalCountry = document.querySelector('#capitalCountry')
    capitalCountry.innerHTML = countryCapital

    const populationCountry = document.querySelector('#populationCountry')
    populationCountry.innerHTML = countryPopulation

    console.log("Usuarios:", countryFlag);
    console.log('Nombre: ')
  } catch (error) {
    alert(error)
    console.error("Error al obtener usuarios:", error);
  }


}

