
function Card({dog}){

    return(
        <div className="card">
            <img src={dog.image.url} alt={dog.breed.name} />
            <h2>{dog.breed.name}</h2>
            <p>{dog.breed.temperament}</p>
        </div>
    )

}

export default Card