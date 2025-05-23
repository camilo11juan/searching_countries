
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
    const respuesta = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
    const datos = await respuesta.json();   
    const firstSearch = datos[0]['flags']['png'];

    const imgCountry = document.querySelector('#flag');
    imgCountry.src = firstSearch;



    console.log("Usuarios:", firstSearch);
  } catch (error) {
    alert(error)
    console.error("Error al obtener usuarios:", error);
  }


}

