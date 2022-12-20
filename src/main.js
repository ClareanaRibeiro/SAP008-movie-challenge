const requisicao = fetch ("https://api.themoviedb.org/3/movie/550?api_key=a2676b7491e0d298ba6d94909648f855")
.then(resposta => resposta.json())
.then(r => console.log(r))

